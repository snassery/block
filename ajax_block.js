(function($) {
  $.fn.ajax_block = function() {
    $('#ajax-block').hide();
    setTimeout(function() {
      $('#ajax-display').fadeOut().html("").show();
      $('#ajax-block').fadeIn();
    }, 5000)
  }
})(jQuery);