// setInterval(showTime, 1000);
// function showTime() {
// 	let time = new Date();
// 	let hour = time.getHours();
// 	let min = time.getMinutes();
// 	let sec = time.getSeconds();
// 	am_pm = "AM";

// 	if (hour > 12) {
// 		hour -= 12;
// 		am_pm = "PM";
// 	}
// 	if (hour == 0) {
// 		hr = 12;
// 		am_pm = "AM";
// 	}

// 	hour = hour < 10 ? "0" + hour : hour;
// 	min = min < 10 ? "0" + min : min;
// 	sec = sec < 10 ? "0" + sec : sec;

// 	let currentTime = hour + ":"
// 			+ min + ":" + sec + am_pm;

// 	document.getElementById("clock")
// 			.innerHTML = currentTime;
// }
// showTime();
// document.getElementById

// var table = prompt("write a num")
// for( var i = 1; i <= 10 ; i++ ){
//     console.log( table + " x " + i + " = " + i*table )
// }
var cities = [ "lahore" , "karachi", "islamabad", "peshawer","qutta"];
var city = prompt("write a city name" )
var found = false 
for ( var  i = 0; i < cities.length; i++ ){
    if( city.toLowerCase() === cities[i].toLowerCase()   ){
        console.log(" Found " + city);
        found = true 
        break;

    }
}
if(!found){
    console.log( " not found " + city );
}