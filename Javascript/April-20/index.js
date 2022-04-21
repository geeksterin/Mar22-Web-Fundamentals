// const buttonOne = document.getElementById("1")


// function definition
function buttonIsClicked(){
    console.log("button was clicked")

    for (let i = 0; i < 5; i++) {
        console.log(i)
    }

    console.log("function finished")
}

// buttonIsClicked() // body of the function will run line by line

// buttonIsClicked()

// function mulBy2(virat){ //parameter is a placeholder for a future value

//     console.log(virat)
//     console.log("hello")

// }

// // mulBy2(3)

// // mulBy2("geekster")

// // mulBy2( { name: "geekster", age: 25 } )

// // mulBy2( buttonIsClicked )

// // mulBy2( [1,2,3,4,4] )

// mulBy2(  )


// function mulBy3( dhoni ){

//     const z = dhoni*3
//     console.log("z is - ",z)


    
// }
// // mulBy3(4)
// // mulBy3("geek")
// // mulBy3( [1,2,3] )
// // console.log("first"*3)

// const x = 3
// const y = 4

// let i = 0
// let j = 0

// mulBy3(x)
// mulBy3(y)


function mulBy3(virat){
    let x = virat*3
    return x
}
// let answer = mulBy3(4)
// console.log(answer)

const a = 11
const b = 21
const c = 31
const d = 41
const e = 51

// const x = [11,21,31,41,51]

// let y = []

// for (let i = 0; i < x.length ; i++) {
//     const answer = mulBy3(x[i])
//     y.push(answer)
//     // y+=answer
//     console.log(answer)
// }

// console.log(y)


function mulEachElementBy3(arr){
    let y = []
    for (let i = 0; i < arr.length ; i++) {
        const answer = mulBy3(arr[i])
        y.push(answer)
    }
    return y
}

const x = [11,21,31,41,51]
const y = [1,2,3,4,5]

const result1 = mulEachElementBy3(x)
const result2 = mulEachElementBy3(y)
// console.log(result1)
// console.log(result2)


const obj = {
    name: "geek",
    age: 25,
    class: "10th",
    subjects: ['maths', 'english', 'chem']
}

// for (let i = 0; i < obj.length ; i++) {
//     console.log("hello")
//     console.log(obj[i])
// }

// const cls = "class"

// console.log(obj.class)
// console.log(obj[cls])

// for in
// for of

for(let key in obj){
    console.log(key, obj[key])
}

// const x = [11,21,31,41,51]
const xx = [1,2,3,4]

for(let element of x){
    console.log(element)
}

// for (let i = 0; i < xx.length; i++) {
//     const element = xx[i];
//     console.log(element)
// }

// function mulBy4(virat){
//     let x = virat*4
//     return x
// }

// // arrow function

// const mulBy5 = (virat) => {
//     let x = virat*5
//     return x
// }

// mulBy4(4)
// mulBy5(4)

const aa = 5

// let bb = ""

// if(aa%2 === 0){
//     bb = "even"
// }else{
//     bb = "odd"
// }

// console.log(bb)

// if condition ? satisfied value : not satisfied value

// let bb = aa%2 === 0 ? "even" : "odd"

// console.log(bb)


const arr= [1,2,3,4,5]

const myArrElement = document.querySelector('.my-arr')

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    // const htmlElement = `<p>${element}</p>`
    // myArrElement.innerHTML = myArrElement.innerHTML + htmlElement

    const newElement = document.createElement('p')
    newElement.innerText = element
    myArrElement.appendChild(newElement)
    
}