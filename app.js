//  ============ STOP WATCH  ======================= 
hour = 0;
min = 0;
sec = 0;
var hourVal = document.getElementById('hour')
var minVal = document.getElementById('min')
var secVal = document.getElementById('sec')
var strtBtn = document.getElementById('strtBtn')
var stopBtn = document.getElementById('stopBtn')
var interval;

function render(){
    hourVal.innerHTML = hour
    minVal.innerHTML = min
    secVal.innerHTML = sec
}
function start(){
    sec++
    strtBtn.disabled = true
    stopBtn.disabled = false
    if(sec == 60){
       min++
       sec = 0
       if(min == 60){
      hour++
      min = 0
       }
    }
    render();
}
function stop(){
    clearInterval(interval)
    strtBtn.disabled = false
    stopBtn.disabled = true
}
function reset(){
    sec = 0
    min = 0
    hour = 0
    stop()
    render()
}
function timer(){
interval = setInterval(function (){
    start()
},1000)
}
// ===============================================