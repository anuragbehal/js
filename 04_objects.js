// const tinderUser=new object()//this is called singletone object

const tinderUser = {}; //non-singletone object

tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  //nesting objects
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "anurag",
      lastname: "behal",
    },
  },
};
console.log(regularUser.fullname.userfullname.firstname); //{ userfullname: { firstname: 'anurag', lastname: 'behal' } }

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = { obj1, obj2 };
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign({}, obj1, obj2); //empty object is considered as target and rest are sources
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }//. it will basically combine arrays in linear form//

//spread operator
const obj5 = { ...obj1, ...obj2 };
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//how database will give values;
//it will give values in array format and under array we will be having objects with its keys.
const users = [
  {
    id: 1234,
    email: "ab@gmail.com",
  },
  {
    id: 1234,
    email: "ab@gmail.com",
  },
  {
    id: 1234,
    email: "ab@gmail.com",
  },
  {
    id: 1234,
    email: "ab@gmail.com",
  },
]; //like thiss
users[1].email; //yaha first value access krne haa email kee andar

console.log(tinderUser);
console.log("keys: ");
console.log(Object.keys(tinderUser)); //aise huum keys niklte haa user object lga ke

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true: hasOwnProperty is used to check that is that value exist or not and depend that i wil give true or false values..

//+++++++Object Destructuring++++++
