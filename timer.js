let timer;
let timeLeft = 10;

function startTimer(callback){
clearInterval(timer);
timeLeft = 10;
document.getElementById("time").innerText = timeLeft;

timer = setInterval(()=>{
timeLeft--;
document.getElementById("time").innerText = timeLeft;

if(timeLeft<=0){
clearInterval(timer);
callback();
}
},1000);
}