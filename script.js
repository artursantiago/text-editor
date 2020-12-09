updateText = () => {
  const text = document.querySelector("#user-textarea").value;

  let outputText = document.querySelector('#formatted-textarea p');
  outputText.innerText = text;
}

makeBold = (elem) => {
  elem.classList.toggle('active');
  document.querySelector('#formatted-textarea p').classList.toggle('bold');
}

makeItalic = (elem) => {
  elem.classList.toggle('active');
  document.querySelector('#formatted-textarea p').classList.toggle('italic');
}

makeUnderline = (elem) => {
  elem.classList.toggle('active');
  document.querySelector('#formatted-textarea p').classList.toggle('underline');
}

alignText = (elem, alignType) => {
  let selectedAlign = document.querySelector('.align.active');
  if (selectedAlign) selectedAlign.classList.toggle('active');

  elem.classList.toggle('active');
  document.querySelector('#formatted-textarea p').style.textAlign = alignType;
}

window.onload = () => {
  updateText();
}

// Dark Theme Thing

const darkThemeButton = document.querySelector('button.dark');

darkThemeButton.addEventListener('click', () => {
  darkThemeButton.classList.toggle('active');
  document.body.classList.toggle('dark-theme');
})