$(window).load(function(){
    $(".loader").hide();
});

$('.top').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 1000); 
    return false; 
});