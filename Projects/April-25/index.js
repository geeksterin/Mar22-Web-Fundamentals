const homeBtn = document.querySelector("#home")
const booksBtn = document.querySelector("#books")
const kindleBtn = document.querySelector("#kindle")

const homePara = document.querySelector("#home-p")
const booksPara = document.querySelector("#books-p")
const kindlePara = document.querySelector("#kindle-p")

homeBtn.addEventListener('click', displayHome)

function displayHome(){
    homeBtn.classList.add('btn-active')
    // homePara.classList.remove("inactive")
    // homePara.classList.add('active')
    homePara.classList.toggle('inactive')
}

booksBtn.addEventListener('click', displayBooks)

function displayBooks(){
    booksBtn.classList.add('btn-active')
    booksPara.classList.toggle('inactive')

    homePara.classList.add('inactive')
    homeBtn.classList.remove('btn-active')
}

