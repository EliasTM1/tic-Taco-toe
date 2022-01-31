let hrs = document.querySelector('.hour-hand')
let minutes = document.querySelector('.min-hand')
let seconds = document.querySelector('.second-hand')

let theDate = new Date();
let hours = theDate.getHours();
let mins = theDate.getMinutes();
let secs = theDate.getSeconds();
let millisecs = theDate.getMilliseconds();

let currentHoursMins = hours + (mins / 60);
let currentMinsSecs = mins + (secs / 60);
let currentSecMilli = secs + (millisecs / 1000);

let outerNumbersDiv = document.querySelector('.outer-numbers');
let dialDiv = document.querySelector('.dial');
let secsIndCont = document.querySelector('.seconds-ind-container')

let counter = 0;

function printDates() {

    if (counter === 5) {
        clearInterval(myInterval);
    }

    console.warn('theDate ', theDate)
    console.warn('hours ', hours)
    console.warn('mins ', mins)
    console.warn('secs ', secs)
    console.warn('millisecs ', millisecs)

    console.error('comined')
    console.log('currentHoursMins', currentHoursMins)
    console.log('currentMinsSecs', currentMinsSecs)
    console.log('currentSecMilli', currentSecMilli)

    console.log(`currentHoursMins ${currentHoursMins * 30} degrees`)
    console.log(`currentMinsSecs ${currentMinsSecs * 6} degrees`)
    console.log(`currentSecMilli ${currentSecMilli * 6} degrees`)

    counter++;
}

let myInterval = setInterval(printDates, 5000);

hrs.style.transform = `rotate(${120})deg`;
