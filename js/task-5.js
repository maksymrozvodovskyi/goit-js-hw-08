function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChange = document.querySelector('.change-color');
const body = document.querySelector('body');
const textColor = document.querySelector('.color');

buttonChange.addEventListener('click', evt => {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;

  textColor.textContent = randomColor;
});
