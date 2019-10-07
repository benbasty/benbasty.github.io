$(document).ready(function(){
  //access nav part with open class
  $('.menu-toggler').on('click', function(){
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });
  // typed js
  var typed = new Typed(".typed", {
    strings: ["Web Developer", "Freelancer", "Problem Solver"],
    typeSpeed: 60,
    startDelay: 500,
    loop: true,
    showCursor: false
  });

  //remove menu when clicked
  $('.top-nav .nav-link').on('click', function(){
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });

  // smooth scrolling
  $('nav a[href*="#"]').on('click',function(){
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top-100
    }, 2000);
  });

  //up button to top
  $('#up').on('click', function(){
    $('html,body').animate({
      scrollTop:0
    }, 2000);
  });

  //Animate on scroll
  AOS.init({
    easing : 'ease',
    duration: 1000,
    once:true
  });

  // fixed nav bar

  const nav = $("#navigationBar");
  const navTop = nav.offset().top;
  $(window).on("scroll", stickyNavigation);
  function stickyNavigation() {
      var body = $("body");
      if($(window).scrollTop() >= navTop) {
          body.css("padding-top", nav.outerHeight() + "px");
          body.addClass("fixedNav");
      } else {
          body.css("padding-top", 0);
          body.removeClass("fixedNav");
      }
  }


});
