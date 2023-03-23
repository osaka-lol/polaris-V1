// define a function to change the CSS file
function changeStyle(style) {
  var styleLink = document.getElementById("style-link");
  styleLink.href = style;
}

// add click event listeners to the buttons
var button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
  changeStyle("style1.css");
});

var button2 = document.getElementById("button2");
button2.addEventListener("click", function() {
  changeStyle("style2.css");
});
