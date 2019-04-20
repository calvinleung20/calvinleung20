var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn1 = document.querySelector('div.full-img button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (var i = 1; i <=5; i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic'+i+'.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    var imgSrc = e.target.getAttribute('src');
    displayImage(imgSrc)
  }
}

function displayImage(imgSrc){
  displayedImage.setAttribute('src', imgSrc)
}
/* Wiring up the Darken/Lighten button */

btn1.onclick = function(){
if (btn1.getAttribute('class') === 'dark'){
  btn1.setAttribute('class', 'light')
  btn1.textContent = 'lighten'
  overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
}else{
  btn1.setAttribute('class','dark')
  btn1.textContent = 'darken'
  overlay.style.backgroundColor = "rgba(0,0,0,0)"
}
}




/* Wiring up the change background color button */

 var btn = document.querySelector('.backgroundcol')
function random(number){
  return Math.floor(Math.random()*(number+1))
}

/*

btn.onclick = function(){
  var rndcol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndcol ;
}
*/
//var btn = document.querySelector('button');

/*
Here you can see that we are including an event object e, in the function and in the function
setting a background color style on e.target(which is the  button itself)
The target property of the event object is always the reference to the element that the event has just
occured upon.
*/
function bgChange(e){
  var rndcol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndcol
  //if you want the button to change, you have to use the event object
  // the target property of the event object is always a reference to the element that the event has just occured upon
  //e.target.style.backgroundColor = rndcol
  console.log(e)
}
btn.addEventListener('click', bgChange)
/*
for(var i = 1; i <= 16, i++){
  var myDiv = document.createElement('.eventhandlertest div');
  document.body.appendChild(myDiv);
}
function bgChanger() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  return rndCol;
}
var divs = document.querySelectorAll('.eventhandlertest');

for(var i = 0; i < divs.length; i++){
  divs[i].onclick = function(e){
    e.target.style.backgroundColor = bgChanger()
  }
}
*/

var form = document.querySelector('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');
var para = document.querySelector('p');

form.onsubmit = function(e) {
  if(fname.value === '' || lname.value === ''){
    e.preventDefault(); // stops the form submission
    para.textContent = 'you need to fill in both names';
  }
}
