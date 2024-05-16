const loginForm = document.querySelector('.login-form');
const submitButton = loginForm.querySelector('button[type="submit"]');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const emailValue = loginForm.elements.email.value.trim();
  const passwordValue = loginForm.elements.password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email: emailValue,
      password: passwordValue
    };

    console.log(formData);

    loginForm.reset();
  }
});
