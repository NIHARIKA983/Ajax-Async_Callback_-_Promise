//program to demonstrate async nature of javascript
function showTime() {
	const date = new Date();
	return date.getHours() + "Hrs:" +date.getMinutes()+"Mins:"+date.getSeconds()+"Secs";

}

function showSessionExpire(){
console.log("Activity-B : Your session expired at :"+showTime());
}

console.log("Activity-A : Triggerring Activity-B at :"+showTime());
setTimeout(showSessionExpire,5000);
console.log("Activity-A : Triggereg Acitvity-B at "+showTime()+"will execute after 5 seconds");