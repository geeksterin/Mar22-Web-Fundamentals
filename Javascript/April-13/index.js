

console.log("first")


const somePromise = fetch('https://reqres.in/api/users')

somePromise
    .then(data => data.json())
    .then(result => {
        // console.log(result)
        const userArr = result.data
        for(let i=0; i< userArr.length; i++){
            // console.log(userArr[i])
            const newElement = document.createElement('p')
            newElement.innerText = 
            `${userArr[i].first_name}, ${userArr[i].last_name}, ${userArr[i].email}`
            document.querySelector('h1').appendChild(newElement)
        }
    })
    .catch(error => console.log("got some error - ", error))


// apiCall
//     .then(x => console.log('promise is fulfilled - ',x))
//     .catch(error => console.log(error))

// function someFunc(x){
//     console.log(x)
// }

console.log("last")


// const obj = {
//     data: [1,2,3,4],
//     page: 3,
//     per_page: 6
// }

// obj.data


// x = [1,2,3,4,5]




// queue in js = array

// lenght of Q is fixed = 4
// number of operations on that Q

//

const myQueue = []

function addElement(item){
    if(myQueue.length === 4){
        console.log("im full, try again later")
    }else{
        myQueue.push(item)
    }
}

addElement({
    name: 'virat',
    source: 'x',
    dest: 'y',
    train_no : 1
})
console.log(myQueue)
addElement({
    name: 'dhoni',
    source: 'x',
    dest: 'y',
    train_no : 2
})
console.log(myQueue)
addElement({
    name: 'messi',
    source: 'x',
    dest: 'y',
    train_no : 2
})
console.log(myQueue)
addElement({
    name: 'ronaldo',
    source: 'x',
    dest: 'y',
    train_no : 1
})
console.log(myQueue)

function findSize(trainID){
    let counter = 0
    for (let i = 0; i < myQueue.length; i++) {
        if(myQueue[i].train_no === trainID){
            counter++
        }
    }
    console.log("number of passengers in train", trainID, " is - ", counter)
}

findSize(1)

function searchBooking(trainID){
    for (let i = 0; i < myQueue.length; i++) {
        if(myQueue[i].train_no === trainID){
            console.log(myQueue[i])
        }
    }
}

searchBooking(2)