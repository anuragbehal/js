//+++++++++++++++++++NUMBERS+++++++++++++++++
const score=100;
console.log(score);//100

const balance=new Number(100);//[Number:100](it says specifically that it is a number type)
console.log(balance);

console.log(balance.toString().length)//3:it will convert a number into a string type and wee check the length of that number.

console.log(balance.toFixed(2))//100.00(precision dhekne ke liye end me 2 zeros aa jyenge ye apne pee depent krta ha kee kitne zeros dhekna haa)

const otherNumber=23.8966;
console.log(otherNumber.toPrecision(3))//23.9(this will give us the most precise value in 3letters depends on what input we gave)

const hundreds=1000000
console.log((hundreds.toLocaleString('en-IN')));//10,00,000 (it will convert the value into local string in comas in according to indian system as we write en-IN);


//++++++++++++++ Math +++++++++++++++++++
console.log(Math);//Object [Math]{}
console.log(Math.abs(-4));//4(it wil give you the absolute value)
console.log(Math.round(4.6));//5(it will give you the round of value)
console.log(Math.ceil(4.2));//5(i will give you the toppest round of value)
console.log(Math.floor(4.8));//4(will give u bottom round of value)
console.log(Math.min(3,8,9,2));//2(minimum value choose)
console.log(Math.max(3,8,9,2));//9(maximum value choose)

console.log(Math.random());//0.7238738 (it will give the random number between 0 and 1 in decimals.)
console.log((Math.random()*10)+1);//6.80392903293 ekk number shift hoo jyega left side or 1 isse liye tkke 0 naa ayye value and value 1 se uper hee ayye .
console.log(Math.floor(Math.random()*10)+1);//6 isse random value ayege after lowest roundoff

const min=10;
const max=20;

//IMPORTANT line must learn this
console.log(Math.floor(Math.random()*(max-min+1)+min))//13(yee max and min ke bich mee seee koe random number ayega  )