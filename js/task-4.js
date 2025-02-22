const form = document.querySelector('.login-form');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value.trim();
  const pass = event.target.elements.password.value.trim();

  if (!email || !pass) {
    alert('All form fields must be filled in');
    return;
  }

  const userData = {
    email: email,
    pass: pass,
  };

  console.log(userData);
  form.reset();
}
