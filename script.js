function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const MAX_CURSOR_BUBBLES = 25;
const MAX_BG_BUBBLES = 35;
let lastCursorBubbleTime = 0;

function trimBubbles(selector, maxCount) {
  const bubbles = document.querySelectorAll(selector);
  const overflow = bubbles.length - maxCount;

  for (let i = 0; i < overflow; i++) {
    bubbles[i].remove();
  }
}

document.addEventListener('mousemove', e => {
  const now = Date.now();
  if (now - lastCursorBubbleTime < 40) {
    return;
  }
  lastCursorBubbleTime = now;
  trimBubbles('.cursor-bubble', MAX_CURSOR_BUBBLES - 1);

  const b = document.createElement('div');
  b.className = 'cursor-bubble';
  b.style.left = e.clientX + 'px';
  b.style.top  = e.clientY + 'px';
  document.body.appendChild(b);
  setTimeout(() => b.remove(), 800);
});

function createBgBubble(){
  trimBubbles('.bg-bubble', MAX_BG_BUBBLES - 1);

  const b = document.createElement('div');
  b.className = 'bg-bubble';

  const size = Math.random() * 6 + 2;
  b.style.width  = size + 'px';
  b.style.height = size + 'px';
 
  b.style.left = Math.random() * window.innerWidth + 'px';
  b.style.top  = Math.random() * window.innerHeight + 'px';
  document.body.appendChild(b);
 
  b.addEventListener('animationend', () => b.remove());
}

setInterval(createBgBubble, 350);
