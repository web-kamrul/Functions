/*
1. Hoisting Function: ফাংশনের আউটপুটকে ফাংশনের পূর্বে লিখলে তা প্রদর্শন করবে কি না 
2. ✅ Declaration 
3. 🔴 Expression 
2. 🔴 Arrow 
*/
myDeclaration()
function  myDeclaration () {
    console.log ('This is function note declaration')
}

myExpression();
let myExpression = function () {
    console.log ('This is function note expression')
}

console.log(myhello);
const myAmi = (name,age) => `Hello ${name} Your age is ${age}`;
const myhello = returnFuntion('Kamrul',24)



