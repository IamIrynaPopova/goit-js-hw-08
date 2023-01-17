import throttle from 'lodash.throttle';
const inputEmailEL = document.querySelector('form');

inputEmailEL.addEventListener('input', throttle(handleInput, 500));
inputEmailEL.addEventListener('submit', handleSubmit);

dataForm();

function dataForm() {
  const feedbackForm = localStorage.getItem('feedback-form-state');
  if (feedbackForm) {
    const jsonFeedbackForm = JSON.parse(feedbackForm);
    inputEmailEL.email.value = jsonFeedbackForm.email;
    inputEmailEL.message.value = jsonFeedbackForm.message;
  }
}

function handleInput() {
  const dataInputForm = {
    email: inputEmailEL.email.value,
    message: inputEmailEL.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(dataInputForm));
}

function handleSubmit(event) {
  event.preventDefault();
  const dataSubmitForm = localStorage.getItem('feedback-form-state');
  console.log(JSON.parse(dataSubmitForm));
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}

