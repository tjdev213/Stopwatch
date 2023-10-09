let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

startButton.addEventListener("click", ()=>{
    timer=true;
    stopwatch();
});

stopButton.addEventListener("click", ()=>{
    timer=false;
});

resetButton.addEventListener("click", ()=>{
    timer=false;
    hour=0;
    minute=0;
    second=0;
    count=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
});

function stopwatch(){

    if(timer){

        count++;

        if(count===100){
            second++;
            count=0;
        }
        if(second===60){
            minute++;
            second=0;
        }
        if(minute===60){
            hour++;
            minute=0;
            second=0;
        }

        let hourString = hour;
        let minuteString = minute;
        let secondString = second;
        let countString = count;

        if(hour<10){
            hourString = "0" + hourString;
        }
        if(minute<10){
            minuteString = "0" + minuteString;
        }
        if(second<10){
            secondString = "0" + secondString;
        }
        if(count<10){
            countString = "0" + countString;
        }

        document.getElementById("hr").innerHTML = hourString;
        document.getElementById("min").innerHTML = minuteString;
        document.getElementById("sec").innerHTML = secondString;
        document.getElementById("count").innerHTML = countString;

        setTimeout(stopwatch,10);
        
    }
}