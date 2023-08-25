// function to create bubble 
function makeBubbles(){
  var clutter ="";

for(var i=1;i<=100;i++){
  var rn =Math.floor(Math.random()*10);
  clutter +=`<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML =clutter;
}

// function to find runTime
var timer =60; 
function runTimer(){
var timeInt = setInterval(function(){
  if(timer >0){
    timer--;
    document.querySelector("#timeInt").textContent= timer;
  }
  else {
    clearInterval(timerInt);
  }
  
},1000)
}

// get new hit 
function getNewHit(){
  var rn =Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent= rn;
}

// scroe value
var score =0;
function increaseScore(){
  score +=10;
  document.querySelector("#score").textContent = score;
}

runTimer();
makeBubbles();
getNewHit();