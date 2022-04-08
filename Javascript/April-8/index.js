

// const Superheroes=['Batman','Superman','Spiderman','Aquaman'];
// for(let i=0;i<Superheroes.length;i++)
// {
//     const x=document.createElement('h1');
//     x.innerText=Superheroes[i];
//     x.classList.add('myClass1');
//     const y=document.getElementById('raj');
//     y.appendChild(x);
// };

// const names = ['virat', 'ronaldo', 'messi', 'dhoni']

// const classList = ['one', 'two', 'three', 'four']

// for(let i = 0; i<names.length; i++){
//     const newElement = document.createElement('p')
//     newElement.innerText = names[i]
//     newElement.classList.add(classList[i])
//     const target = document.querySelector('h1')
//     target.appendChild(newElement)
// }



// const target = document.querySelector('h1')

// target.innerHTML = `<h1>geeks</h1>`

// const names = ['virat', 'ronaldo', 'messi', 'dhoni']

// for(let i = 0; i<names.length; i++){
//     // console.log("hello "+names[i])

//     console.log(`hello ${names[i]}`)
// }

// let myName = "geekster"

// console.log(`hello ${myName}`)

// console.log(`hello geekster`)

// const target = document.querySelector('h1')

// target.innerHTML = `<h1 class="four" id="xyz">geeks</h1>`


// const names = ['virat', 'ronaldo', 'messi', 'dhoni']
// const url = "https://reqres.in/img/faces/10-image.jpg"
// const classList = ['one', 'two', 'three', 'four']

// for(let i = 0; i<names.length; i++){
//     const newElement = document.createElement('p')
//     // newElement.innerText = names[i]
//     newElement.innerHTML = `
//     <img src="${url}" />
//     <h3>${names[i]}</h3>
//     `
//     newElement.classList.add(classList[i])
//     const target = document.querySelector('h1')
//     target.appendChild(newElement)
// }

// events

// const target = document.querySelector('button')

// let count = 0
// function printName(){
//     const h1Target = document.querySelector('h1')
//     h1Target.innerText = `${count} - clicked`
//     count = count+1
//     console.log("geekster")
// }

// target.addEventListener('click', printName)

// target.addEventListener('mouseover', mouseOver)
// target.addEventListener('mouseout', mouseOut)

// function mouseOver(){
//     const h1Target = document.querySelector('h1')
//     h1Target.innerText = `hovering over button`
// }

// function mouseOut(){
//     const h1Target = document.querySelector('h1')
//     h1Target.innerText = `geekster🚀`
// }

const button = document.querySelector('button')
button.addEventListener('click', addNames)

function addNames(){
    for(let i = 0; i<names.length; i++){
        const newElement = document.createElement('p')
        // newElement.innerText = names[i]
        newElement.innerHTML = `
        <img src="${url}" />
        <h3>${names[i]}</h3>
        `
        newElement.classList.add(classList[i])
        const target = document.querySelector('h1')
        target.appendChild(newElement)
    }

    button.style.display = 'none'
}


const names = ['virat', 'ronaldo', 'messi', 'dhoni']

// stack = Last In First Out = LIFO - push, pop
// stack of books - last book is removed first

// Array.push(arg)
// names.push('geek')
// names.push('geek2')
// names.push('geek3')

// console.log(names)
// names.pop()
// console.log(names)

//Array.shift() - remove element from the start of the array

// push, shift = Queue - First In First Out
// line in a bank - first customer gets served first

// console.log(names)
// names.shift()
// console.log(names)

// Array.unshift(arg) - add element to the start of the array
// console.log(names)
// names.unshift('rohit')
// console.log(names)



// Array.splice(arg1, arg2)
// arg1 - index from where you want to delete
// arg2 - is the number of elements you want to delete

const x = [1,2,3,4,5]
const y = [6,7,8,9]

// console.log(x)
// x.splice(2, 2)
// console.log(x)

// Array.concat(secondArray)
// const z = x.concat(y)
// console.log(z)

// x.push(y)

x.splice(2, 0, 6,7,8,9)

console.log(x)