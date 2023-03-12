// script.js
function changeStyle() {
  var styleSelect = document.getElementById("styleSelect");
  var selectedStyle = styleSelect.options[styleSelect.selectedIndex].value;
  var styleLink = document.getElementById("style");
  styleLink.href = selectedStyle;
  localStorage.setItem("selectedStyle", selectedStyle);
}

// load selected style from local storage
var selectedStyle = localStorage.getItem("selectedStyle");
if (selectedStyle) {
  var styleLink = document.getElementById("style");
  styleLink.href = selectedStyle;
  var styleSelect = document.getElementById("styleSelect");
  for (var i = 0; i < styleSelect.options.length; i++) {
    if (styleSelect.options[i].value == selectedStyle) {
      styleSelect.selectedIndex = i;
      break;
    }
  }
}
