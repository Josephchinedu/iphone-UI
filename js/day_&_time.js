var today = new Date();
var day = today.getDay();
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById('day').innerHTML = dayList[day];

//Today Time
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

//The if statement to determine AM & PM
var prepand = (hour >= 12)? "pm" : "am";

hour = (hour >= 12)? hour - 12 : hour;

if(hour === 0 && prepand === "pm"){
	if(minute === 0 && second === 0){
		hour = 12;
		prepand = "Noon";
	} else{
		hour = 12;
		prepand = "Pm";
	}
}


if(hour === 0 && prepand ==="am"){
	if(minute === 0 && second === 0){
		hour = 12;
		prepand = "Midnight";
	} else{
		hour = 12;
		prepand = "am";
	}
}


document.getElementById('c-time').innerHTML = hour + ":" + ' ' + minute + ' ' + ":" + ' ' + second + ' ' + prepand ;

var greetings;


var button = document.getElementById('btn');

var today= new Date();
var hourNow = today.getHours();
console.log(hourNow);
if(hourNow > 18){
	greetings = "Good Evening";
}  else if(hourNow > 12){
	greetings = "Good Afternoon";
} else if(hourNow >= 0){
	greetings = "Good Morning";
} else {
	greetings = "You've Today's Greetings";
}

button.textContent = greetings; 

var dd = today.getDate();
var mm = today.getMonth()+1;
var yy = today.getFullYear();
if(dd < 10){
	dd  = '0' + dd;
}

if (mm < 10) {
	mm = '0' + mm;
}

today = mm + '-' + dd + '-' + yy;
var daat = document.getElementById('c-date');
daat.textContent = today;