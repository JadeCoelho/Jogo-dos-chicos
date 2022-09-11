const input = document.querySelector('.login-input')
const button = document.querySelector('.login-button')
const form = document.querySelector('.login-form')

const habilitaInput = ({target}) => {
   // if(event.target.value)
   if(target.value.length >= 1) {
    button.removeAttribute('disabled')
    return
   }
   
    button.toggleAttribute('disabled')
   
}

const handleSubmit = (event) => {
   event.preventDefault()
    localStorage.setItem('Jogador', input.value)
    window.location = 'pages/jogo.html'
 }
 

input.addEventListener('input', habilitaInput)
form.addEventListener('submit', handleSubmit)