const burgerMenu = document.querySelector('.burger-menu');
const navigationMenu = document.querySelector('nav ul');
burgerMenu.addEventListener('click', () => {
    navigationMenu.classList.toggle('nav-visible');
});

const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const trackItems = track.children; 
let currentPosition = 0; 
const itemsToMove = 4; 
function updateCarousel() {
  const cardWidth = trackItems[0].offsetWidth;
  const cardGap = parseInt(window.getComputedStyle(track).gap);
  const containerWidth = document.querySelector('.carousel-container').offsetWidth;
  const trackWidth = track.scrollWidth;
  const maxScroll = trackWidth - containerWidth;
  currentPosition = Math.min(currentPosition, maxScroll);
  track.style.transform = `translateX(-${currentPosition}px)`;
  prevButton.style.display = (currentPosition === 0) ? 'none' : 'block';
  nextButton.style.display = (currentPosition >= maxScroll) ? 'none' : 'block';
}
nextButton.addEventListener('click', () => {
  const cardWidth = trackItems[0].offsetWidth;
  const cardGap = parseInt(window.getComputedStyle(track).gap);
  const containerWidth = document.querySelector('.carousel-container').offsetWidth;
  const trackWidth = track.scrollWidth;
  const maxScroll = trackWidth - containerWidth;
  const jumpDistance = (cardWidth + cardGap) * itemsToMove;
  let newPosition = currentPosition + jumpDistance;
  currentPosition = Math.min(newPosition, maxScroll);
  updateCarousel();
});
prevButton.addEventListener('click', () => {
  const cardWidth = trackItems[0].offsetWidth;
  const cardGap = parseInt(window.getComputedStyle(track).gap);
  const jumpDistance = (cardWidth + cardGap) * itemsToMove;
  let newPosition = currentPosition - jumpDistance;
  currentPosition = Math.max(newPosition, 0);
  updateCarousel();
});
updateCarousel();

const ctaLinks = document.querySelectorAll('.hero-cta-button, .plan-cta-button');
ctaLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });
});