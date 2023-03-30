const toggleBtn = document.getElementById('toggle-btn');
const fadeBtn = document.getElementById('fade-btn');

toggleBtn.addEventListener('click', () => {
  if (fadeBtn.style.opacity === '0') {
    fadeBtn.style.opacity = '1';
  } else {
    fadeBtn.style.opacity = '0';
  }
});
