$(document).ready(function(){
    $(".loader").fadeOut(0);
});

$('.top').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 1000); 
    return false; 
});