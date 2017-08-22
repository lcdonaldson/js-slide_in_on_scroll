$(document).ready(function() {

  //window and animation items
  var animation_elements = $.find('.animation-element');

  //check to see if any animation containers are currently in view
  function activate() {
    //get current window information
    var win_ht = $(window).height();
    var win_top = $(window).scrollTop();
    var win_bottom = (win_top + win_ht);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the elements information
      var element = $(this);
      var element_ht = $(element).outerHeight();
      var element_top = $(element).offset().top;
      var element_bottom = (element_top + element_ht);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom >= win_top) && (element_top <= win_bottom)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      activate()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');

});
