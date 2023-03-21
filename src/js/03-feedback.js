import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const parsedFormData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
if (parsedFormData) {
  emailInput.value = parsedFormData.email;
  messageInput.value = parsedFormData.message;
}

form.addEventListener(
  'input',
  throttle(() => {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();

  if (emailInput.value === '' || messageInput.value === '') {
    return alert('Please fill in all the fields!');
  }
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);

  emailInput.value = '';
  messageInput.value = '';
  localStorage.removeItem(LOCALSTORAGE_KEY);
});
