$('#loadnav').load(`${location.protocol}//${location.host}/html/nav.html`);

if (!sessionStorage.getItem('loaderPlayed')) {
  setTimeout(function() {
    document.getElementById('loader').classList.add('hide');
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
    }, 100);
    sessionStorage.setItem('loaderPlayed', 'true');
  }, 3000);
} else {
    if (document.getElementById('loader')) {
        document.getElementById('loader').style.display = 'none';
    }
}
