// Keep the project list and contact address in this file when updating the portfolio.
const projects = [
  {
    title: 'Spatial Forms', category: '3D Motion', app: 'after-effects', appName: 'After Effects', art: 'orbit',
    detail: '3D study', video: '../After effects/3D/3d.mp4'
  },
  {
    title: 'Colour in Layers', category: 'Colour Grade', app: 'davinci', appName: 'DaVinci Resolve', art: 'color',
    detail: 'Grade & masking', video: '../Davinci Resolve/Grade & masking/Portfolio3.mp4'
  },
  {
    title: 'Soft Focus', category: 'Motion Design', app: 'after-effects', appName: 'After Effects', art: 'motion',
    detail: 'Animated ad', video: '../After effects/ad video/animation.mp4'
  },
  {
    title: 'Speed / Shift', category: 'Speed Ramp', app: 'after-effects', appName: 'After Effects', art: 'speed',
    detail: 'Speed ramp study', video: '../After effects/Speed Ramp/ramp.mp4'
  },
  {
    title: 'One Scene, Two Looks', category: 'Shot Matching', app: 'davinci', appName: 'DaVinci Resolve', art: 'match',
    detail: 'Shot match', video: '../Davinci Resolve/shot match/SHORT MATCH.mp4'
  },
  {
    title: 'Product in Motion', category: 'Commercial Edit', app: 'premiere', appName: 'Premiere Pro', art: 'ad',
    detail: 'Advertisement', video: '../Premier pro/ad video/pr 09 01.mp4'
  },
  {
    title: 'Cut to the Beat', category: 'Fast Cut', app: 'davinci', appName: 'DaVinci Resolve', art: 'fast',
    detail: 'Rhythm edit', video: '../Davinci Resolve/fast cut/pr 1.mp4'
  },
  {
    title: 'Everyday Stories', category: 'Content Edit', app: 'premiere', appName: 'Premiere Pro', art: 'content',
    detail: 'Content video', video: '../Premier pro/content/project 1 mp4.mp4'
  },
  {
    title: 'Shape the Scene', category: 'Green Screen', app: 'premiere', appName: 'Premiere Pro', art: 'key',
    detail: 'Keying & compositing', video: '../Premier pro/green screen/Pr 06.mp4'
  }
];

const contactEmail = 'hello@yourdomain.com'; // Replace this address before publishing.
const grid = document.querySelector('#project-grid');
const player = document.querySelector('#player');
const playerVideo = document.querySelector('#player-video');
const playerTitle = document.querySelector('#player-title');
const playerCategory = document.querySelector('#player-category');
const closePlayer = document.querySelector('.player__close');
const intro = document.querySelector('.hero');

let introFadePending = false;
function updateIntroFade() {
  introFadePending = false;
  const fadeDistance = Math.max(intro.offsetHeight, window.innerHeight * 0.75);
  const progress = Math.min(1, Math.max(0, window.scrollY / fadeDistance));
  intro.style.setProperty('--intro-opacity', String(1 - progress));
}

window.addEventListener('scroll', () => {
  if (introFadePending) return;
  introFadePending = true;
  requestAnimationFrame(updateIntroFade);
}, { passive: true });
window.addEventListener('resize', updateIntroFade);
updateIntroFade();

function makeProject(project, index) {
  const card = document.createElement('article');
  card.className = 'project-card';
  card.dataset.app = project.app;

  const trigger = document.createElement('button');
  trigger.className = 'project-trigger';
  trigger.type = 'button';
  trigger.setAttribute('aria-label', `Play ${project.title}, ${project.category}`);

  const poster = document.createElement('span');
  poster.className = `poster poster--${project.art}`;
  poster.setAttribute('aria-hidden', 'true');
  const number = document.createElement('span');
  number.className = 'poster__number';
  number.textContent = `${String(index + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}`;
  const type = document.createElement('span');
  type.className = 'poster__type';
  type.textContent = project.category;
  const shapeA = document.createElement('span');
  shapeA.className = 'poster__shape poster__shape--a';
  const shapeB = document.createElement('span');
  shapeB.className = 'poster__shape poster__shape--b';
  const title = document.createElement('span');
  title.className = 'poster__title';
  title.textContent = project.title;
  const play = document.createElement('span');
  play.className = 'poster__play';
  play.textContent = '▶';
  poster.append(number, type, shapeA, shapeB, title, play);
  trigger.append(poster);

  const meta = document.createElement('div');
  meta.className = 'project-meta';
  const info = document.createElement('div');
  const heading = document.createElement('h3');
  heading.textContent = project.title;
  const caption = document.createElement('p');
  caption.textContent = `${project.appName} · ${project.detail}`;
  info.append(heading, caption);
  const indexLabel = document.createElement('span');
  indexLabel.className = 'project-meta__index';
  indexLabel.textContent = String(index + 1).padStart(2, '0');
  meta.append(info, indexLabel);
  card.append(trigger, meta);

  trigger.addEventListener('click', () => {
    playerTitle.textContent = project.title;
    playerCategory.textContent = `${project.appName} / ${project.category}`;
    playerVideo.muted = true;
    playerVideo.src = encodeURI(project.video);
    player.showModal();
    playerVideo.play().catch(() => {});
  });
  return card;
}

projects.forEach((project, index) => grid.append(makeProject(project, index)));

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    document.querySelectorAll('.filter').forEach((filter) => {
      const active = filter === button;
      filter.classList.toggle('is-active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('.project-card').forEach((card) => {
      card.hidden = selected !== 'all' && card.dataset.app !== selected;
    });
  });
});

function dismissPlayer() {
  playerVideo.pause();
  playerVideo.removeAttribute('src');
  playerVideo.load();
  if (player.open) player.close();
}
closePlayer.addEventListener('click', dismissPlayer);
player.addEventListener('click', (event) => {
  if (event.target === player) dismissPlayer();
});
player.addEventListener('close', () => {
  playerVideo.pause();
  playerVideo.removeAttribute('src');
  playerVideo.load();
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('is-open', open);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  nav.classList.remove('is-open');
}));

document.querySelector('#contact-link').href = `mailto:${contactEmail}`;
document.querySelector('#contact-link').textContent = contactEmail;
document.querySelector('#year').textContent = new Date().getFullYear();
