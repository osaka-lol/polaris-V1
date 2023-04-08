$('#loadnav').load(`${location.protocol}//${location.host}/html/nav.html`);

if (!sessionStorage.getItem('loaderPlayed')) {
  setTimeout(function() {
    document.getElementById('loader').classList.add('hide');
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
    }, 1000);
    sessionStorage.setItem('loaderPlayed', 'true');
  }, 3000);
} else {
  document.getElementById('loader').style.display = 'none';
}