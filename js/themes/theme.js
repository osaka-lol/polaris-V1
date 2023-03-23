function changeStyle(style) {
  var styleLink = document.getElementById("style-link");
  styleLink.href = style;
  localStorage.setItem("selectedStyle", style);
}

// add click event listeners to the buttons
var button1 = document.getElementById("theme1");
theme1.addEventListener("click", function() {
  changeStyle("/css/themes/theme-purple-orange.css");
});

var button2 = document.getElementById("theme2");
theme2.addEventListener("click", function() {
  changeStyle("/css/themes/theme-grey.css");
});

// load selected style from local storage
var selectedStyle = localStorage.getItem("selectedStyle");
if (selectedStyle) {
  changeStyle(selectedStyle);
}
