import throttle from 'lodash.throttle';
const formEL = document.querySelector('form');

formEL.addEventListener('input', throttle(handleInput, 500));
formEL.addEventListener('submit', handleSubmit);

dataForm();

function dataForm() {
  const feedbackForm = localStorage.getItem('feedback-form-state');
  if (feedbackForm) {
    const jsonFeedbackForm = JSON.parse(feedbackForm);
    formEL.email.value = jsonFeedbackForm.email;
    formEL.message.value = jsonFeedbackForm.message;
  }
}

function handleInput() {
  const dataInputForm = {
    email: formEL.email.value,
    message: formEL.message.value,
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
