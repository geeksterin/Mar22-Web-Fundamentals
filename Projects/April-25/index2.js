const homeBtn = document.querySelector("#home")
const booksBtn = document.querySelector("#books")
const kindleBtn = document.querySelector("#kindle")

const main = document.querySelector('#main')

homeBtn.addEventListener('click', displayHome)
booksBtn.addEventListener('click', displayBooks)


function displayHome(){
    homeBtn.classList.add('btn-active')
    const para = `<p>${home}</p>`
    main.innerHTML = para
}

function displayBooks(){
    if(booksBtn.classList.contains('btn-active')){
        booksBtn.classList.remove('btn-active')
    }else{
        booksBtn.classList.add('btn-active')
        homeBtn.classList.remove('btn-active')
        const para = `<p >${books}</p>`
        main.innerHTML = para
    }
}






const home = ` HOME
What is the switch statement?
The switch statement evaluates an expression, matching the expression’s value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.`

const books = `BOOKS
Problems with switch
The switch case is a little difficult to read and a bit ancient, and it’s prone to debugging problems.
The odd thing about the switch case is that you have to include the keyword break at the end of each case to prevent the control from moving to the next.
in addition to that, it’s a disaster when it comes to mapping complex scenarios, which can lead to difficult debugging and nested errors.
Every time we write a switch statement, we must exercise extreme caution.
The joy of writing code i`

const kindle = `KINDLE
Summing up
This isn’t to say that the switch statement isn’t useful or that using object literals is always the best option. Object literals as switches, on the other hand, should become another tool in your javascript toolbox.
You can find the f`