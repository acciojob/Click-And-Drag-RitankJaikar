// Your code here.
// JavaScript code to handle drag functionality

const itemsContainer = document.querySelector('.items');

let isMouseDown = false;
let startX;
let scrollLeft;

// When mouse is down, record the position to start dragging
itemsContainer.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - itemsContainer.offsetLeft;
  scrollLeft = itemsContainer.scrollLeft;
  itemsContainer.classList.add('active'); // Add 'active' class to show cursor as grabbing
});

// When mouse leaves or mouseup, stop dragging
itemsContainer.addEventListener('mouseleave', () => {
  isMouseDown = false;
  itemsContainer.classList.remove('active');
});

itemsContainer.addEventListener('mouseup', () => {
  isMouseDown = false;
  itemsContainer.classList.remove('active');
});

// When mouse moves, drag the items container
itemsContainer.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return; // If mouse is not down, don't do anything
  e.preventDefault();
  const x = e.pageX - itemsContainer.offsetLeft;
  const walk = (x - startX) * 3; // Adjust the multiplier for speed
  itemsContainer.scrollLeft = scrollLeft - walk;
});