//------------------ LocalStorage ----------------
localStorage.setItem("token", "aldjkgfkadhfg")
console.log(localStorage.getItem("token"))

const data = {
    name: 'Abhi',
    Age: 24,
    City: 'Delhi'
}

for(let key in data){
    localStorage.setItem(key, data[key])
}

localStorage.removeItem("Age")

//-------------------SessionStorage---------------