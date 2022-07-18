const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * 
 * @param {Date} date 
 */
function formatTime(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}

/**
 * 
 * @param {Date} date 
 */
 function formatDate(date) {
  const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  return `${Days[date.getDay()]}, ${Months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now)
}, 200);