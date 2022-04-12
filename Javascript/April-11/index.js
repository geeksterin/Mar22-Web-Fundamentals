


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

    // if(nameElement.value === "" || nameElement.value.includes("Abhishek") === true){
    //     console.log("Name is Empty")
    //     nameElement.classList = "error"
    //     nameSmall.classList = "display"
    // }else{
    //     nameElement.classList = "success"
    // }

    // if(email.value === ""){
    //     console.log("email is Empty")
    //     email.classList = "error"
    // } // add else conditions

    if(password.value === "" ){
        console.log("password is Empty")
        password.classList = "error"
    }

    if(confirmPassword.value === ""){
        console.log("confirm password is Empty")
        confirmPassword.classList = "error"
    }

    // if(password.value !== confirmPassword.value){
    //     console.log("confirm password is not the same as password")
    //     confirmPassword.classList = "error"
    //     password.classList = "error"
    // }

    const characters = ['@', '$', '#', "!", 'A', 'B']

    // if(password.value.includes("@") === false || password.value.includes("$") === false){
    //     console.log("password does not contain @ or $")
    // }

    let counter = 0
    for(let i=0; i<characters.length;i++){
        if(password.value.includes(characters[i]) === false){
            // console.log("error")
            counter++
            console.log(characters[i], " - ", counter)
            // password.classList = "error"
        }
    }

    console.log("counter - ", counter)

    if(counter === characters.length){
        console.log("error 222")
    }else{
        console.log('password satisfies the conditions')
    }

    if(password.value === confirmPassword.value){
        document.querySelector('.container').innerHTML = `
        <p> thanks for submitting</p>
        `
    }






}


// String1.includes(String2) = true // if string2 is present in string1 somewhere
// String1.includes(String2) = false // if string2 is not present in string1 somewhere



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


