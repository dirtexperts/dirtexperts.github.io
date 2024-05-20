


/* 
	======================== ***** ============================= 
	Template Name: Cleanifer
	Template URI: https://www.designtocodes.com/product/cleanifer-cleaning-service-bootstrap-template/
	Description: This is the cleaning service template.
	Version: 1.1.0
	Author: designtocodes
	Author URI: https://www.designtocodes.com
	Text Domain: Cleanifer
*/
//Preloader Js
$(window).load(function() {
   $('#preloder').fadeOut(500);
});



document.body.addEventListener(
    "load",
    (e) => {
      if (e.target.tagName != "IMG") {
        return;
      }
      // Remove the blurry placeholder.
      e.target.style.backgroundImage = "none";
    },
    /* capture */ true
);

// WOW Animation
$(document).ready(function(){
  new WOW().init();
});



// about page owl carousel code
$(document).ready(function(){
    $(".d2c_about_team.owl-carousel").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        nav: true,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav: false,
            },
            376:{
              items:2,
              nav:false,
            },
            767:{
                items:3,
                nav:false,
            },
            1000:{
                items:4,
            }
        }
    });
});



// home banner owl carousel code
$(document).ready(function(){
  $(".owl-one").owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 400,
      loop:true,
      autoplay:true,
      autoplayTimeout:4000,
      smartSpeed: 1000,
      nav: true,
      dots:false,
      responsiveClass:true,
      autoplayHoverPause: true,
      responsive:{
          0:{
              items:1,
              nav: false,
          }
      }
  });
});


// home page testimonial section slider js
$(document).ready(function(){
  $(".owl-two").owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 400,
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      smartSpeed: 1000,
      nav: true,
      dots:false,
      responsiveClass:true,
      autoplayHoverPause: true,
      responsive:{
          0:{
              items:1,
              nav: false,
          }
      }
  });
});



// Gallery Page Load More Button

$(document).ready(function(){
  $(".d2c_gallery_column").slice(0, 6).show();

  if($(".d2c_gallery_column:hidden").length != 0) {
    $("#d2c_gallery_loadMore").css("display","block");
    
    $("#d2c_gallery_loadMore").on("click", function(e){
      e.preventDefault();
      $(".d2c_gallery_column:hidden").slice(0, 2).slideDown('show');
      if($(".d2c_gallery_column:hidden").length == 0) {
        $("#d2c_gallery_loadMore").css("display","none");
      }
    });
  }
});

// Blog Page Load More Button

$(document).ready(function(){
  $(".d2c_post_col").slice(0, 6).show();

  if($(".d2c_post_col:hidden").length != 0) {
    $("#d2c_post_loadMore").css("display","block");
    
    $("#d2c_post_loadMore").on("click", function(e){
      e.preventDefault();
      $(".d2c_post_col:hidden").slice(0, 2).slideDown('show');
      if($(".d2c_post_col:hidden").length == 0) {
        $("#d2c_post_loadMore").css("display","none");
      }
    });
  }
});





// Authors Load More Button

$(document).ready(function(){
  $(".d2c_authors_col").slice(0, 6).show();

  if($(".d2c_authors_col:hidden").length != 0) {
    $("#d2c_authors_loadMore").css("display","block");
    
    $("#d2c_authors_loadMore").on("click", function(e){
      e.preventDefault();
      $(".d2c_authors_col:hidden").slice(0, 3).slideDown('show');
      if($(".d2c_authors_col:hidden").length == 0) {
        $("#d2c_authors_loadMore").css("display","none");
      }
    });
  }
});


// Tags Load More Button

$(document).ready(function(){
  $(".d2c_tags_col").slice(0, 6).show();

  if($(".d2c_tags_col:hidden").length != 0) {
    $("#d2c_tags_loadMore").css("display","block");
    
    $("#d2c_tags_loadMore").on("click", function(e){
      e.preventDefault();
      $(".d2c_tags_col:hidden").slice(0, 3).slideDown('show');
      if($(".d2c_tags_col:hidden").length == 0) {
        $("#d2c_tags_loadMore").css("display","none");
      }
    });
  }
});


// Related Post Load More Button

$(document).ready(function(){
  $(".d2c_related_post_col").slice(0, 3).show();

  if($(".d2c_related_post_col:hidden").length != 0) {
    $("#d2c_related_loadMore").css("display","block");
    
    $("#d2c_related_loadMore").on("click", function(e){
      e.preventDefault();
      $(".d2c_related_post_col:hidden").slice(0, 3).slideDown('show');
      if($(".d2c_related_post_col:hidden").length == 0) {
        $("#d2c_related_loadMore").css("display","none");
      }
    });
  }
});


// Comment Load More Button

$(document).ready(function(){
  $(".list-group-item").slice(0, 6).show();

  if($(".list-group-item:hidden").length != 0) {
    $("#d2c_comment_loadMore").css("display","block");
    
    $("#d2c_comment_loadMore").on("click", function(e){
      e.preventDefault();
      $(".list-group-item:hidden").slice(0, 3).slideDown('show');
      if($(".list-group-item:hidden").length == 0) {
        $("#d2c_comment_loadMore").css("display","none");
      }
    });
  }
});



// home page counter
$(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
  });
});

// all form validation js start

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

// contact page form validation js end





jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.touchmove = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.wheel = {
    setup: function( _, ns, handle ){
        this.addEventListener("wheel", handle, { passive: true });
    }
};
jQuery.event.special.mousewheel = {
    setup: function( _, ns, handle ){
        this.addEventListener("mousewheel", handle, { passive: true });
    }
};


// scrollToBottomTop js 
$(document).ready(function(){
  
  //Get the button
  var mybutton = document.getElementById("scrollToTopBtn");
  mybutton.style.display = "none";
      
  // When the user scrolls down 150px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});