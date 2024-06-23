/*
//1-> NUMBER TYPE;
let score="33aba";
console.log(typeof score);// it will give output -> string;
console.log(score);//out-> 33aba;

//now lets change the value
let valueInNumber=Number(score);//Number -> datatype conversion (it converts the value into number)
console.log(typeof valueInNumber);//Output type-> number
console.log(valueInNumber);//Output-> NaN(not a number) when it cannot be converted in number;
*/

//NOTES;
//"33"=> 33
//"33aba"=> NaN;
//true=> 1; false => 0;


//2-> BOOLEAN TYPE;
let isLoggedIn=1;
let booleanIsLoogedIn=Boolean(isLoggedIn);//Boolean -> datatype conversion (ot converts anything into the values of true or false);
console.log(booleanIsLoogedIn);//will pass out-> true(1) and false in the case of 0 input;

//NOTES;
//1=> true; 0=>false;
//""=> false;
//"anurag"=>true;


//3->STRING TYPE;
let someNumber=33;
let stringNumber=String(someNumber);//String ->datatype conversion(it converts the value into String);
console.log(typeof stringNumber);//Output-> string
console.log(stringNumber);//Output-> 33

//**************** Operations ***************

let value=3;
let negValue= -value;
// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)//two raise to the power 2
// console.log(2/2)
// console.log(2%2)//modolus:- remainder

let str1="hello"
let str2="behal"

let str3= str1+str2;//this is how we can combine strings in js
console.log(str3);


// //conversions(not to be used)
// console.log("1"+2)//output-12
// console.log(1+"2")//output-12
// console.log("1"+2+2)//output-122(entire thing is converted in string)
// console.log(1+2+"2")//output-32(yaha 2+1 add hoge sath mee usne le liye string 2 orr bna diya 32)

// tricky conversion(never use this)
console.log(+true)//1
console.log(+"")//0 ayega

let gameCounter=100;
gameCounter++;//101(postfix)
++gameCounter;//101(prefix)
console.log(gameCounter)