const timeDisplayEl = $("#currentDay");
const currentTime = dayjs().hour();

function displayTime() {
  let currentTime = dayjs().format("DD MMM YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(currentTime);
}
displayTime();

setInterval(displayTime, 1000);

$(".saveBtn").on("click", function () {
  // Get the data-number attribute of the clicked button
  const dataNumber = $(this).data("number");
  console.log($(this).data("number"));

  const textareaElement = $(this).closest(".time-block").find(".description");

  localStorage.setItem(`textBox`, textareaElement.val());
  // Compare the data-number with the current hour
  if (dataNumber < currentTime) {
    // If the data-number is less than the current hour, add a class for past
    textareaElement.addClass("past");
  } else if (dataNumber === currentTime) {
    // If the data-number is equal to the current hour, add a class for present
    textareaElement.addClass("present");
  } else {
    // If the data-number is greater than the current hour, add a class for future
    textareaElement.addClass("future");
  }

  $(".description").on("input", function () {
    // Remove all existing color classes when text is deleted
    if ($(this).val().trim() === "") {
      $(this).removeClass("past present future");
    }
  });
});
