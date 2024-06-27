//Arrays

const myArr = [1, 2, 4, 5, 6, 3, 3]; //square brackets me likhe jtee haa
const myHeros = ["doremon", "chotabhem"];

const myArr2 = new Array(1, 2, 4, 5); //yaha huum square brackets nhi use krte because huum new array lere haa joo ke unique haa

console.log(myArr[2]); //4: to select the perticular element from the array list

//++++++++ARRAY METHODS++++++++++++++
myArr.push(6); //this will push the element in the array from back
console.log(myArr); //[1,2,4,5,6,3,3,6]//this last element 6 we pushed from back in the array

myArr.pop(); //this will remove the last value from the array
console.log(myArr); //new list=[1,2,4,5,6,33]// soo last element 6 is pushed from the array from back

myArr.unshift(6); //this will add the element in the starting of array .
console.log(myArr); //new list[6,1,2,4,5,6,3,3]

myArr.shift(); //this will remove the array from the starting of the array
console.log(myArr); //new list[1,2,4,5,6,3,3]

console.log(myArr.includes(9)); //false: this will check that is 9 exist in the value or not and on that bases it will give true of false.

console.log(myArr.indexOf(9)); //-1: it will check that is the value exist in the list or not, if yes then i will print the index number of the element , and if no then it will print -1;

const newArr = myArr.join(); //it will bind our existing array as well as convert it into string type
console.log(myArr);
[1, 2, 4, 5, 6, 3, 3];
console.log(newArr);
1, 2, 4, 5, 6, 3, 3;

//+++++SLICE ,SPLICE(important)+++++++
//Q: Difference between splice and slice...
//slice
const Arr3 = [1, 2, 3, 4, 5, 6, 7];
console.log(Arr3.slice(1, 4)); //[2,3,4]: so SLICE will include index from 1 to 4 and it will remove rest of the elements.(and it will not include the forth element)

//vs

const Arr4 = [1, 2, 3, 4, 5, 6, 7];
console.log(Arr4.splice(1, 4)); //[2,3,4,5]: it will include the 4the element .
