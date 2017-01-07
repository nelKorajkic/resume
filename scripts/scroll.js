console.log("This is loading...");

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

$('a.box').click(function() {
  $(".box").hide(100);
});
