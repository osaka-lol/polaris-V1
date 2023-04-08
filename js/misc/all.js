$('#loadnav').load(`${location.protocol}//${location.host}/html/nav.html`);

setTimeout(function() {
    document.getElementById('loader').classList.add('hide');
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
    }, 1000);
}, 3000);
