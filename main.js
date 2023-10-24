document.querySelector('.js-card-holder-input').addEventListener('input', displayTextName);
document.querySelector('.js-card-numbers-input').addEventListener('input', displayTextNumber);
document.querySelector('.js-year-day-input').addEventListener('input', displayYearNumber);
document.querySelector('.js-month-day-input').addEventListener('input', displayMonthNumber);
document.querySelector('.js-cvc-input').addEventListener('input', displayCVCNumber);

const cardHolderSpan = document.querySelector('.js-card-holder-text');
const cardNumberSpan = document.querySelector('.js-card-numbers-text');
const cardCVCSpan = document.querySelector('.js-card-cvc');
const cardYearSpan = document.querySelector('.js-card-year-text');
const cardMonthSpan = document.querySelector('.js-card-month-text');

function displayTextName(e) {
  if (e.target.value === "") {
    cardHolderSpan.innerHTML = "JANE APPLESEED";
  } else {
    cardHolderSpan.innerHTML = e.target.value.toUpperCase();
  }
}

function displayTextNumber(e) {
  let text = e.target.value.replace(/\s/g, "");
  let spacedText = text.replace(/(.{4})/g, "$1 ");
  if (e.target.value === "") {
    cardNumberSpan.innerHTML = "0000 0000 0000 0000";
  } else {
    cardNumberSpan.innerHTML = spacedText;
  }

}
function displayCVCNumber(e) {
  if (e.target.value === "") {
    cardCVCSpan.innerHTML = "000"
  } else {
    cardCVCSpan.innerHTML = e.target.value;
  }
}
function displayYearNumber(e) {
  if (e.target.value === "") {
    cardYearSpan.innerHTML = "00"
  } else {
    cardYearSpan.innerHTML = e.target.value;
  }
}
function displayMonthNumber(e) {
  if (e.target.value === "") {
    cardMonthSpan.innerHTML = "00"
  } else {
    cardMonthSpan.innerHTML = e.target.value;
  }
}