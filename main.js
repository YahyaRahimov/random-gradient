const body = document.querySelector('body')
const container = document.querySelector('#container')
const colorText = document.querySelector('.color-text')
const copyRight = document.querySelector('.copyright')
const contactHero = document.querySelector('.contact-hero')
const xBtn = document.querySelector('#button')

const values = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'c',
  'd',
  'e',
  'f',
]

// random color function

function getGradient() {
  let color = '#'
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.trunc(Math.random() * values.length)
    color += values[randomNumber]
  }

  return color
}

// set color to body
function setGradient() {
  const color1 = getGradient()
  const color2 = getGradient()
  const randomDeg = Math.floor(Math.random() * 360)
  const bgColor =`linear-gradient(
    ${randomDeg}deg,
    ${color1},
    ${color2}
  )`

  body.style.background = bgColor
  colorText.textContent = bgColor
  copyRight.classList.toggle('copyright-action')
}

container.addEventListener('click', setGradient)

// OPEN - WINDOW
const openContact = () => {
  setTimeout(() => {
    contactHero.classList.remove('hidden')
  }, 3000)
}

openContact()

xBtn.addEventListener('click', () => {
  contactHero.classList.add('hidden')
})