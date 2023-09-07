const day = document.getElementById("day")
const utc = document.getElementById("utc")

const DAYS_OF_THE_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const getDay = DAYS_OF_THE_WEEK[new Date().getDay()]
const getUtc = new Date().getTime()

day.innerText = getDay
utc.innerText = getUtc
