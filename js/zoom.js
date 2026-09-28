// Valitsee suurennuksen suunnan kuvan sijainnin mukaan, ettei kuva mene ruudun reunan yli.
document.querySelectorAll(
  '.shots img, .image-grid img, .ba-item img, .aws-architecture img, .aws-gallery img, .test-content > img'
).forEach(function (img) {
  img.addEventListener('mouseenter', function () {
    var r = img.getBoundingClientRect();
    var c = (r.left + r.width / 2) / window.innerWidth;
    img.style.transformOrigin = c < 0.4 ? 'left center' : c > 0.6 ? 'right center' : 'center';
  });
});
