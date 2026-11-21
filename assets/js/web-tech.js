/* Menue
------------------------------------------------------------------------------*/

const addMenuGUI = () => {
  const menuButton = document.querySelector('[data-js-menu]');
  const menu = document.querySelector('[data-js-menu-state]');

  if (!menuButton) return;

  menuButton.addEventListener('click', (event) => {
    event.preventDefault();
    menuButton.classList.toggle('is-open');

    const isOpen = menu.dataset.jsMenuState === 'menu-is-open';
    menu.dataset.jsMenuState = isOpen ? 'menu-is-closed' : 'menu-is-open';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
  });
};

/* Zeitplan: zum nächsten Termin springen
------------------------------------------------------------------------------*/

const addGotoToday = () => {
  const days = [...document.querySelectorAll("[data-content='timetable'] [data-date]")];
  const button = document.querySelector('.goto-today');
  if (!days.length || !button) return;

  const pad = (n) => String(n).padStart(2, '0');
  const now = new Date();
  const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

  // Erster Termin ab heute, sonst der letzte Termin im Plan
  const target = days.find((day) => day.dataset.date >= today) || days[days.length - 1];
  if (target.dataset.date === today) target.classList.add('is-today');

  button.hidden = false;
  button.addEventListener('click', () => {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
};

/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', () => {
  addMenuGUI();
  addGotoToday();
});
