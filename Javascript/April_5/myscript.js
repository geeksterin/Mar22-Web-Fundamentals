var arr=[10,3,2,4,67];
/*to store multiple collection of data*/ 

//object

const student = {
    firstName : 'Aman',
    class:10,
    isHeStudying:true
}

//Syntax of object

const object_name ={
    key1 : value1,
    key2 : value2
};

//object creation

const person ={
    name:'Ram',
    age: 20
};

//Access object 
//1. Using dot notation
object_name.key1

console.log(person.name);

console.log(person.age);

// 2. using bracket notation

object_name['key1']

console.log(person["age"]);



//Student object

const stud = {
    firstName :'Ram',
    lastName :'Sita',
    age:50,
    eycolor:'black'
}

//Javascript nested objects

const student14 ={
    name:'John',
    age:20,
    marks:{
        science : 70,
        math:75,
        grade: 'A'
    }
};
student14.marks.science


//
const person3 ={
    name:'Shyam',
    age:20,
    showAge: function (){
        console.log(this.age);
    }
}
person3.showAge();
person3.age;

//how to add new property in an object

person3.standard='8th';
//console.log(person3.standard);
object_name={
    key:value
}

//how to delete any property from an object

const person10={
    name:'Ten',
    age:30,
    marks:{
        english:85
    },
    showAge:function(){
        console.log(this.age);
        console.log(this.name);
        console.log(this.marks);
        // return this.age;
    },
    isHeStudying:true
}

delete person10.isHeStudying;

delete person10['isHeStudying'];

const person11={
    age:30,
    showAge:function(){
        console.log(this.age);
        return this.age;
    }
}

//Comparison Operators 
//equal to
5 == 5
'5' == 5

//not equal to
5 != 3

//Strict equal to

5 === 5
'5' === 5  // false

//Strict not equals to
'5' !== 5

//greater than
3>2;

//greater than or equal to 
3 >= 3

//less than
//less than equal to


/************************************
 * 
 *     If Statment
 * 
 * ********************************* */

if(condition){
    //the body of if
}

//////

let state='Haryana';

if(state =='Haryana'){
    console.log('Haryana');
}

/////
let number = 2;
if(number >0){
    //code
}

////
let number1 =-2;

if(number1 >0){
    //code
}

// Check if the number is positive

const number3 = prompt("enter the number : ");

//if number3 is positive
if(number3 > 0){
    console.log('Number is positive');
}
console.log('if statement is easy');


// Check if the number is positive

const number4 = prompt("enter the number : ");

//if number3 is positive
if(number4 >= 0){
    console.log('Number is positive');
}else{
    console.log('Number is negative')
}
console.log('if statement is easy');

//switch statement 

let a =2;

switch(a){
    case 1 : 
        console.log('one');
        break;
    case 2 :
        console.log('two');
        break;
    case 3 :
        console.log('three');
        break;
    default:
        console.log('invalid number');
        break; 
}




































