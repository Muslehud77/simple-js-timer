const count = document.getElementById('count');
let timer = null
let [second,minutes,hours] = [0,0,0]

let isRunning = false;





const startCount = () => {
    if (isRunning) {
        return 0;
    }else{
        isRunning = true;
        timer = setInterval(() => {
          second++;

          if (second === 59) {
            second = 0;
            minutes++;

            if (minutes === 59) {
              minutes = 0;
              hours++;

              if (hours === 24) {
                second = 0;
                minutes = 0;
                hours = 0;
              }
            }
          }
          let h = hours < 10 ? "0" + hours : hours;
          let s = second < 10 ? "0" + second : second;
          let m = minutes < 10 ? "0" + minutes : minutes;
          count.innerHTML = `${h} : ${m} : ${s}`;
        }, 1000);
    }

    

}

function pauseCount(){

 clearInterval(timer);
 isRunning = false;
};

function reset(){
    clearInterval(timer);
    [second, minutes, hours] = [0, 0, 0];
    count.innerHTML = `00 : 00 : 00`
    isRunning = false;
}