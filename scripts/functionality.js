//checking to see if everything loads
console.log("This is loading...");
//scrolling
$('a#personalLink').click(function() {
  $.scrollTo(document.getElementById('personalScroll'), 400,{offset:-389});
});
$('a#skillsLink').click(function() {
  $.scrollTo(document.getElementById('skillsScroll'), 400,{offset:-389});
});
$('a#educationLink').click(function() {
  $.scrollTo(document.getElementById('educationScroll'), 400,{offset:-389});
});
$('a#workLink').click(function() {
  $.scrollTo(document.getElementById('workScroll'), 400,{offset:-389});
});
$('a#contactLink').click(function() {
  $.scrollTo(document.getElementById('contactScroll'), 400,{offset:-389});
});
//hiding of the print pop out
$('a.box').click(function() {
  $(".box").hide(100);
});

//time checker for the greeting
var date = new Date();
var time = date.getHours();
console.log(time);
function timecheck(){
  if (time >= 5 & time <= 11) {
  document.getElementById("personalScroll").innerHTML = 'Good Morning';
  }
  else if (time >= 12 & time <= 23) {
  document.getElementById("personalScroll").innerHTML = 'Good Evening';
  }
  else if (time >= 0 & time <= 4) {
  document.getElementById("personalScroll").innerHTML = 'Still up?' ;
}}
window.onload =timecheck;


    // BLUR works but it freezes everything and is way too quick
    // $(window).scroll(function(e) {
    //     var s = $(window).scrollTop(),
    //         opacityVal = (s / 200);
    //     //$('.blurred-image').css('opacity', opacityVal);
    //      $(".out").css({"filter": "blur("+s+"px)" });
    //      console.log(s);
    // });
