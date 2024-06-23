//we will learn about different type of strings functions
const Name="anurag";
const repoCount=50;

console.log(`hello my name is ${Name} and my repo count is ${repoCount}`)//``= this is basically backticks above tab key in keyboard;

const gameName=new String("anurag")

//to access the keys of string
console.log(gameName[0]);//a
console.log(gameName.__proto__);//this will give out object;

console.log(gameName.length)//6
console.log(gameName.toUpperCase())//ANURAG//so these are kind of functions
console.log(gameName.charAt('2'))//u: second position pe kya ha
console.log(gameName.indexOf('n'))//1: it will tell you ke character kis number pee ha

const newString=gameName.substring(0,4)
console.log(newString)//anur

const anotherString=gameName.slice(-8,4)
console.log(anotherString)//nur

const newStringOne="   anurag    ";
console.log(newStringOne.trim())//it will remove the unneccessory spaces in the input and it works on only white space and line terminator characters;

const url="https://anurag.com/anurag%20behal"
console.log(url.replace('%20','-'))//so it will replace the value with new value we gave

console.log(url.includes('anurag'))//true:this will check ke yee keyword ha ya nahi iske andar like anurag ha url me too yee true dega agar nahi ha too false dega

console.log(gameName.split('-'));//this is how we can split the values on the bases of what command we give(ready this on mdn if didnt understood)