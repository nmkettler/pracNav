//Scroll Bar color adjust

$(document).scroll(function() {
  var dHeight = $(this).height()-$(window).height();
  if (dHeight >= $(this).scrollTop()) {
    $('.navbar-default').css('background', 'rgba(96,96,96,' + $(this).scrollTop() / dHeight + ')');
  }
});

//Newsfeed Buttons Show/Hide

$(document).ready(function() {

    $('.containero').hide();
    $('#btn-showinfo').click(function(){
        var target = "#" + $(this).data("target");
        $(".containero").not(target).hide();
        $(target).show();
    });

});

$(document).ready(function() {
  $('#btn-hideinfo').click(function(){
    $('.containero').hide();
  });
});

$(document).ready(function(){

// Add slideDown animation to dropdown
$('.dropdown').on('show.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
});

// Add slideUp animation to dropdown
$('.dropdown').on('hide.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
});

});



