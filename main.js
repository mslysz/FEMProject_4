// Get references to all the form elements.
const form = document.querySelector('form');
const cardHolderSpan = document.querySelector('.js-card-holder-text');
const cardNumberSpan = document.querySelector('.js-card-numbers-text');
const cardMonthSpan = document.querySelector('.js-card-month-text');
const cardYearSpan = document.querySelector('.js-card-year-text');
const cardCVCSpan = document.querySelector('.js-card-cvc');
const backButton = document.querySelector('.js-back-button');

// Get references to all the error messages.
const nameError = document.querySelector('.error-name');
const cardError = document.querySelector('.error-cardnumber');
const monthError = document.querySelector('.error-month');
const yearError = document.querySelector('.error-year');
const cvcErorr = document.querySelector('.error-cvc');

const cardHolder = document.querySelector('.js-card-holder-input');
const cardNumber = document.querySelector('.js-card-numbers-input');
const monthElement = document.querySelector('.js-month-day-input');
const yearElement = document.querySelector('.js-year-day-input');
const cvcElement = document.querySelector('.js-cvc-input');
const clearInput = document.querySelectorAll('input');
const inputElements = [...clearInput];


//Submited message
const informationWindow = document.querySelector('.js-form-submited');
const containerElement = document.querySelector('.js-container-bottom');

function displayTextName() {
  if (cardHolder.value.length === 0 || cardHolder.value.length === "") {
    cardHolderSpan.innerHTML = "JANE APPLESEED";
    nameError.innerHTML = "Name must be filled out";
    cardHolderSpan.classList.add('active');
  }
  cardHolderSpan.innerHTML = cardHolder.value.toUpperCase();
  cardHolderSpan.classList.remove('active');
}

function displayTextNumber() {
  let text = cardNumber.value.replace(/\s/g, "");
  let spacedText = text.replace(/(.{4})/g, "$1 ");
  if (cardNumber.value === "") {
    cardNumberSpan.innerHTML = "0000 0000 0000 0000";
  } else if (isNaN(cardNumber.value)) {
    cardError.innerHTML = "Wrong format, numbers only"
    cardError.classList.add('active')
  }
  else if (text.length !== 16) {
    cardError.innerHTML = "The card number must contain 16 characters"
    cardError.classList.add('active');
  }
  else {
    cardNumberSpan.innerHTML = spacedText
    cardError.classList.remove('active');
  }
}
function displayMonthNumber() {
  if (monthElement.value === "") {
    cardMonthSpan.innerHTML = "00";
    monthError.classList.remove('active');
  } else if (isNaN(monthElement.value)) {
    monthError.innerHTML = "Use numbers only";
    monthError.classList.add('active');
  }
  else {
    cardMonthSpan.innerHTML = monthElement.value;
    monthError.classList.remove('active');
  }
}

function displayYearNumber() {
  if (yearElement.value === "") {
    cardYearSpan.innerHTML = "00";
    yearError.classList.remove('active');
  } else if (isNaN(yearElement.value)) {
    yearError.innerHTML = "Use numbers only";
    yearError.classList.add('active');
  }
  else {
    cardYearSpan.innerHTML = yearElement.value;
  }
}

function displayCVCNumber() {
  if (cvcElement.value === "") {
    cardCVCSpan.innerHTML = "000"
    cvcErorr.classList.remove('active');
  } else if (isNaN(cvcElement.value)) {
    cvcErorr.innerHTML = "Use numbers only";
    cvcErorr.classList.add('active');
  }
  else {
    cvcErorr.classList.remove('active');
    cardCVCSpan.innerHTML = cvcElement.value;

  }
}

const validateForm = (e) => {
  e.preventDefault();

  if (cardHolder.value == "") {
    nameError.innerHTML = "Name must be filled out";
    nameError.classList.add('active');
    return false
  }
  if (cardNumber.value === "") {
    cardError.innerHTML = "Card number must be filled out ";
    cardError.classList.add('active');
    return false
  }
  if (monthElement.value === "") {
    monthError.innerHTML = "Can't be blank";
    monthError.classList.add('active');
    return false
  }
  if (yearElement.value === "") {
    yearError.innerHTML = "Can't be blank";
    yearError.classList.add('active');
    return false
  }
  if (cvcElement.value === "") {
    cvcErorr.innerHTML = "Can't be blank";
    cvcErorr.classList.add('active');
    return false
  }
  else {
    nameError.classList.remove('active');
    cardError.classList.remove('active');
    yearError.classList.remove('active');
    monthError.classList.remove('active');
    cvcErorr.classList.remove('active');

    containerElement.classList.add('offWindow');
    informationWindow.classList.add('onWindow');
  }
  return true
}

const setDefaultSpanValues = () => {
  cardHolderSpan.innerHTML = "JANE APPLESEED"
  cardNumberSpan.innerHTML = "0000 0000 0000 0000";
  cardMonthSpan.innerHTML = "00";
  cardYearSpan.innerHTML = "00";
  cardCVCSpan.innerHTML = "000"
}

const clearInputFields = (inputElements) => {
  const inputsExceptLast = inputElements.slice(0, inputElements.length - 1);
  inputsExceptLast.forEach((input) => {
    input.value = "";
  })
}
const resetForm = () => {
  clearInputFields(inputElements)
  setDefaultSpanValues()
  console.log("Form has been reset")

  containerElement.classList.remove('offWindow');
  informationWindow.classList.remove('onWindow');
}



cardHolder.addEventListener('input', displayTextName);
cardNumber.addEventListener('input', displayTextNumber);
monthElement.addEventListener('input', displayMonthNumber);
yearElement.addEventListener('input', displayYearNumber);
cvcElement.addEventListener('input', displayCVCNumber);
form.addEventListener('submit', validateForm);
backButton.addEventListener('click', resetForm);