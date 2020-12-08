function updateText(event) {
  const text = document.querySelector("#user-textarea").value;

  let outputText = document.querySelector('#formatted-textarea p');
  outputText.innerText = text;
}

function makeBold(elem) {
  elem.classList.toggle('active');
  document.querySelector('#formatted-textarea p').classList.toggle('bold');
}

function makeItalic(elem) {
  elem.classList.toggle('active');
  document.querySelector('#formatted-textarea p').classList.toggle('italic');
}

function makeUnderline(elem) {
  elem.classList.toggle('active');
  document.querySelector('#formatted-textarea p').classList.toggle('underline');
}

function alignText(elem, alignType) {
  let selectedAlign = document.querySelector('.align.active');
  if (selectedAlign) selectedAlign.classList.toggle('active');

  elem.classList.toggle('active');
  document.querySelector('#formatted-textarea p').style.textAlign = alignType;
}