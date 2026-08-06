document.addEventListener('DOMContentLoaded', function () {

  var header = document.getElementById('site-header-home');
  if (!header) return;

  var toggle = header.querySelector('.nav-toggle');
  var nav = header.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

});
