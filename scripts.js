import { data } from './data.js';

document.getElementById('darkToggle').addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', document.documentElement.classList.contains('dark') ? 'enabled' : 'disabled');
});
if (localStorage.getItem('darkMode') === 'enabled') document.documentElement.classList.add('dark');

const wissenCards = document.getElementById('wissenCards');
data.wissen.forEach(item => {
  const card = document.createElement('div');
  card.className = 'bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover-morph';
  card.innerHTML = `<i class="fas ${item.icon} text-4xl mb-4"></i><h3 class="text-2xl">${item.title}</h3><p>${item.description}</p>`;
  wissenCards.appendChild(card);
});

const ctx = document.getElementById('xaiChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: { labels: ['Grok 3', 'Grok 4', 'API'], datasets: [{ label: 'Zugriffe', data: [100, 50, 30], backgroundColor: ['#3b82f6', '#ef4444', '#10b981'] }] },
  options: { responsive: true }
});

const accordion = document.getElementById('toolsAccordion');
data.tools.forEach((tool, i) => {
  accordion.innerHTML += `
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading${i}">
        <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse${i}">${tool.name}</button>
      </h2>
      <div id="collapse${i}" class="accordion-collapse collapse">
        <div class="accordion-body">${tool.description}<pre><code>${tool.snippet}</code></pre></div>
      </div>
    </div>`;
});

const messages = document.getElementById('chatMessages');
document.getElementById('sendChat').addEventListener('click', () => {
  const input = document.getElementById('chatInput');
  const msg = input.value;
  if (msg) {
    messages.innerHTML += `<p><strong>User:</strong> ${msg}</p>`;
    const res = data.chatExamples.find(ex => msg.toLowerCase().includes(ex.question.toLowerCase()))?.answer || 'Simulierte Antwort zu Cyber Security.';
    messages.innerHTML += `<p><strong>Grok:</strong> ${res}</p>`;
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
  }
});