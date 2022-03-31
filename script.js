let hours = document.querySelector('#hour');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');



function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

function hourAngle() {
    let count = getSecondsSinceStartOfDay();

    return ((360 * (count % 43200) / 43200 + 180) % 360);
}

function minutesAngle() {
    let count = getSecondsSinceStartOfDay();

    return ((6 * (count % 3600) /60 + 180) % 360);
}

function secondsAngle() {
    let count = getSecondsSinceStartOfDay();

    return (((count % 60) *6 + 180) % 360);
}

setInterval( function() {
    let time = getSecondsSinceStartOfDay();
    console.log(time);

    seconds.style.transform = `rotate(${secondsAngle()}deg)`;
    minutes.style.transform = `rotate(${minutesAngle()}deg)`;
    hours.style.transform = `rotate(${hourAngle()}deg)`;
}, 1000);
