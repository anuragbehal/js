const marvel_heros = ["thor", "ironman", "captain"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);//["thor","ironman","captain",["superman","flash","batman"]]: so it will push array inside the array
// console.log(marvel_heros);

const allheros = marvel_heros.concat(dc_heros); //[ 'thor', 'ironman', 'captain', 'superman', 'flash', 'batman' ]:it will combine both arrays in normal way
console.log(allheros);

const allNewHeros = [...marvel_heros, ...dc_heros]; //spread operator
console.log(allNewHeros); //[ 'thor', 'ironman', 'captain', 'superman', 'flash', 'batman' ]

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [8, 9]];
const flatArr = anotherArr.flat(Infinity); //this will make it array normal and bring it in linear form
console.log(flatArr); //[ 1,2,3,4,5,6,7,8,9]

console.log(Array.isArray("Anurag")); //False: it will ask that is this value is array or not and return true or false.

console.log(Array.from("Anurag")); //[ 'A', 'n', 'u', 'r', 'a', 'g' ]: this will convert the value in array form

console.log(Array.from({ name: "anruag" })); //[]: this will not be able to think that is this is the array or not so it will pass out empty array(interesting and important);

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]: this will add 3 variables and makes and combined array;
