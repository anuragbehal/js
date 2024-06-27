//Dates

let myDate = new Date(); //it is an object under instance myData
console.log(myDate.toString()); //Mon Jun 24 2024 12:44:06 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Mon Jun 24 2024
console.log(myDate.toLocaleString()); //6/24/2024, 12:45:49 PM
console.log(typeof myDate); //Object

//create your own date with time
// let myCreatedDate=new Date(2025,0,23,5,3)
// let myCreatedDate=new Date("2024-08-15")//8/15/2024, 12:00:00 AM
let myCreatedDate = new Date("07-14-2024"); //7/14/2024, 12:00:00 AM
console.log(myCreatedDate.toLocaleString()); //1/23/2025, 5:03:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp); //1719234441442 in miliseconds
console.log(myCreatedDate.getTime()); //1720915200000 in miliseconds
console.log(Math.floor(Date.now() / 1000)); //1719234922 to convert it in seconds.

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()); //5 (6 month considering january as 0 so we can +1 to coreect it)
console.log(newDate.getDay()); //1 means monday

newDate.toLocaleString("default", {
  weekday: "long", // usecontrol+ space
  timeZone: "",
});
