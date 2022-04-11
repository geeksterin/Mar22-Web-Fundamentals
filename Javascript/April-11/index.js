


const nameElement = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const buttonElement = document.getElementById('submit-btn')
const nameSmall = document.getElementById('name-small')

const entireForm = document.querySelector('form')


entireForm.addEventListener('submit', submitForm)

// any function inside addEventListener gets a paraments which is an event usually written as "e"

// buttonElement.addEventListener('click', buttonClick)

function buttonClick(){
    console.log("button is clicked")
}

// nameElement.value - gives me the value inside the input element

function submitForm(virat){
    virat.preventDefault()

    if(nameElement.value === "" || nameElement.value.includes("Abhishek") === true){
        console.log("Name is Empty")
        nameElement.classList = "error"
        nameSmall.classList = "display"
    }else{
        nameElement.classList = "success"
    }

    if(email.value === ""){
        console.log("email is Empty")
        email.classList = "error"
    } // add else conditions

    if(password.value === "" ){
        console.log("password is Empty")
        password.classList = "error"
    }

    if(confirmPassword.value === ""){
        console.log("confirm password is Empty")
        confirmPassword.classList = "error"
    }

}





// hoisting






// assignment for 9th april solution -
// document.querySelector('h1').innerHTML = `<img src="https://reqres.in/img/faces/9-image.jpg" />
// `

// const imageElement = document.querySelector('img')

// imageElement.addEventListener('mouseover' , increaseSize)

// function increaseSize(){
//     imageElement.classList = 'large-size'
//     // imageElement.classList.remove('normal-size')
//     // imageElement.classList.add('large-size')
// }

// imageElement.addEventListener('mouseout' , originalSize)

// function originalSize(){
//     imageElement.classList.remove('large-size')
//     imageElement.classList.add('normal-size')
// }
// // class = 'large-size normal-size'


