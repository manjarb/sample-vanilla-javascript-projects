// Clock Project
// Rotate clock needle to be the correct degree

// TODO 1: Find all needle elements
const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
 

// TODO 2: Rotate all needle
function rotateNeedles() {
    const currentTime = new Date();
    console.log(currentTime, ' :currentTime');

    // TODO 2.1: Calucalte rotate degree for each needle

    // TODO 2.1.1: Calculate rotate degree for second
    const seconds = currentTime.getSeconds();
    const secondDegrees = Math.round(((seconds / 60) * 360) + 90);
    // TODO 2.1.1.1: Rotate second needle
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    // TODO 2.1.1: Calculate rotate degree for minute
    const minutes = currentTime.getMinutes();
    const minuteDegrees = Math.round(((minutes / 60) * 360) + 90);
    // TODO 2.1.1.1: Rotate minute needle
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    // TODO 2.1.1: Calculate rotate degree for Hour
    const hours = currentTime.getHours();
    const hourDegrees = ((hours / 12) * 360) + 90;
    // TODO 2.1.1.1: Rotate hour needle
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// TODO 3: Init needle position
rotateNeedles();

// TODO 4: Rolate Needle every 1 second
setInterval(() => {
    rotateNeedles();
}, 1000);
