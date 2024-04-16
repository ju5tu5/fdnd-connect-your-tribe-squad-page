// Variabelen declareren
const header = document.querySelector('body > header')
const searchButton = document.querySelector('body > header > button')
const likeForm = document.querySelector('form.like')
const likeSpan = document.querySelector('span.likes')

// Event listeners
searchButton.addEventListener('click', toggleSearchHandler)
likeForm?.addEventListener('submit', submitLikeFormHandler)

// Functies voor afhandeling
function toggleSearchHandler() {
  header.classList.toggle('show-search')
  searchButton.classList.toggle('close')
}

function submitLikeFormHandler(event) {
  console.log('form submitted!')

  let form = this
  let data = new FormData(form)

  fetch(form.action, {
    method: form.method,
    body: new URLSearchParams(data),
  })
    .then((response) => {
      return response.text()
    })
    .then((responseHTML) => {
      // console.log(responseHTML)
      const parser = new DOMParser()
      const response = parser.parseFromString(responseHTML, 'text/html')
      const responseSpan = response.querySelector('span.likes')
      const likes = Number(responseSpan.innerHTML)

      // Het is gelukt, neem de waarde uit de span en tel er een bij op
      likeSpan.innerHTML = likes
    })

  event.preventDefault()
}
