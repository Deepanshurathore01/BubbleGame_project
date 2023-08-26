var hitrn =0;

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
  if(timer > 0){
    timer--;
    document.querySelector("#timeInt").textContent= timer;
  }
  else {
    clearInterval(timeInt);
    document.querySelector("#pbtm").innerHTML= `<h1>Game Over</h1>`;
  }
  
},1000)
}

// get new hit 
function getNewHit(){
  hitrn =Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent= hitrn;
}

// scroe value
var score =0;
function increaseScore(){
  score +=10;
  document.querySelector("#score").textContent = score;
}

// eventlistner 
document.querySelector("#pbtm").addEventListener("click",function(debts){
 var clickednum = Number(debts.target.textContent);
 if(clickednum === hitrn){
  increaseScore();
  makeBubbles();
  getNewHit();
 }
});

runTimer();
makeBubbles();
getNewHit();