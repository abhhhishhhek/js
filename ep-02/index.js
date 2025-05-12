// we can do destructuring in array and object

//array destructuring
const arr = [1,2,3,4,5]
console.log(arr[2])

const [a,b,c,d,e] = arr
console.log(d)

// object destructuring
const person = {
    name:"Happy",
    age:24,
    gender:"male",
    address:"Delhi"
}

console.log(person.gender) 
//or
console.log(person["gender"])
//or
const {gender,address} = person
console.log(gender)
console.log(address)