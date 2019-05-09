var today = new Date();
var hour = today.getHours();
var minute = today.getMinutes();
var seconds = today.getSeconds();
var day = today.getDay();
var date = today.getDate();

var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var prepand = (hour >= 12)? 'pm' : 'am';

hour = (hour >= 12)? hour - 12 : hour;

if (hour === 0 && prepand === 'pm'){
	if(minute === 0 && seconds === 0){
		hour = 12;
		prepand = 'Noon';
	} else{
		hour = 12;
		prepand = 'pm';
	}
}


if(hour === 0 && prepand === 'am'){
	if(minute === 0 && seconds === 0){
		hour = 12;
		prepand = 'Midnight';
	} else{
		hour = 12;
		prepand = 'am';
	}
}

document.getElementById('gtime').innerHTML = hour + " : " + minute + " " + prepand;

document.getElementById('day').innerHTML = dayList[day];
document.getElementById('date').innerHTML = date;


