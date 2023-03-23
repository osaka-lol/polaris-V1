// define a function to change the CSS file
function changeStyle(style) {
  var styleLink = document.getElementById("style-link");
  styleLink.href = style;
}

// add click event listeners to the buttons
var button1 = document.getElementById("creamsicle");
button1.addEventListener("click", function() {
  changeStyle("/css/themes/theme-creamsicle.css");
});

var button2 = document.getElementById("grey");
button2.addEventListener("click", function() {
  changeStyle("/css/themes/theme-grey.css");
});
