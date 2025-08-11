// Dark Mode Toggle
document.getElementById('darkToggle').addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

// Lade data.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Wissen Karten
    const wissenContainer = document.getElementById('wissenCards');
    data.wissen.forEach(item => {
      const card = document.createElement('div');
      card.className = 'bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover-morph';
      card.innerHTML = `<i class="fas ${item.icon} text-4xl mb-4"></i><h3 class="text-2xl">${item.title}</h3><p>${item.description}</p>`;
      wissenContainer.appendChild(card);
    });

    // xAI Chart
    const ctx = document.getElementById('xaiChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Grok 3', 'Grok 4', 'API'],
        datasets: [{ label: 'Zugriffe', data: [100, 50, 30], backgroundColor: ['#3b82f6', '#ef4444', '#10b981'] }]
      },
      options: { responsive: true }
    });

    // Tools Accordion
    const accordion = document.getElementById('toolsAccordion');
    data.tools.forEach((tool, index) => {
      const item = document.createElement('div');
      item.className = 'accordion-item';
      item.innerHTML = `
        <h2 class="accordion-header" id="heading${index}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}">
            ${tool.name}
          </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse" data-bs-parent="#toolsAccordion">
          <div class="accordion-body">
            ${tool.description}<pre><code>${tool.snippet}</code></pre>
          </div>
        </div>`;
      accordion.appendChild(item);
    });
  });

// Chat Demo
const chatExamples = /* Von data.json, aber hardcoded für Simplicity */ [
  { question: "Was ist dein Wissenscutoff?", answer: "Kein Cutoff..." },
  // ...
];
const messages = document.getElementById('chatMessages');
const input = document.getElementById('chatInput');
const send = document.getElementById('sendChat');

send.addEventListener('click', () => {
  const userMsg = input.value;
  if (userMsg) {
    messages.innerHTML += `<p><strong>User:</strong> ${userMsg}</p>`;
    const response = chatExamples.find(ex => userMsg.toLowerCase().includes(ex.question.toLowerCase()))?.answer || 'Entschuldigung, simuliere eine Antwort zu Cyber Security.';
    messages.innerHTML += `<p><strong>Grok:</strong> ${response}</p>`;
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
  }
});