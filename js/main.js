jQuery(document).ready(function($){
//    owl-cariusel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:3,
            nav:false,
            
        },
        1000:{
            items:4,
            nav:true,
            loop:true,
        }
    }
});	
//  mean menu  
	$('.navbar').slicknav();
	
});