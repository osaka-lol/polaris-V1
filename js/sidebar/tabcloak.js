// Get the buttons and add event listeners to them
var driveBtn = document.getElementById("drive-btn");
var canvasBtn = document.getElementById("canvas-btn");
var gmailBtn = document.getElementById("gmail-btn");
var googleBtn = document.getElementById("google-btn");

driveBtn.addEventListener("click", function() {
  // Change the title and icon
  document.title = "Google Drive";
  document.querySelector('link[rel="shortcut icon"]').href = "/assets/fonts/icons/Drive.ico"; // put file path for icon here
  // Save the choice to local storage
  localStorage.setItem("websiteTitle", document.title);
  localStorage.setItem("websiteIcon", "/assets/fonts/icons/Drive.ico"); // put file path for icon here
});

canvasBtn.addEventListener("click", function() {
  // Change the title and icon
  document.title = "Canvas";
  document.querySelector('link[rel="shortcut icon"]').href = "/assets/fonts/icons/Canvas.ico"; // put file path for icon here
  // Save the choice to local storage
  localStorage.setItem("websiteTitle", document.title);
  localStorage.setItem("websiteIcon", "/assets/fonts/icons/Canvas.ico"); // put file path for icon here
});

gmailBtn.addEventListener("click", function() {
  // Change the title and icon
  document.title = "Gmail";
  document.querySelector('link[rel="shortcut icon"]').href = "/assets/fonts/icons/Gmail.ico"; // put file path for icon here
  // Save the choice to local storage
  localStorage.setItem("websiteTitle", document.title);
  localStorage.setItem("websiteIcon", "/assets/fonts/icons/Gmail.ico"); // put file path for icon here
});

googleBtn.addEventListener("click", function() {
  // Change the title and icon
  document.title = "Google";
  document.querySelector('link[rel="shortcut icon"]').href = ""; // put file path for icon here
  // Save the choice to local storage
  localStorage.setItem("websiteTitle", document.title);
  localStorage.setItem("websiteIcon", ""); // put file path for icon here
});

// On page load, check if there is a saved choice for the title and icon
if (localStorage.getItem("websiteTitle")) {
  document.title = localStorage.getItem("websiteTitle");
}

if (localStorage.getItem("websiteIcon")) {
  document.querySelector('link[rel="shortcut icon"]').href = localStorage.getItem("websiteIcon");
}
