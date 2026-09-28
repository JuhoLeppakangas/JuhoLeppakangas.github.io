// Sisältö liukuu näkyviin, kun se vieritetään ruudulle.
// Jo ensimmäisellä ruudulla näkyvät elementit eivät animoidu.
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('main section:not(.hero) .wrap > *').forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    var i = Array.prototype.indexOf.call(el.parentNode.children, el);
    el.classList.add('reveal');
    el.style.setProperty('--d', (i % 3) * 0.08 + 's');
    io.observe(el);
  });
})();
