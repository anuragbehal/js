//object literals

const mysym = Symbol("key1");

const jsUser = {
  //curly braces
  name: "Anurag", //name ,age and else are keys
  [mysym]: "mykey1", //to use this as symbol we use square brackets//important
  age: 21,
  location: "amritsar",
  email: "abthegenius@gmail.com",
  isLoogedIn: false,
  lastLoggedIn: ["monday", "friday"],
};

//ways to access keys of object
// console.log(jsUser);
console.log(jsUser.email);
console.log(jsUser["email"]); //preffered way
console.log(jsUser[mysym]); //mykey1

jsUser.email = "ab@gmail.com"; //by this way we can change the data in object in perticular keys

// Object.freeze(jsUser)//so this will freeze the value of jsuser and u cant change its values further

jsUser.email = "ab84938@gmail.com"; //so this will not apply because jsuser is freezed
console.log(jsUser);

jsUser.greeting = function () {
  console.log("hello js user");
};

jsUser.greetingTwo = function () {
  console.log(`Hello Js user ${this.name}`);
};
console.log(jsUser.greeting()); //undefined

console.log(jsUser.greetingTwo());
