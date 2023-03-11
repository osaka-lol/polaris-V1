const selectElement = document.querySelector('#style-select');
const styleElement = document.querySelector('#style');

// Check if a stylesheet preference has been saved in local storage
const savedStyle = localStorage.getItem('style');
if (savedStyle) {
  styleElement.setAttribute('href', savedStyle);
  selectElement.value = savedStyle;
}

selectElement.addEventListener('change', (event) => {
  const selectedOption = event.target.value;
  styleElement.setAttribute('href', selectedOption);
  
  // Save the selected option to local storage
  localStorage.setItem('style', selectedOption);
});
