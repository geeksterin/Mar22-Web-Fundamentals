// const img = document.createElement('img')
// img.src = "https://reqres.in/img/faces/4-image.jpg"

// img.classList = "img"

const element = document.querySelector("#x")

function resolveOrReject(virat, dhoni){
    virat("resolving virat")
}

const resolveOrReject2 = (resolve, reject) => {
    resolve("resolving inside arrow function")
}

// const myPromise = new Promise(resolveOrReject)

// const myPromise = 
// new Promise( function (res, rej){ res("function has no name")} )

// a function without a name is called a anonymous function

const myPromise = 
new Promise( (res, rej) => {res("resolved inside anon arrow fn")} )


// element.addEventListener("click", someFunc)
// function someFunc(){
//     console.log("i am clicked")
// }

// function xyz (res, rej){ res("function has no name")}


// the argument to a new Promise is a function lets call it x
// this x function expects 2 arguments, 1st is resolve function, 
// 2nd is reject function




// function callback(x){
//     x("inside set timeout")
// }

// myPromise.then( onResolve )

// myPromise.then( function(x){console.log("geek - ", x)} )

// myPromise.then( (x) => {
//     console.log(x)
//     return 3
// } ).then( (y) => {
//     console.log('y is',y)
// })

// const promise = new Promise((res, rej) => {res(2)});

// promise
//     .then( v => {
//         console.log(v);
//         return v * 2;
//     })
//     .then( v => {
//         console.log(v);
//         return v * 2;
//     })
//     .then(v => {
//         console.log(v);
//     });



// function onResolve(x){
//     console.log('on resolve ',x)
// }


// element.addEventListener('click' , someFunc)
// const mulBy3 = (num) => {
//     return num*3
// }

// function mulBy2(num){
//     return num*2
// }

// console.log(mulBy3(5))



// somePromise.then( someF1 ).catch( someF2 )


const apiCall = fetch('https://reqres.in/api/users')

console.log(apiCall)

// apiCall
//     .then( (virat) => { 
//         console.log(virat)
//         console.log('virat.json() ', virat.json())
//         return virat.json()
//     } )
//     .then( (x) => {console.log(x)}
//     )
//     .catch ( err => {console.log("x")})


// const promise2 = new Promise( (resolve, reject) => {
//     reject(Error('Some error occurred'));
// })

// promise2.catch(error => console.log(error.message));
// promise2.catch(error => console.log(error.message));


const promise = new Promise((resolve, reject) => {
    reject('Api failed, please try again later');
  })
  .catch( (error) => {
      
  } )
  .then(error => console.log(error));

