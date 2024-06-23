console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)//!(negation meaning not equal to)

console.log("2">1);//true ayega data types are different and automatically js converted it into 2 but make sure that datatype same hoo;
console.log("02">1)//true ayega

//**note: comparison  converts null to number, treating it as 0(never use such conversions and avoid it) */
console.log(null>0)//false(null is 0 empty value)
console.log(null==0)//false
console.log(null>=0)//true(because null >=0 mee null conversion kaa problem aa jtta ha soo make sure)

console.log(undefined==0)//yee haar case me value false dega
console.log(undefined>0)//false
console.log(undefined<0)//false

//Strict check ===
console.log("2"===2)//yaha datatype check krega or error degaa because datatype different ha
