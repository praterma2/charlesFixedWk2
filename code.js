function countdownTimer() {
    console.log("countdownTimer Working");
    var currTime = 50
    document.getElementById("countdownStatus").innerHTML = currTime;
    currTime = currTime - 5;

    //Timer for 45
    setTimeout(function () {
        //stufrf in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    },5000);

    //Timer for 40
    setTimeout(function () {
        //stufrf in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    },10000);

    //Timer for 35
    setTimeout(function () {
        //stufrf in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    },15000);

    //Timer for 30
    setTimeout(function () {
        //stufrf in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    },5000);

    //Timer for 25
    setTimeout(function () {
        //stufrf in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    },5000);

    //Timer for 20
    setTimeout(function () {
        //stufrf in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    },5000);

    //Timer for 15
    setTimeout(function () {
        //stufrf in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    },5000);

    //Timer for 10
    setTimeout(function () {
        //stufrf in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    },5000);

    //Timer for 5
    setTimeout(function () {
        //stufrf in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    },5000);

    //Timer for 5
    setTimeout(function () {
        //stufrf in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = "Blastoff!";
        currTime = currTime - 5;
    },5000);
}

function playCraps(){
    console.log("Craps game initiated");
    var die1 = Math.ceil(Math.random() *6);
    var die2 = Math.ceil(Math.random() *6);
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    var dieSum = die1 + die2;
    document.getElementById(diceSum).innerHTML = dieSum;
    if(dieSum == 7 || dieSum == 11){
        document.getElementById("crapsStatus").innerHTML = "Craps! You lose!!";
    }else if(die1 == die2 && die1 % 2 == 0){
        document.getElementById("crapsStatus").innerHTML = "Doubles! You Win";
    }else{
        document.getElementById("crapsStatus").innerHTML = "You did not lose and you did not win. Please try again.";
    }
}