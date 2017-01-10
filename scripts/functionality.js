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

$( document ).ready(function() {
    // var offset = $('#personalScroll').offset().top-450;
    // console.log('offset1',offset);
    // var offset2 = $('#skillsScroll').offset().top-450;
    // console.log('offset2',offset2);
    // var offset3 = $('#educationScroll').offset().top-450;
    // console.log('offset3',offset3);
    // var offset4 = $('#workScroll').offset().top-450;
    // console.log('offset4', offset4);
    // var offset5 = $('#contactScroll').offset().top-700;
    // console.log('offset5:', offset5);

    //this one works
    $(window).on('scroll', function() {
      var offset = $('#personalScroll').offset().top-450;
      console.log('offset1',offset);
      var offset2 = $('#skillsScroll').offset().top-450;
      console.log('offset2',offset2);
         if ( $(window).scrollTop() < offset2 )
             $('#one').show(100);
         else {
            $('#one').hide(100);
          }
        });
    //works
    $(window).on('scroll', function() {
      var offset2 = $('#skillsScroll').offset().top-450;
      console.log('offset2',offset2);
      var offset3 = $('#educationScroll').offset().top-450;
      console.log('offset3',offset3);

      if ($(window).scrollTop() > offset2 && $(window).scrollTop() < offset3)
          $('#two').show(100);
       else {
         $('#two').hide(100);
       }
     });
     //works
     $(window).on('scroll', function() {
       var offset3 = $('#educationScroll').offset().top-450;
       console.log('offset3',offset3);
       var offset4 = $('#workScroll').offset().top-450;
       console.log('offset4', offset4);
       if ( $(window).scrollTop() > offset3 && $(window).scrollTop() < offset4)
           $('#three').show(100);
        else {
          $('#three').hide(100);
        }
      });
      //works
      $(window).on('scroll', function() {
        var offset4 = $('#workScroll').offset().top-450;
        console.log('offset4', offset4);
        var offset5 = $('#contactScroll').offset().top-700;
        console.log('offset5:', offset5);
        if ( $(window).scrollTop() > offset4 && $(window).scrollTop() < offset5)
            $('#four').show(100);
         else {
           $('#four').hide(100);
         }
       });
       //works
       $(window).on('scroll', function() {
         var offset5 = $('#contactScroll').offset().top-700;
         console.log('offset5:', offset5);
         if ( $(window).scrollTop() > offset5 )
             $('#five').show(100);
          else {
            $('#five').hide(100);
          }
        });
});
