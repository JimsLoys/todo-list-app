document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const staticContent = document.getElementById('static-content');
  const loginForm = document.getElementById('login-form');

  function loadPage(path) {
    if (!app) return;

    if (staticContent) {
      staticContent.style.display = 'none';
    }

    fetch(path)
      .then(response => {
        if (!response.ok) {
          return fetch('404.html');
        }
        return response;
      })
      .then(response => response.text())
      .then(html => {
        app.innerHTML = '';
        app.innerHTML = html;
        setupSPA();
      })
      .catch(error => {
        console.error('Error loading the page:', error);
        app.innerHTML = '<h1>Error Loading Page</h1><p>Something went wrong. Please try again later.</p>';
      });
  }

  function setupSPA() {
    document.querySelectorAll('a').forEach(anchor => {
      anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const path = anchor.getAttribute('href');
        window.history.pushState({}, '', path);
        loadPage(path);
      });
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      loadPage('todolist.html');
    });
  }

  window.onpopstate = () => {
    loadPage(window.location.pathname);
  };

  if (!window.history.state) {
    if (staticContent) {
      staticContent.style.display = 'block';
    }
  } else {
    loadPage(window.location.pathname);
  }
});
