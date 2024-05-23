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

//NOTES;
