console.log("works fine");
$(document).ready(function(){
//==================================================    
// OWL CAROUSEL FUNCTION
//================================================== 
    $('.owl-carousel').owlCarousel({
        loop:true,
        
        nav:true,
        items:3,
        dots:true,
        responsiveClass:true,
    		responsive:{
              0:{
                items:1,
                nav:true,
                margin:0,
                loop:true,
                dots:true
            },
	        600:{
	            items:3,
	            nav:true,
	            margin:0,
	            loop:true,
                dots:true
	        }
	    }
	      });


//==================================================    
// TOP BUTTON FUNCTION
//================================================== 

  $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });
    
    $('#scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });


//==================================================    
// STICKY HEADER FUNCTION
//================================================== 

        var header = $(".header");
    var headerOffset = header.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() > headerOffset) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    });

//==================================================    
// FIRST MODAL FUNCTION
//================================================== 

    $('#openModal').click(function(){
        $('#myModal').fadeIn();
        $("body").css('overflow', "hidden");
        $(".drop").fadeIn();
    });

   
    $('.modal-close').click(function(){
        $('#myModal').fadeOut();
        $("body").css('overflow', "auto");
        $(".drop").fadeOut();
    });

  
    $(window).click(function(event){
        if ($(event.target).is('#myModal')) {
            $('#myModal').fadeOut();
            $("body").css('overflow', "auto");
            $(".drop").fadeOut();
        }
    });

//==================================================    
// NAVBAR BUTTON ON MOBILE
//================================================== 
var isNewLogoDisplayed = false;
$(".menu-btn").click(function(){
    if($(window).width() < 600) {
        $(".navigation").toggleClass("visible").addClass('slide-in-left');
        
        if(isNewLogoDisplayed) {

            $(".menu-btn i").removeClass("fa-times").addClass("fa-bars");
            
            isNewLogoDisplayed = false;
        } else {
            
            $(".menu-btn i").removeClass("fa-bars").addClass("fa-times");
            
            isNewLogoDisplayed = true;
        }
    }
});
//==================================================    
// NAVBAR BUTTON ON MOBILE
//==================================================


//====================================================
// REVEAL WHEN SCROLL FUNCTION
// ===================================================
    function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

//====================================================
// DETAILS FUNCTION
// ===================================================
$(".staff-card").click(function(){
    var index = $(this).data("index");
    var details = $(this).find(".hidden-details").html();
    var imgSrc = $(this).find("img").attr("src");
    $(".staff-details").html("<div><img src='" + imgSrc + "' alt='avatar'><p>" + details + "</p></div>");
  });
//====================================================
// DETAILS FUNCTION
// ===================================================

//====================================================
// PAGINATION FUNCTION
// =================================================== 
var currentIndex = 0;
  var pageSize = 4;
  var numCards = $(".staff-card").length;

  // Show initial set of cards
  showCards();

  // Show next set of cards
  $(".next").click(function(){
    if (currentIndex < numCards - pageSize) {
      currentIndex += pageSize;
      showCards();
    }
  });

  // Show previous set of cards
  $(".prev").click(function(){
    if (currentIndex > 0) {
      currentIndex -= pageSize;
      showCards();
    }
  });

  // Function to show the current set of cards
  function showCards() {
    $(".staff-card").hide();
    $(".staff-card").slice(currentIndex, currentIndex + pageSize).show();
  }
//====================================================
// PAGINATION FUNCTION
// =================================================== 

//====================================================
// MAP URL 
// ===================================================

$(document).ready(function() {
    var mapUrl = $('#map-url').val();
    if(mapUrl) {
        $('#map-iframe-container').html('<iframe src="' + mapUrl + '"  frameborder="0" style="border:0;"></iframe>');
    } else {
        console.log("ok");
    }
});

//====================================================
// MAP URL 
// ===================================================

//===================================END===========================      
});  //========= Document ready closure ==============

