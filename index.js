const timeDisplayEl = $("#currentDay");

function displayTime() {
  let currentTime = dayjs().format("DD MMM YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(currentTime);
}
displayTime();

setInterval(displayTime, 1000);
