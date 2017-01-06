var date = new Date();
var time = date.getHours();
console.log(time);
function timecheck(){
  if (time >= 5 && time <= 11) {
  document.getElementById("personalScroll").innerHTML = "Good Morning";
  }
  else if (time >= 12 && time <= 7) {
  document.getElementById("personalScroll").innerHTML = "Good Evening";
  }
  else if (time >= 1 & time <= 3) {
  document.getElementById("personalScroll").innerHTML = 'Still up?' ;
}}
window.onload =timecheck;
