

/************* AJAX REQUESTS *************/

$(document).ready(function(){ //jquery container

$('.about').on("click", function(){
	//scroll
	$('html,body').animate({
        scrollTop: $("#main-area").offset().top},
        'slow');

	//load
	$('#main-area').load('about.html').fadeIn("slow");

	return false;
});


//WORKS section open
$('.works').on("click", function(){
	//scroll
	$('html,body').animate({
        scrollTop: $("#main-area").offset().top},
        'slow');

	//load
	$('#main-area').load('works.html').fadeIn("slow");

	return false;
});

//BLOG section area
$('.blog').on("click", function(){
	//scroll
	$('html,body').animate({
        scrollTop: $("#main-area").offset().top},
        'slow');

	//load
	$('#main-area').load('blog.html').fadeIn("slow");

	return false;
});



$('#aside-2').click(function(){
	$('#article-parent').load('blog-post-3.html');
});


$('#aside-3').click(function(){
	$('#article-parent').load('blog-post-4.html');
});


/********* JQUERY ANIMATIONS **********/

//Hamburguer Button in Mobile display


$(document).ready(function(){
  $('.icon').click(function(){
    $('.icon').toggleClass('active bg-red');
    $('#mobile-nav').slideToggle();
  })
});


// Back to top
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});


});//jquery closing container