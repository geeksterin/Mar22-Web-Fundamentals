// console.log("first")
// console.log(document)

// functions to GET HTMl elements
let somePTag = document.getElementById('hello-wala-p')
// // console.log(somePTag)
let arrHTMLElements = document.getElementsByClassName('h3-with-class')
// // console.log(arrHTMLElements)
// let arrHTMLElements2 = document.getElementsByTagName('h4')
// // console.log(arrHTMLElements2)
// const x = document.querySelector('#hello-wala-p')
// const y = document.querySelector('.h3-with-class')
// const z = document.querySelector('h4')
// // console.log(x)
// // console.log(y)
// // console.log(z)
// const x2 = document.querySelectorAll('#hello-wala-p')
// const y2 = document.querySelectorAll('.h3-with-class')
// console.log(y2)

// somePTag.innerText = 'this is the new text yooooooo'



// functions to CREATE HTML elements

// const newP = document.createElement('p')
// newP.innerText = 'this was created inside javascript'


// // to add elements as child

// // HTMLElement.appendChild(newHTMLElement)

// somePTag.appendChild(newP)


// somePTag.appendChild(newh2)

// // arrHTMLElements.appendChild(newh2)

// for(let i =0; i<arrHTMLElements.length; i++){
//     const newh2 = document.createElement('h2')
//     newh2.innerText = 'this is a H2'
//     const newP = document.createElement('p')
//     newP.innerText = 'this was created inside javascript'

//     // arrHTMLElements[i].appendChild(newh2)
//     arrHTMLElements[i].append(newh2, newP)
//     console.log(arrHTMLElements[i])
// }


// const firstH1 = document.querySelector('h1')

// firstH1.classList.add('my-new-class', 'back-color')
// firstH1.classList.add('back-color')

// for(let i =0; i<arrHTMLElements.length; i++){
//    arrHTMLElements[i].classList.add('my-new-class')
// }

// const names = ['virat', 'ronaldo', 'messi', 'dhoni', 'rohit']

// // const newElement = document.createElement('p')

// for(let i = 0; i<names.length; i++){
//     const newElement = document.createElement('p')
//     newElement.innerText = names[i]
//     newElement.classList.add('my-new-class', 'back-color')
//     const target = document.querySelector('h1')
//     target.appendChild(newElement)
// }


const firstH1 = document.querySelector('h1')

firstH1.classList.add('my-new-class')

// firstH1.classList.remove('back-color')

firstH1.classList.toggle('back-color')

const contains = firstH1.classList.contains('back-color')
console.log(contains)