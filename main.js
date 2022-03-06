let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let resety = document.getElementById("reset");


let hours = 0;
let minutes= 0;
let seconds = 0;

let newHours = 0;
let newMinuds = 0;
let newSeconds = 0;

let status = "stop";
let interval;


start.addEventListener("click",function() {
    start.disabled = true;
    
})


function stopWatch(){
  seconds++;
  if(seconds / 100 == 1){
    minutes++;
    seconds = 0;
    if(minutes / 60 == 1){
      hours++;
      minutes = 0;
    }
  }
  
  if(seconds < 10){
    newSeconds = "0" + seconds;
  }else{
    newSeconds = seconds
  }
  
  if(minutes < 10){
    newMinuds = "0" + minutes;
  }else{
    newMinuds = minutes
  }
  
  if(hours < 10){
    newHours = "0" + hours;
  }else{
    newHours = hours
  }
  
  
  display.innerHTML = newHours + ":" + newMinuds + ":" + newSeconds;
  
}
start.addEventListener("click",function(){
  if(status == "stop"){
    interval = setInterval(stopWatch, 10);
    status = "start"
  }
})

stop.addEventListener("click",function(){
  clearInterval(interval);
})

reset.addEventListener("click",function(){
  clearInterval(interval);
  status = "stop"
  display.innerHTML = "00:00:00"
  hours = 0;
  minutes= 0;
  seconds = 0;
  start.disabled = false;
})