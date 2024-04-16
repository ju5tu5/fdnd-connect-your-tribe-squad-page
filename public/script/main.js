// Variabelen declareren
const header = document.querySelector('body > header')
const searchButton = document.querySelector('body > header > button')
const likeForm = document.querySelector('form.like')

// Event listeners
searchButton.addEventListener('click', toggleSearchHandler)
likeForm.addEventListener('submit', submitLikeFormHandler)

// Functies voor afhandeling
function toggleSearchHandler() {
  header.classList.toggle('show-search')
  searchButton.classList.toggle('close')
}

function submitLikeFormHandler() {
  console.log('form submitted!')
}
