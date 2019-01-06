$(document).ready(function(){
    $(".loader").delay(500).fadeOut(0);
});

$('.top').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 1000); 
    return false; 
});