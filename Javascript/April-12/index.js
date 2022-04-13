

console.log("hello")

// some API call 
// setTimeout(function, delay) - after delay - function is run

// setTimeout(someFunction, 5000)

function someFunction() {
    console.log("Hi i am here")
}

console.log("bye")

// asynchronous

// const h1 = document.querySelector('h1')

// setTimeout(alertUser, 3*1000)

// function alertUser(){
//     console.log('3 seconds have passed !!!')
// }

// const strArr = ['a','b','c','d','e','f']
// let str = 'a,b,c,d,e'
// setTimeout(alertUser, 1000)
// function alertUser(){
//     console.log(str)
// }

const yourPromise = new Promise((resolve, reject) => {
    resolve(1000)
    reject("geekster")
     // means fulfilling the promise
})

// console.log(yourPromise)

// each promise object in JS has 3 states : 
// fulfilled
// rejected
// pending

// if(yourPromise is fulfilled){
//     print('yaya')
// }else{
//     print("oops")
// }

// yourPromise
//     .then(virat => console.log('yay-',virat))
//     .catch(errResult => console.log('oops-',errResult)) // errResult = "geekster"





const num = 6

const promise2 = new Promise((resolve, reject) => {
    if(num%2 === 0){
        resolve(100)
    }else{
        reject("some string")
    }

    // setTimeout(() => resolve('i am resolved after 3 secs'), 3000)
})

promise2
    .then(x => console.log('fulfilled - ',x))
    .catch(x => console.log('rejected - ',x))


