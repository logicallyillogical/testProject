// Grandma returns
// last time you talked to grandma https://gist.github.com/epoch/2e45ffe2dbf50cf1cea2466265f22291

// if you shout, she can hear you (or at least she thinks so) and yells back

// NO, NOT SINCE 1938!

// To make your program really believable, have grandma shout a different year each time; maybe any year at random between 1930 and 1950.
// You can't stop talking to grandma until you shout BYE.

// What if grandma doesn't want you to leave? When you shout BYE, she could pretend not to hear you. Change your previous program so that you have to shout BYE three times in a row. Make sure to test your program: if you shout BYE three times, but not in a row, you should still be talking to grandma.

// var saySomething = window.prompt("Say something to Grandma... ");
var byesInARow = 0;

while (byesInARow < 3) {
    var saySomething = window.prompt("Say something to Grandma... ");

    while (saySomething != "BYE") {
        byesInARow = 0;
    
        if (saySomething.toUpperCase() != saySomething) {
            alert("HUH?! SPEAK UP, SONNY!");
        } else {
            var randYear = 1929 + Math.floor(Math.random() * 21); 
            alert(`NO, NOT SINCE ${randYear}!`);
        }
    var saySomething = window.prompt("Say something to Grandma... ");
    }
byesInARow++;
}

alert("BYE BYE");

