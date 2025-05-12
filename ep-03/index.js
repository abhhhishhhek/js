// spread operator -> object, array, function sb me use hota hai
// denoted by '...'
// iska kaam hota hai duplicate me convert krna

// Q. make a duplicate array
const arr=[1,2,3]
const duplicateArr = [...arr]
console.log(duplicateArr, 3 ,54, "kela");

// Q. merge two arrays
const arr1=[1,23,43,12]
const arr2=[32,12,34,23]

console.log(arr1)
console.log(arr2)

const mergeArr = [...arr1, ...arr2]
console.log(mergeArr)

// Ab object pe dekhte hain
   //Q. merge two object

const obj1 = {
    a:1,
    b:2
}   

const obj2 = {
    c:"hello",
    d:"Developer"
}   

// -> in dono object ko ek object me merge krna hai
const mergeObj = {...obj1, ...obj2}
console.log(mergeObj);

// ab Function me dekhte hain
function sum(...kuchhBhiLikhDe){
   let sum = 0
   for(let i=0; i< kuchhBhiLikhDe.length; i++){
    sum += kuchhBhiLikhDe[i];
   }
   return sum;
}
console.log(sum(1,2,3,4,5,6)) // console pe 21 aayega
