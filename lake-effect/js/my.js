$('.column').scroll(function() {

 if ($(this).scrollTop()>0)
  {
     $('.header-type').fadeOut();
  }
 else
  {
   $('.header-type').fadeIn();
  }
});
