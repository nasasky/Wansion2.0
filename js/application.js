$(document).ready(function() {
  $(document).on('init.slides', function() {
    $('.loading-container').fadeOut(function() {
      $(this).remove();
    });
  });

  $('#slides').superslides({
    slide_easing: 'easeInOutCubic',
    slide_speed: 800,
    pagination: true,
    hashchange: true,
    scrollable: true
  });




  $(document).on('click', '#download', function(e) {
    window.location.hash = "#download-" + version.replace(/\./g, '');
    _gauges.push(['track']);
  });
});
