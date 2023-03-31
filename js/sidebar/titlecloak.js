// Function to change the page title and save it to localStorage
function changeTitle(newTitle) {
  // Update the title element in the DOM
  document.getElementById('page-title').innerHTML = newTitle;
  // Save the new title to localStorage
  localStorage.setItem('pageTitle', newTitle);
}

// On page load, check if there's a saved title in localStorage and update the title element if found
window.onload = function() {
  var savedTitle = localStorage.getItem('pageTitle');
  if (savedTitle) {
    document.getElementById('page-title').innerHTML = savedTitle;
  }
}
