$(document).ready(function () {
  $("body").css("opacity", "1");
});

$(window).on("beforeunload", function () {
  $("body").css("opacity", "0");
});

$(document).on("click", "a", function (event) {
  event.preventDefault();
  var url = $(this).attr("href");
  $("body").css("opacity", "0");
  setTimeout(function () {
    window.location.href = url;
  }, 500);
});
