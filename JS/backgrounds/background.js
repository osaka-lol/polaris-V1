// Get the <select> element and the <link> element
const cssSelector = document.getElementById('css-selector');
const cssFile = document.getElementById('css-file');

// Listen for changes to the <select> element
cssSelector.addEventListener('change', function() {
  // Get the selected value
  const selectedValue = cssSelector.value;

  // Change the href of the <link> element to the selected CSS file
  cssFile.href = selectedValue;
});
