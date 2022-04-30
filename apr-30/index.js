// "use strict"
// // console.log(a)

// // var a = 11

// // const test2 =()=>{
// //     test1(2,3)
// // }
// // test2()
// // function test1(arg1,arg2){
// //     var a = arg1 + arg2
// //     console.log(a)
// // }


// // var a = 10

// // // function testThis()
// // // {
// // //     console.log(this.a)
// // // }
// // console.log(this.a)
// // // testThis()

// // var a = 20
// // console.log(this.a)
// var a = 12
// const test =()=>{
//     var a = 20
//     console.log(this.a)
// }
// test()

// // function test(){
// //     console.log(this)
// // }

// // test()

var submit = document.getElementsByClassName('submit')[0]

var task_container = document.getElementsByClassName('task-container')[0]

var insert = document.getElementsByClassName('insert')[0]


const test = document.getElementsByClassName('test')[0]

function fetchData(){
    data = insert.value
    console.log(data)
    return data
}

function doJob(){
    var h2 = document.createElement('h2')
    data = fetchData()
    h2.innerHTML=data
    task_container.appendChild(h2)
    insert.value=''
    console.log(h2)
    // document.location.reload()
}

submit.addEventListener('click',doJob)



// function trigger(event){
//     event.preventDefault()
// }

// test.addEventListener('click',trigger)