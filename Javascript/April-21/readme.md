a function without a name is called a anonymous function

promises page
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

promises video in hindi 
- https://www.youtube.com/watch?v=2IPw-mWe10U

prmoses video in english
- https://www.youtube.com/watch?v=DHvZLI7Db8E&t=167s


the argument to a new Promise is a function lets call it x
this x function expects 2 arguments, 1st is resolve function, 
2nd is reject function


making a promise with a anonymous function - 
 - new Promise( function (res, rej){ res("function has no name")} )

making a promise with anon arrow function :
 - new Promise( (res, rej) => {res("resolved inside anon arrow fn")} )

passing anon function to .then
-  myPromise.then( function(x){console.log("geek - ", x)} )

passing anon arrow function to .then
- myPromise.then( (x) => {console.log(x)} )


promise interview questions
- https://codeburst.io/javascript-interview-questions-promises-1ab2fb7f0467