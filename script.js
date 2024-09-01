const shortBreak = document.getElementById("short");
const longBreak = document.getElementById("long");
const time = document.querySelector(".time p")
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const restart = document.getElementById("restart")


shortBreak.addEventListener("click", () => {
    console.log("yes")
    time.innerText ="5:00"
})
longBreak.addEventListener("click", () => {
   console.log("no")
    time.innerText ="15:00"
})

start.addEventListener("click", () => {
})

