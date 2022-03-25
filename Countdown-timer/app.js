const selectedDate = document.querySelector(".date-selector")
const createCountdown = document.querySelector(".create-countdown")
const countdownTimer = document.querySelector(".countdown")
const countdownCreator = document.querySelector(".countdown-creator")
const daysText = document.querySelector(".days")
const hoursText = document.querySelector(".hours")
const minutesText = document.querySelector(".minutes")
const secondsText = document.querySelector(".seconds")

const calculateTimeRemaining = () => {
  const timeSelected = localStorage.getItem("date-selected")
  setInterval(() => {
    const currentTime = new Date().getTime()

    countdownCreator.classList.add("display-none")
    countdownTimer.classList.remove("display-none")

    const timeRemaining = timeSelected - currentTime

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)

    daysText.innerHTML = days
    hoursText.innerHTML = hours
    minutesText.innerHTML = minutes
    secondsText.innerHTML = seconds
  }, 1000)
}

createCountdown.addEventListener("click", () => {
  localStorage.setItem("date-selected", new Date(selectedDate.value).getTime())
  calculateTimeRemaining()
})

if (localStorage.getItem("date-selected")) {
  calculateTimeRemaining()
}
