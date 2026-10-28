(() => {
  const menuRail = document.querySelector('#menu-rail');
  const menuItems = window.plutoMenu || [];
  const createMenuCard = ({ number, type, title, copy, items, image, tone }) => `
    <article class="menu-card menu-card--${tone}">
      <div class="menu-card__photo"><img src="${image}" alt="Foto ${title} di Pluto Social Space" loading="lazy" /></div>
      <div class="menu-card__body">
        <span class="menu-card__number">${number}</span>
        <span class="menu-card__type">${type}</span>
        <h3>${title}</h3><p>${copy}</p>
        <ul>${items.map(({ name, price }) => `<li><span>${name}</span><b>${price}</b></li>`).join('')}</ul>
      </div>
    </article>`;
  if (menuRail) menuRail.innerHTML = menuItems.map(createMenuCard).join('');

  const navToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  navToggle?.addEventListener('click', () => {
    const opened = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!opened));
    nav?.classList.toggle('is-open', !opened);
    document.body.classList.toggle('menu-open', !opened);
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }));

  const dock = document.querySelector('[data-social-dock]');
  const dockToggle = dock?.querySelector('.social-dock__toggle');
  const dockLinks = dock?.querySelector('.social-dock__links');
  dockToggle?.addEventListener('click', () => {
    const opened = dockToggle.getAttribute('aria-expanded') === 'true';
    dockToggle.setAttribute('aria-expanded', String(!opened));
    dockLinks?.setAttribute('aria-hidden', String(opened));
    dock?.classList.toggle('is-open', !opened);
  });
  document.querySelector('#year').textContent = new Date().getFullYear();
})();