// Debugging Logs für CSS
console.log('Scripts.js loaded. Checking CSS...');
if (getComputedStyle(document.body).backgroundColor !== 'rgb(243, 244, 246)') {
  console.warn('Tailwind CSS scheint nicht zu laden – Body bg-gray-100 fehlt. Clear Cache oder check Pfade.');
  document.body.classList.add('unstyled');
}

// Fallback-Daten...
const fallbackData = { /* wie zuvor */ };

// Fetch und populateContent... (unverändert, aber mit zusätzlichem Log)
fetch('/data.json')
  .then(/* ... */)
  .then(data => {
    console.log('Data loaded. CSS should apply to cards now.');
    populateContent(data);
  })
  .catch(/* ... */);

// populateContent und sendChat... (unverändert)