// Check if there is a saved tab data in localStorage
var tab = localStorage.getItem("tab");

if (tab) {
  // If there is saved data, try to parse it
  try {
    var tabData = JSON.parse(tab);
  } catch {
    // If there is an error in parsing, create an empty object
    var tabData = {};
  }
} else {
  // If there is no saved data, create an empty object
  var tabData = {};
}

// Set the title and icon fields to the values saved in tabData, if they exist
if (tabData.title) {
  document.getElementById("title").value = tabData.title;
}
if (tabData.icon) {
  document.getElementById("icon").value = tabData.icon;
}

// Default tab settings
var settingsDefaultTab = {
  title: "Polaris",
  icon: "",
};

// Function to set the document title
function setTitle(title = "") {
  if (title) {
    document.title = title;
  } else {
    document.title = settingsDefaultTab.title;
  }

  // Update the saved tab data with the new title
  var tab = localStorage.getItem("tab");

  if (tab) {
    // If there is saved data, try to parse it
    try {
      var tabData = JSON.parse(tab);
    } catch {
      // If there is an error in parsing, create an empty object
      var tabData = {};
    }
  } else {
    // If there is no saved data, create an empty object
    var tabData = {};
  }

  if (title) {
    // If there is a new title, update tabData
    tabData.title = title;
  } else {
    // If the title is empty, delete the title field from tabData
    delete tabData.title;
  }

  // Save the updated tab data to localStorage
  localStorage.setItem("tab", JSON.stringify(tabData));
}

// Function to set the favicon
function setFavicon(icon) {
  if (icon) {
    document.querySelector("link[rel='icon']").href = icon;
  } else {
    document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  }

  // Update the saved tab data with the new icon
  var tab = localStorage.getItem("tab");

  if (tab) {
    // If there is saved data, try to parse it
    try {
      var tabData = JSON.parse(tab);
    } catch {
      // If there is an error in parsing, create an empty object
      var tabData = {};
    }
  } else {
    // If there is no saved data, create an empty object
    var tabData = {};
  }

  if (icon) {
    // If there is a new icon, update tabData
    tabData.icon = icon;
  } else {
    // If the icon is empty, delete the icon field from tabData
    delete tabData.icon;
  }

  // Save the updated tab data to localStorage
  localStorage.setItem("tab", JSON.stringify(tabData));
}

function setCloak(cloak) { // applies only to premade cloaks
  switch (cloak) {
    case "search": // Google Search
      setTitle("Google");
      setFavicon("assets/fonts/icons/Google.ico");
      location.reload();
      break;
    case "drive": // Google Drive
      setTitle("My Drive - Google Drive");
      setFavicon("assets/fonts/icons/Drive.ico");
      location.reload();
      break;
      case "librex": // LibreX
      setTitle("LibreX");
      setFavicon("");
      location.reload();
      break;
    case "youtube": // YouTube 
      setTitle("YouTube");
      setFavicon("");
      location.reload();
      break;  
    case "gmail": // Gmail
      setTitle("Gmail");
      setFavicon("assets/fonts/icons/Gmail.ico");
      location.reload();
      break;
    case "classroom": // Google Classroom
      setTitle("Classes");
      setFavicon("");
      location.reload();
      break;
    case "canvas": // Canvas 
      setTitle("Canvas");
      setFavicon("assets/fonts/icons/Canvas.ico");
      location.reload();
      break;
    case "zoom": // Zoom
      setTitle("Zoom");
      setFavicon("");
      location.reload();
      break;
      case "cornhub": // Cornhub
      setTitle("Cornhub");
      setFavicon("");
      location.reload();
      break;
      case "indivious": // Indivious
      setTitle("Indivious");
      setFavicon("");
      location.reload();
      break;
    case "khan": // Khan Academy
      setTitle("Dashboard | Khan Academy"); 
      setFavicon("");
      location.reload();
      break;
  }
}
