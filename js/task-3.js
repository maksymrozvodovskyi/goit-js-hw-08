const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInput);

function onInput(event) {
  const value = event.currentTarget.value.trim();

  if (value === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = value;
  }
}
