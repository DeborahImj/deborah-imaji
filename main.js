// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav after clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Generate the commit-graph style grid in the hero
const grid = document.querySelector('.commitgrid');
if (grid) {
  const cellCount = 84; // 14 columns x 6 rows
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('span');
    // Weighted random opacity so it reads like a real contribution graph
    const r = Math.random();
    let opacity;
    if (r < 0.35) opacity = 0.08;
    else if (r < 0.6) opacity = 0.25;
    else if (r < 0.8) opacity = 0.5;
    else if (r < 0.93) opacity = 0.75;
    else opacity = 1;
    cell.style.opacity = opacity;
    grid.appendChild(cell);
  }
}
