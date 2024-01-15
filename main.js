//Function Declaration
function  declaration () {
    console.log ('This is function declaration')
}
declaration()

//Function Expression
let expression = function () {
    console.log ('This is function expression')
}
expression()




// Arrow Function [This is like Function Expression junst removed the word of function ]
const arrowFuntion = () => {
    console.log ('This is Arrow function')
}
arrowFuntion()

// Funtion Parameter Pass
const passParameter = (a,b) => {
    console.log (a+b)
}
passParameter(3,7)

/*
Return Funtion
1. Need two variable. First variable in the starting and Second variable to catch the output
2. should use backticks `` in return
*/
const returnFuntion = (name,age) => {
    return `Hello ${name} Your age is ${age}`;
}
const newVariable = returnFuntion('Kamrul',24)
console.log(newVariable);

/*
Arrow Function short Method
1. remove {}
2. remove return
3. write the code in one line
*/
const ami = (name,age) => `Hello ${name} Your age is ${age}`;
const hello = returnFuntion('Kamrul',24)
console.log(hello);
