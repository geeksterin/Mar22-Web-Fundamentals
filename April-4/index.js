// console.log("hello geeks")

// "some string" // = string can be double quotes or single quotes
// 10 // number
// true // boolean
// false // boolean

//  [1,2,3,4,5]  
//  ['virat', 'anushka', 'dhoni']
//  [true, true, false, true]
 
//  ['name', 20, true]

var myname = "geek" // can change value

// console.log(myname)  
// console.log("geek")

let myname2 = 'geek2'; // can change value
const myname3 = 'geek3' // cannot edit 

myname2 = 'some other name'

// myname3 = 'something'

// console.log(myname3) 

const myArray = [1,2,3,4,5]

// max value for index = length - 1

// [1, 3, 2, 4]
//  0, 1, 2, 3
// myArray[index]

// const thirdElement = myArray[2]

// console.log(myArray[2])

// const len = myArray.length

// console.log(len)

// for(start ; end condition; increment value){
//     body
// }

// let char = 'geek'
// let floatx = 10.11
// console.log(typeof floatx)

// for(let i = 0; i<20; i++){ // i++ => i=i+1
//     console.log(i)
// }

// console.log("for loop has finished")

// let y = 10
// const z = 20
// y = y+z

const x = [12,3,5,2,3]

let sum = 0

for(let i = 0; i <= x.length -1 ; i++){
    // i = 4
    // console.log(x[i])
    // console.log("sum - ", sum)
    sum = sum + x[i]
    // sum = 25
    // console.log("sum 2 - ", sum)
}
// console.log(sum)
// console.log(x[5])


function someFunction(){ // geek is the parameter = input to the function
    //body
    // console.log(geek)
    // console.log('virat')

    const x = [12,3,4,5]

    return 
}

// someFunction(value) // value is the argument

const output = someFunction()
document.write(output)


// console.log(output)

// const names = ['virat', 'dhoni', 'rohit']

// for(let i =0; i<names.length ; i++){
//     document.write(names[i])
// }

function arraySum(){
    const x = [12,3,5,2,3]

    let sum = 0

    for(let i = 0; i <= x.length -1 ; i++){
        // i = 4
        // console.log(x[i])
        // console.log("sum - ", sum)
        sum = sum + x[i]
        // sum = 25
        // console.log("sum 2 - ", sum)
    }

    return sum
}

const finalValue = arraySum()
console.log(finalValue)

