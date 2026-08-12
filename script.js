document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var form = document.getElementById('quote-form');
  var status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.style.color = '';
      status.textContent = 'Sending...';
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            status.textContent = "Thanks — Boaz will be in touch shortly.";
            status.style.color = '#1a7a3c';
            form.reset();
          } else {
            response.json().then(function (data) {
              if (data && data.errors) {
                status.textContent = data.errors.map(function (e) { return e.message; }).join(', ');
              } else {
                status.textContent = 'Something went wrong — please call or text 513-237-9552 instead.';
              }
              status.style.color = '#b3261e';
            });
          }
        })
        .catch(function () {
          status.textContent = 'Something went wrong — please call or text 513-237-9552 instead.';
          status.style.color = '#b3261e';
        });
    });
  }
});
