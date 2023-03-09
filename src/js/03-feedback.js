import '../css/common.css';
import '../css/03-feedback.css';


// const form = document.querySelector('.feedback-form');

// form.addEventListener('input', saveToLocalStorage);

// function saveToLocalStorage() {
//   const emailInput = form.querySelector('input[name="email"]');
//   const messageInput = form.querySelector('textarea[name="message"]');
//   const feedbackState = { email: emailInput.value, message: messageInput.value };
//   localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
// }

// window.addEventListener('load', () => {
//   const feedbackState = JSON.parse(localStorage.getItem('feedback-form-state'));
//   const emailInput = form.querySelector('input[name="email"]');
//   const messageInput = form.querySelector('textarea[name="message"]');
//   if (feedbackState) {
//     emailInput.value = feedbackState.email;
//     messageInput.value = feedbackState.message;
//   }
// });

// form.addEventListener('submit', submitForm);

// function submitForm(event) {
//   event.preventDefault();
//   const emailInput = form.querySelector('input[name="email"]');
//   const messageInput = form.querySelector('textarea[name="message"]');
//   const feedbackState = { email: emailInput.value, message: messageInput.value };
//   console.log(feedbackState);
//   localStorage.removeItem('feedback-form-state');
//   emailInput.value = '';
//   messageInput.value = '';
// }
const form = document.querySelector('.feedback-form');

form.addEventListener('input', saveToLocalStorage);

function saveToLocalStorage() {
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  const feedbackState = { email: emailInput.value, message: messageInput.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
}

window.addEventListener('load', () => {
  const feedbackState = JSON.parse(localStorage.getItem('feedback-form-state'));
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  if (feedbackState) {
    emailInput.value = feedbackState.email;
    messageInput.value = feedbackState.message;
  }
});

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  const feedbackState = { email: emailInput.value, message: messageInput.value };
  console.log(feedbackState);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
}