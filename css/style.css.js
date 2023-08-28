$(document).ready(function(){
	// begin burger menu
  $('.mob-start').on('click', function () {
        if($('.mob-start').hasClass('mob-start--active')){
            $('.mob-start').removeClass('mob-start--active');
            $('.menu').removeClass('menu--active');
        }else{
            $('.mob-start').addClass('mob-start--active');
            $('.menu').addClass('menu--active');
        }                           
  });
  // end burger menu

  // begin закрытия окна уведомления
  $(document).click(function(event) { 
      if(!$(event.target).closest('.message').length) { 
        if($('.alert').hasClass('alert--active')){
            $('.alert').removeClass('alert--active');
        }
      }  
  });
  $('.my-alert__close').click(function(event) {
      $('.alert').removeClass('alert--active');
  });   
  // end закрытия окна уведомления
 
});  