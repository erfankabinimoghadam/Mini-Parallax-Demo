const bg = document.querySelector('.parallax-bg');
const content = document.querySelector('.parallax-content');

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;

  // Background moves slower (parallax effect)
  bg.style.transform = `translateY(${scroll * 0.3}px)`;

  // Foreground moves slightly faster or at normal speed
  content.style.transform = `translate(-50%, calc(-50% + ${scroll * 0.6}px))`;
});
