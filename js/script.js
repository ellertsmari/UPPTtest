// Basic JS for starter project

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  themeToggle?.addEventListener('click', () => {
    // Toggle a data attribute on <html> to switch themes
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
  });

  const form = document.getElementById('sampleForm');
  form?.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const name = (document.getElementById('name') || {}).value || '';
    // Simple feedback — in a real app you'd send this to a server
    alert(`Thanks, ${name || 'friend'}! Form submitted.`);
    console.log('Form submitted:', { name });
    form.reset();
  });

  console.log('Starter JS loaded');
});
