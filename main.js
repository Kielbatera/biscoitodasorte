// variaveis 
var screen1 = window.document.querySelector('.screen1')
var screen2 = window.document.querySelector('.screen2')
var bto_1 = window.document.querySelector('button.bto_1')
var bto_2 = window.document.querySelector('button.bto_2')
var phrase = window.document.querySelector('h5#frase')
let lisFra = ['Com o coração cheio de gratidão, sei que sou capaz de superar qualquer obstáculo que a vida apresentar!',
'Se expressarmos gratidão pelo que temos, teremos mais por que expressar gratidão.',
'Quem cultiva gratidão é capaz de realizar sonhos que parecem inalcançáveis!',
'Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem.',
'Agradeço todos os dias pela minha vida, por tudo o que conquistei até aqui. E tenho fé de que o futuro me reserva realizações ainda maiores!',
'Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje!',
'Com o coração cheio de gratidão, sei que sou capaz de superar qualquer obstáculo que a vida apresentar!']


//funcoes 
function breakCookie() {
  switchingScreen()
  phrases()
} 

function breakAgain() {
  switchingScreen()
}

function switchingScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function phrases() {
  let p = Math.round(Math.random() * 6)
  phrase.innerHTML = `${lisFra[p]}`
}

//eventos 
bto_1.addEventListener('click', breakCookie)
bto_2.addEventListener('click', breakAgain)


