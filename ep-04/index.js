// function declaration
// function sum(...a){
//     let sum = 0
//     for(let i=0; i<a.length; i++){
//         sum += a[i]
//     }
//    return sum;
// }

// console.log(sum(100,2))

/* --------------------------------------------------------------------------- */

// const sumOfTwoNumber = function (num1,num2){
//     console.log(num1+num2);
// }

// sumOfTwoNumber(1,2)

/* --------------------------------------------------------------------------- */

// callback smjh le ab
const doSomething = function(callback){
    console.log("Samose ban rhe hai");
    setTimeout(callback,3000) 
}

const callback = function(){
    console.log("samose ready hai");
}

doSomething(callback) // phle samose ban rhe hai print hoga then after 3 second samose ready hain print hoga

/* --------------------------------------------------------------------------- */

// higher order function

const radius = [1,2,3,4]

const area = function(radiusArray){
    const result = []
    for(let i=0; i<radiusArray.length; i++){
        result[i]= Math.PI * radiusArray[i]*radiusArray[i]
    }
    return result
}

console.log(area(radius))

const circumference = function(radiusArray){
    const result = []
    for(let i=0; i<radiusArray.length; i++){
        result[i]= Math.PI * radiusArray[i]*2
    }
    return result
}

console.log(circumference(radius))

// upr ke dono normal function the ab dekhte hain higher order function
// function ke ander argument me function paas krne ko hi HOF bolte hain
const calculate = function(radiusArray,formula){
    const result=[]
    for(let i=0; i<radiusArray.length; i++){
        result[i] = formula(radiusArray[i])
    }
    return result
}

const formulaOfArea = function(r){
    return Math.PI * r * r;
}

console.log(calculate(radius, formulaOfArea))

// ab maan le hme circumferencr nikalna hai,  toh bss formula function define kr denge ans hme mil jayega
const formulaOfCircumference = function(r){
    return 2*Math.PI*r;
}

console.log(calculate(radius,formulaOfCircumference))
/* --------------------------------------------------------------------------- */

// Arrow function

const multiply = (a,b,c)=>{
     return a*b*c;
}

console.log(multiply(2,3,4))
/* --------------------------------------------------------------------------- */

