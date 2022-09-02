const hoursEl = document.getElementById("hour");
const daysEl = document.getElementById("day");
const minutesEl = document.getElementById("minute");
const secondsEl = document.getElementById("seconds");

howLong()

function howLong(){
    const today = new Date()
    const newYear = new Date("Jan 1, 2023")
    const gap = newYear - today
    

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours *24;

    const d = Math.floor(gap/days)
    const h = Math.floor((gap%days)/hours)
    const m = Math.floor((gap%hours)/minutes)
    const s = Math.floor((gap%minutes)/seconds)


    daysEl.innerText = d;
    hoursEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;

    setTimeout(howLong, 1000)

}

