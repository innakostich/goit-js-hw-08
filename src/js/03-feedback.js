import '../css/03-feedback.css';
import '../css/common.css';
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';

const saveToStorage = throttle(() => {
  const feedback = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(feedback));
}, 500);

const loadFromStorage = () => {
  const feedback = JSON.parse(localStorage.getItem(storageKey));
  if (feedback) {
    emailInput.value = feedback.email || '';
    messageInput.value = feedback.message || '';
  }
};

loadFromStorage();

form.addEventListener('input', saveToStorage);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const message = messageInput.value;

  if (!email || !message) {
    alert('Please fill in all fields');
    return;
  }

  const feedback = {
    email,
    message,
  };
  console.log(feedback);

  localStorage.removeItem(storageKey);
  emailInput.value = '';
  messageInput.value = '';
});
