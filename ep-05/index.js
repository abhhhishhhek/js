// Arrays- map, fileter, reduce
/* -------------------Array Operations----------------- */
const arr = [23,34,45,"Banana",false]
console.log(arr)
arr.push("orange")
console.log(arr)
arr.unshift("unshift")
console.log(arr)
arr.shift("shift")
console.log(arr)
arr.pop()
console.log(arr)

arr[10]=10
console.log(arr)
console.log(arr.length)

/* -------------------Map----------------- */

const array = [10,20,30,40,50]
const newArray = array.map((element)=>{
    return element*3
})
console.log(newArray);


const product = [
    {
        price:500,
        name:"Belt"
    },

    {
        price:4500,
        name:"Shoe"
    },

    {
        price:1000,
        name:"Bag"
    }
]

product.map((element)=>{
    console.log(element.name , element.price)
})


/* -------------------Filter----------------- */
const a = [10,20,30,40,50]
const filterarr = a.filter((element)=>{
      return element>= 30
})
console.log(filterarr)

/*---------------------Reduce---------------- */
const ab = [1,2,3,4,5]
const sum = ab.reduce((accumulator,currentvalue)=>{
      return accumulator + currentvalue
},0) 
console.log(sum)



