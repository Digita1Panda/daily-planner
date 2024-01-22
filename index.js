const timeDisplayEl = $("#currentDay");
const currentTime = dayjs().hour();

function displayTime() {
  let currentTime = dayjs().format("DD MMM YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(currentTime);
}
displayTime();

setInterval(displayTime, 1000);

function updateTimeBlocks() {
  $(".time-block").each(function () {
    let dataNumber = $(this).find(".description").data("number");

    $(this).removeClass("past present future");

    if (dataNumber < currentTime) {
      $(this).find(".description").addClass("past");
    } else if (dataNumber === currentTime) {
      $(this).find(".description").addClass("present");
    } else {
      $(this).find(".description").addClass("future");
    }
  });
}

updateTimeBlocks();

$(".saveBtn").on("click", function () {
  let text = $(this).closest(".time-block").find(".description").val();

  let hour = $(this).closest(".time-block").find(".description").data("number");

  if (text.trim() === "") {
    // If the text is empty, remove the entry from localStorage
    localStorage.removeItem("event_" + hour);
  } else {
    localStorage.setItem("event_" + hour, text);
  }
});

$(".time-block").each(function () {
  let hour = $(this).find(".description").data("number");
  let savedEvent = localStorage.getItem("event_" + hour);

  if (savedEvent) {
    $(this).find(".description").val(savedEvent);
  }
});
