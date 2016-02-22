var seconds=0;
var timerId;
var active=false;

var start = document.getElementById('start');
start.addEventListener("click", start1);

var pause = document.getElementById('pause');
pause.addEventListener("click", pause1);

var reset = document.getElementById('reset');
reset.addEventListener("click", reset1);


function start1() {
	if(active==false){
	timerId = setInterval(showTime, 1000);
	active=true;
	}
}

function showTime() {
	var display = document.getElementById("timer");
	display.innerHTML = seconds++;
}

function pause1() {
      clearInterval(timerId);
      active=false;
    }

function reset1() {
	clearInterval(timerId);
	seconds=0;
	document.getElementById("timer").innerHTML = "Stop Watch";
	active=false;
}
