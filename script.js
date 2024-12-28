const textareaEl = document.querySelector('.word_text')
const wordsCountEl = document.querySelector('.word_words--counter')
const charsCountEl = document.querySelector('.word_characters--counter')
const XCountEl = document.querySelector('.word_x--counter')
const fbCountEl = document.querySelector('.word_facebook--counter')

//Select the element which will receive the input & create a fn to react
textareaEl.addEventListener('input', function () {
  //determine new numbers
  const numberOfChars = textareaEl.value.length
  const xCharsLeft = 200 - numberOfChars
  const fbCharsLeft = 2200 - numberOfChars
  //add visuals when limits are reached
  if (xCharsLeft < 0) {
    XCountEl.classList.add('limit')
  } else {
    XCountEl.classList.remove('limit')
  }
  fbCharsLeft < 0
    ? fbCountEl.classList.add('limit')
    : fbCountEl.classList.remove('limit')
  //set new numbers
  charsCountEl.textContent = numberOfChars
  XCountEl.textContent = xCharsLeft
  fbCountEl.textContent = fbCharsLeft
})
