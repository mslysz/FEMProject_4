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
  cardHolderSpan.innerHTML = cardHolder.value.toUpperCase();
  if (cardHolder.value !== '') {
    nameError.classList.remove('active');
  } else {
    cardHolderSpan.innerHTML = 'JANE APPLESEED';
  }
}

function displayTextNumber() {
  let text = cardNumber.value.replace(/\s/g, '');
  let spacedText = text.replace(/(.{4})/g, '$1 ');
  if (cardNumber.value === '') {
    cardNumberSpan.innerHTML = '0000 0000 0000 0000';
  } else {
    cardNumberSpan.innerHTML = spacedText;
  }
}

function displayMonthNumber() {
  if (monthElement.value === '') {
    cardMonthSpan.innerHTML = '00';
  } else {
    cardMonthSpan.innerHTML = monthElement.value;
  }
}

function displayYearNumber() {
  if (yearElement.value === '') {
    cardYearSpan.innerHTML = '00';
  } else {
    cardYearSpan.innerHTML = yearElement.value;
  }
}

function displayCVCNumber() {
  if (cvcElement.value === '') {
    cardCVCSpan.innerHTML = '000';
  } else {
    cardCVCSpan.innerHTML = cvcElement.value;
  }
}

const validateForm = (e) => {
  e.preventDefault();

  let isValid = true;

  if (cardHolder.value == '') {
    nameError.innerHTML = 'Name must be filled out';
    nameError.classList.add('active');
    cardHolder.classList.add('error');
    isValid = false;
  } else {
    nameError.classList.remove('active');
    cardHolder.classList.remove('error');
  }

  if (cardNumber.value === '') {
    cardError.innerHTML = 'Card number must be filled out ';
    cardError.classList.add('active');
    cardNumber.classList.add('error');
    isValid = false;
  } else if (!/^\d+$/.test(cardNumber.value)) {
    cardError.innerHTML = 'Wrong format, numbers only';
    cardError.classList.add('active');
    cardNumber.classList.add('error');
    isValid = false;
  } else if (cardNumber.value.length !== 16) {
    cardError.innerHTML = 'The card number must contain 16 characters';
    cardError.classList.add('active');
    cardNumber.classList.add('error');
    isValid = false;
  } else {
    cardError.classList.remove('active');
    cardNumber.classList.remove('error');
  }

  if (monthElement.value === '') {
    monthError.innerHTML = 'Month must be filled out';
    monthError.classList.add('active');
    monthElement.classList.add('error');
    isValid = false;
  } else if (!/^\d+$/.test(monthElement.value)) {
    monthError.innerHTML = 'Use numbers only';
    monthError.classList.add('active');
    monthElement.classList.add('error');
    isValid = false;
  } else if (monthElement.value > 12) {
    monthError.innerHTML = 'Month cannot be greater than 12';
    monthError.classList.add('active');
    monthElement.classList.add('error');
    isValid = false;
  } else {
    monthError.classList.remove('active');
    monthElement.classList.remove('error');
  }

  if (yearElement.value === '') {
    yearError.innerHTML = 'Year must be filled out';
    yearError.classList.add('active');
    yearElement.classList.add('error');
    isValid = false;
  } else if (!/^\d+$/.test(yearElement.value)) {
    yearError.innerHTML = 'Use numbers only';
    yearError.classList.add('active');
    yearElement.classList.add('error');
    isValid = false;
  } else {
    yearError.classList.remove('active');
    yearElement.classList.remove('error');
  }

  if (cvcElement.value === '') {
    cvcErorr.innerHTML = 'CVC must be filled out';
    cvcErorr.classList.add('active');
    cvcElement.classList.add('error');
    isValid = false;
  } else if (!/^\d+$/.test(cvcElement.value)) {
    cvcErorr.innerHTML = 'Use numbers only';
    cvcErorr.classList.add('active');
    cvcElement.classList.add('error');
    isValid = false;
  } else {
    cvcErorr.classList.remove('active');
    cvcElement.classList.remove('error');
  }
  if (!isValid) {
    e.preventDefault();
  } else {
    containerElement.classList.add('offWindow');
    informationWindow.classList.add('onWindow');
  }
  return true;
};

const setDefaultSpanValues = () => {
  cardHolderSpan.innerHTML = 'JANE APPLESEED';
  cardNumberSpan.innerHTML = '0000 0000 0000 0000';
  cardMonthSpan.innerHTML = '00';
  cardYearSpan.innerHTML = '00';
  cardCVCSpan.innerHTML = '000';
};

const clearInputFields = (inputElements) => {
  const inputsExceptLast = inputElements.slice(0, inputElements.length - 1);
  inputsExceptLast.forEach((input) => {
    input.value = '';
  });
};
const resetForm = () => {
  clearInputFields(inputElements);
  setDefaultSpanValues();
  console.log('Form has been reset');

  containerElement.classList.remove('offWindow');
  informationWindow.classList.remove('onWindow');
};

cardHolder.addEventListener('input', displayTextName);
cardNumber.addEventListener('input', displayTextNumber);
monthElement.addEventListener('input', displayMonthNumber);
yearElement.addEventListener('input', displayYearNumber);
cvcElement.addEventListener('input', displayCVCNumber);
form.addEventListener('submit', validateForm);
backButton.addEventListener('click', resetForm);
