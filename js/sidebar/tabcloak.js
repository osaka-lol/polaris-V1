function changeFaviconTitle(faviconName, title) {
        // Change favicon
        var favicon = document.getElementById('favicon');
        favicon.href = faviconName + '.png';
        
        // Change title
        document.title = title;
        
        // Save changes to localStorage
        localStorage.setItem('favicon', faviconName + '.png');
        localStorage.setItem('title', title);
      }
      
      // Load saved changes from localStorage
      var savedFavicon = localStorage.getItem('favicon');
      if (savedFavicon) {
        document.getElementById('favicon').href = savedFavicon;
      }
      var savedTitle = localStorage.getItem('title');
      if (savedTitle) {
        document.title = savedTitle;
      }
