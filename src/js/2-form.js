import throttle from 'lodash/throttle';
const form = document.querySelector('.feedback-form');
const formData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {
  email: '',
  message: '',
};

const setInLocal = () =>
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
const onHandleInput = e => {
  switch (e.target.name) {
    case 'email':
      formData.email = e.target.value;
      setInLocal();
      break;
    case 'message':
      formData.message = e.target.value;
      setInLocal();
      break;
  }
};
const render = () => {
  form.email.value = formData.email;
  form.message.value = formData.message;
};
const onHandleSubmit = e => {
  e.preventDefault();
  if (form.message.value === '' || form.email.value === '') {
    alert('Fill please all fields');
    return;
  }
  console.log('1-', formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  render();
  console.log('2-', formData);
};

render();
form.addEventListener('input', throttle(onHandleInput, 500));
form.addEventListener('submit', onHandleSubmit);
