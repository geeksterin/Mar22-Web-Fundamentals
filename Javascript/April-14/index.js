const students = [
    {name: "john 0", score:45},
    {name: "john 1", score:33},
    {name: "john 2", score:55},
    {name: "john 3", score:65},
    {name: "john 4", score:85},
  ]

// write a function which will first add 15 
// grace marks to people < 50 

// step - 1 - add 15 grace marks to people < 50
// step - 2 - after adding the grace marks, print the list of passing students
// passing means score > 50

function passedStudents(studentList){
    const finalArr = []
    for (let i = 0; i < studentList.length; i++) {
        if(studentList[i].score < 50){
            const obj = {
                name: studentList[i].name,
                score: studentList[i].score+15
            }
            finalArr.push(obj)
        }else{
            finalArr.push(studentList[i])
        }
    }
    console.log(finalArr)
    for (let i = 0; i < finalArr.length; i++) {
        if(finalArr[i].score > 50){
            console.log(finalArr[i].name, " has passed")
        }else{
            console.log(finalArr[i].name, " failed the test")
        }
    }
}

// passedStudents(students)

// medium level
const matrixOne = [
    [4,3,2,4],
    [9,1,5,6],
    [2,7,9,8],
    [8,5,2,0]
  ];

  // 2-D

// console.log(matrixOne[0][3])
// console.log(matrixOne[1][2])

// const diag1 = [4,1,9,0] = sum1
// const diag2 = [4,5,7,8] = sum2

// sum1-sum2

// matrixOne[0][3] // i+j = constant = max value of index = length - 1
// matrixOne[1][2]
// matrixOne[2][1]  // 1+2 = 3 = length - 1
// matrixOne[3][0]

// i + j = length-1

//   matrixOne[0][0]
//   matrixOne[1][1]
//   matrixOne[2][2]
//   matrixOne[3][3]

function findDiffDiagonal(someMatrix){
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < someMatrix.length; i++) {
        // console.log(someMatrix[i])
        for (let j = 0;  j < someMatrix[i].length ; j++) {
            if(i === j){
                console.log(someMatrix[i][j])
                sum1 += someMatrix[i][j]
            }
            if(i+j === someMatrix[i].length - 1){
                console.log(someMatrix[i][j])
                sum2 += someMatrix[i][j]
            }
        }
    }
    // console.log('sum 1 -', sum1)
    // console.log('sum 2 -', sum2)
    console.log('diff = ', sum1-sum2)
}

// findDiffDiagonal(matrixOne)


const arr = [11,2,4,6,7,13,14]
const target = 9

// there are 2 elements in this array, whose sum = target
// print the index of those 2 numbers
// [1,4]

function printIndex(someArray, someTarget){
    for (let i = 0; i < someArray.length; i++) {
        // console.log('i',someArray[i], i)
        for (let j = i+1;  j < someArray.length; j++){
            // console.log('j',someArray[j], j)
            if(someArray[i] + someArray[j] === someTarget){
                console.log([i,j])
                console.log(someArray[i] , someArray[j])
                return 
            }
        } 
    }
}
// printIndex(arr, target)

// more than medium
function betterFunction(someArray, sumTarget){
    const obj = {}
    for (let i = 0; i < someArray.length; i++) {
        const currentElement = someArray[i]
        const otherNumber = sumTarget - someArray[i]

        if(obj[otherNumber]){
            console.log(obj[otherNumber], i)
            return
        }else{
            obj[currentElement] = i
            // obj[key] = value
        }
    }
}

const arr2 = [11,2,4,6,7,13,14]

//step 1
// i = 0
// currentElement = 11
// otherNumber = -2
// obj = {}

// obj = {
//     11: 0
// }

// i=1
// customElement = 2
// otherNumber = 7

// obj = {
//     11: 0,
//     2: 1
// }

// i=2


// obj = {
//     11: 0,
//     2: 1,
//     4: 2,
//     6: 3
// }

// i = 4
// currentElement = 7
// otherNumber = 2

// obj[2] = 1, 4

betterFunction(arr, target)


// const x = [1,2,3,4,5,6,7,8]
// O(n)
// const y = 5

// const obj = {
//     1:1,
//     2:2,
//     3:3
// }

// const key = 3

// obj[key]