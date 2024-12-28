const textareaEl = document.querySelector('.word_text')
const wordsCountEl = document.querySelector('.word_words--counter')
const charsCountEl = document.querySelector('.word_characters--counter')
const XCountEl = document.querySelector('.word_x--counter')
const fbCountEl = document.querySelector('.word_facebook--counter')

const inputHandler = () => {
  //input validation
  if (textareaEl.value.includes('<script>')) {
    alert("You can't type JS code!")
    textareaEl.value = textareaEl.value.replace('<script>', '')
  }
  //determine new numbers
  let numberOfWords = textareaEl.value.split(' ').length
  if (textareaEl.value.length === 0) {
    numberOfWords = 0
  }
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
  wordsCountEl.textContent = numberOfWords
  charsCountEl.textContent = numberOfChars
  XCountEl.textContent = xCharsLeft
  fbCountEl.textContent = fbCharsLeft
}

//Select the element which will receive the input & create a fn to react
textareaEl.addEventListener('input', inputHandler)
