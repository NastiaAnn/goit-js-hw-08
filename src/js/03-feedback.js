import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('input', throttle(handleFormClick, 500));
form.addEventListener('submit', handleFormSubmit);

function handleFormClick(event) {
  event.preventDefault();
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function handleFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const emailEl = formElements.email.value;
  const messageEl = formElements.message.value;
  if (emailEl === '' || messageEl === '') {
    return alert('Please fill in all the fields!');
  } else {
    let inputValue = {
      Email: `${emailEl}`,
      Message: `${messageEl}`,
    };
    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
}

populateForm();

function populateForm() {
  const savedFormData = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsedFormData = JSON.parse(savedFormData);
  if (savedFormData) {
    form.email.value = parsedFormData.email;
    form.message.value = parsedFormData.message;
  }
}
