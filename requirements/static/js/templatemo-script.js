$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var target = $(this.getAttribute('href'));

    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 100 // Adjust the offset for a different effect
      }, 800, 'easeInOutExpo'); // You can change the duration and easing for different effects
    }
  });
});
