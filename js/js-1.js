// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };
// const addCallback = () => {
//     console.log("12345");
// }

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);
// multiBtn.addEventListener("click", addCallback);


// const dog = {
//   name: "Mango",
//   age: 3,
//   ostGoodBoy: true,
// };

// const json = JSON.stringify(dog);
// console.log(json);



// console.log("First log");

// setTimeout(() => {

//  console.log("Second log");
// }, 2000);


// console.log("Third log");



// const date = new Date();

// console.log(date);




import flatpickr from "flatpickr";
import iziToast from "izitoast";
import "flatpickr/dist/flatpickr.min.css";
import "izitoast/dist/css/iziToast.min.css";

const dateTimePicker = document.getElementById("datetime-picker");
const startButton = document.querySelector("[data-start]");
const timerFields = document.querySelectorAll(".timer .value");

let userSelectedDate = null;
let countdownInterval = null;

// Функция для добавления ведущего нуля
function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

// Функция обратного отсчета
function countdown() {
  const currentDate = new Date().getTime();
  const difference = userSelectedDate.getTime() - currentDate;

  if (difference <= 0) {
    clearInterval(countdownInterval);
    startButton.removeAttribute("disabled");
    timerFields.forEach((field) => (field.textContent = "00"));
    iziToast.success({
      title: "Timer Ended",
      message: "Countdown Timer has ended!",
      position: "topRight",
    });
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(difference);

  timerFields[0].textContent = addLeadingZero(days);
  timerFields[1].textContent = addLeadingZero(hours);
  timerFields[2].textContent = addLeadingZero(minutes);
  timerFields[3].textContent = addLeadingZero(seconds);
}

// Функция преобразования миллисекунд в дни, часы, минуты и секунды
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Инициализация Flatpickr
flatpickr(dateTimePicker, {
  enableTime: true,
  time_24hr: true,
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    const currentDate = new Date();

    if (userSelectedDate <= currentDate) {
      startButton.setAttribute("disabled", true);
      iziToast.error({
        title: "Invalid Date",
        message: "Please choose a date in the future",
        position: "topRight",
      });
    } else {
      startButton.removeAttribute("disabled");
    }
  },
});

// Обработчик нажатия кнопки Start
startButton.addEventListener("click", () => {
  countdown();
  countdownInterval = setInterval(countdown, 1000);
  startButton.setAttribute("disabled", true);
});
