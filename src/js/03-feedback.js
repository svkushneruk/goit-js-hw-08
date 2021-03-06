import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailInputEl: document.querySelector('[name="email"]'),
  textareaEl: document.querySelector('[name="message"]'),
};

const TARGET_KEY = 'feedback-form-state';
let formData = {};

populateForm();

refs.formEl.addEventListener('input', throttle(onFormInput, 1000));
refs.formEl.addEventListener('submit', onFormSubmit);

function onFormInput() {
  formData = {
    email: refs.emailInputEl.value,
    message: refs.textareaEl.value,
  };
  localStorage.setItem(TARGET_KEY, JSON.stringify(formData));
}

function populateForm() {
  const data = JSON.parse(localStorage.getItem(TARGET_KEY));

  if (data) {
    formData.email = data.email;
    refs.emailInputEl.value = formData.email;

    formData.message = data.message;
    refs.textareaEl.value = formData.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  populateForm();
  console.log(formData);
  localStorage.removeItem(TARGET_KEY);
  e.target.reset();
}
