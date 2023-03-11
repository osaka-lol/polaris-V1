  const cssSelector = document.getElementById("css-selector");
  cssSelector.addEventListener("change", function() {
    const selectedCss = cssSelector.value;
    const linkTag = document.getElementById("custom-css");
    linkTag.href = selectedCss;
    localStorage.setItem("selectedCss", selectedCss);
  });

  const storedCss = localStorage.getItem("selectedCss");
  if (storedCss) {
    const linkTag = document.getElementById("custom-css");
    linkTag.href = storedCss;
    cssSelector.value = storedCss;
  }
