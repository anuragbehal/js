const accountId=1446326;//const is immutable variable and its values cannot be changed further.
let accountEmail="Anurag@gmail.com"//let is mutable variable and values can be changed and update further.
var accountPassword="1234";

accountCity="jaipur"

// accountId=2; // not allowed
accountEmail="hs@hc.com"
accountPassword="73932932";
accountCity="bangaluru"

console.log(accountId);

/*
prefer not to use var :
beause of issue in block scope and functional scope

*/
console.log([accountId,accountPassword,accountEmail,accountCity]);