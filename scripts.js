// Debugging Logs
console.log('Scripts.js loaded successfully.');

// Fallback-Daten, falls data.json fehlt
const fallbackData = {
  wissen: [
    { title: 'Fallback: Phishing', description: 'Fallback-Info: Phishing ist gefährlich.', icon: 'fa-shield-alt' }
  ],
  tools: [
    { title: 'Fallback: Code Execution', description: 'Fallback-Tool.', snippet: '<pre><code>print("Fallback")</code></pre>' }
  ],
  chatResponses: { 'Fallback?': 'Fallback-Antwort.' }
};

// Lade Data mit Fehlerbehandlung
fetch('data.json')
  .then(response => {
    if (!response.ok) throw new Error('JSON nicht gefunden');
    return response.json();
  })
  .then(data => {
    console.log('Data.json loaded successfully.');
    populateContent(data);
  })
  .catch(error => {
    console.error('Fehler beim Laden von data.json:', error);
    console.log('Verwende Fallback-Daten.');
    populateContent(fallbackData);
  });

// Funktion zum Befüllen der Inhalte
function populateContent(data) {
  // Wissen-Karten
  const wissenContainer = document.getElementById('wissen-cards');
  data.wissen.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <i class="fas ${item.icon} text-4xl mb-4"></i>
      <h3 class="text-2xl font-bold mb-2">${item.title}</h3>
      <p>${item.description}</p>
    `;
    wissenContainer.appendChild(card);
  });

  // Tools-Accordion
  const toolsContainer = document.getElementById('tools-accordion');
  data.tools.forEach((tool, index) => {
    const item = document.createElement('div');
    item.className = 'accordion-item';
    item.innerHTML = `
      <h2 class="accordion-header" id="heading${index}">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}">
          ${tool.title}
        </button>
      </h2>
      <div id="collapse${index}" class="accordion-collapse collapse" data-bs-parent="#tools-accordion">
        <div class="accordion-body">
          ${tool.description}
          ${tool.snippet}
        </div>
      </div>
    `;
    toolsContainer.appendChild(item);
  });

  // Chart.js: Visualisierung
  const ctx = document.getElementById('threatChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Phishing', 'Ransomware', 'DDoS'],
      datasets: [{ label: 'Threats 2025', data: [65, 59, 80], backgroundColor: 'rgba(54, 162, 235, 0.5)' }]
    },
    options: { responsive: true }
  });
}

// Chat-Funktion
function sendChat() {
  const input = document.getElementById('chat-input');
  const output = document.getElementById('chat-output');
  const question = input.value;
  output.innerHTML += `<p><strong>Du:</strong> ${question}</p>`;

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const response = data.chatResponses[question] || 'Entschuldigung, das weiß ich nicht. Frage zu Cyber Security!';
      output.innerHTML += `<p><strong>Lazote (Grok 4):</strong> ${response}</p>`;
      output.scrollTop = output.scrollHeight;
    })
    .catch(() => {
      output.innerHTML += `<p><strong>Lazote (Grok 4):</strong> Fallback: Frage nicht gefunden.</p>`;
      output.scrollTop = output.scrollHeight;
    });

  input.value = '';
}