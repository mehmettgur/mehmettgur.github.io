function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener('mousemove', e => {
  const b = document.createElement('div');
  b.className = 'cursor-bubble';
  b.style.left = e.clientX + 'px';
  b.style.top  = e.clientY + 'px';
  document.body.appendChild(b);
  setTimeout(() => b.remove(), 800);
});

function createBgBubble(){
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

setInterval(createBgBubble, 150);

