//this is for interview perspective

//Primitive
//7 types of primitive data types: 
// 1: String

// 2: Number
const score=100;
const scoreValue=100.3(decimal)

// 3: Boolean
const isLoggedIn=false

// 4: null
const outsideTemp=null//completly empty haa

// 5: undefined
let userEmail;//kuch nahi assign kiya too ye undefined hoga

// 6: Symbol(we use this to make any value unique)
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);//false: bilkul be equal nahi hoge different he hoge hmesha

// 7: BigInt(bdde values joo handle nahi hote ha huum pher bigint use kar lete haa)
const bigNumber=73938938983983n//soo ye number bdda ha too ye bigInt me convert hoo jyega juub huum iske agge n lga dnge


//---------------------------------------------
//Non primitive(Reference type:jinka reference diya jtta ha)
//3 types of non-primitive datatypes:
// 1: Arrays
const heros=["raghu","rajan","veerjan"]//square brackets me likhte ha

// 2: Objects //braces mee dlte ha
let myObj={
    name:"anurag",
    age:21,
};

// 3: Functions
const myFunction=function(){
    console.log("hello baby")
}

//typeof:type of is a type of function which tell us what type of datatype we are using here
console.log(typeof bigNumber)//undefined
console.log(typeof outsideTemp)//object: null kaa object dhekata ha
// Question: Is javascript statically typed language orr dynamically typed language?
// Answer: JavaScript: A scripting language used for web development that uses dynamic typing to offer greater flexibility in handling data.

/* Static Typing
 Static typing is a typing system where variables are bound to a data type during compilation. Once a variable is assigned a data type it remains unchanged throughout the programs execution. This binding promotes type safety and detects errors at an early stage.

 static languages:
 C++: A language commonly used for system programming and game development where data types must be explicitly defined.
 Java: A used language that is known for its “Write Once Run Anywhere” capability which enforces strong typing through a reliable type system.
 Rust: An increasingly popular language that ensures memory safety and concurrency without sacrificing performance through static typing.
*/

/* Dynamic Typing
// In contrast, dynamic typing allows variables to be bound to data types at runtime instead of during compilation. This flexibility enables concise code and ease of use. It compromises on type safety as a trade-off.

Dynamic languages:
Python: A versatile language renowned for its readability and ease of use while relying on dynamic typing to provide concise code.
JavaScript: A scripting language used for web development that uses dynamic typing to offer greater flexibility in handling data.
Ruby: Known for its simplicity and elegant syntax. Ruby utilizes dynamic typing to make coding more intuitive and expressive.
*/



//++++++++++++++++++++++++++++++ Memories in js +++++++++++++++++++++++++++++++

//Stack(primitive)
//yaha values ke ekk copy de jtte haa orr change copy kee andar change kee jte ha original value change nahi hote haa 
let myYoutubename="anuragbehal";

let anothername=myYoutubename
anothername="chai with anurag";

//yaha values stack bna gye or change hoge
console.log(myYoutubename)//anuragbehal
console.log(anothername)//chai with anurag


//Heap(Non-primitive)
//too yaha pe usne address ka refrence liya haa orr value print ke ha or values change be ke jaa skte ha yaa same be aa skte ha depends on the thing
let userOne={
    email:"user@google.com",
    upi:"user@ybl;"
}

let userTwo =userOne

userTwo.email="anurag@google.com"

console.log(userOne.email);//user@google.com
console.log(userTwo.email);//user@google.com