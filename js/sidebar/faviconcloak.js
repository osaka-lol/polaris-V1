function changeFavicon(iconLink) {
  var link = document.getElementById("favicon");
  link.href = iconLink;
  localStorage.setItem("selectedFavicon", iconLink);
}
