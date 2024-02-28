
// const days = ['Sunday','Monday','Tuesday']
// days.push("Wednesday")
// console.log(days)
// days.pop()
// console.log(days)

// days.unshift('Saturday')
// days.shift()
// console.log(days)
// console.log(days.length)

const numbers = [1,2,3,4,5]

// slice ---> used to create a copy of a portion of the array. It doesn't modify the original array , 
// slice(startIndex, endIndex) --> where startIndex is inclusive, endIndex is exclusive
// const newSlicedArray = numbers.slice(1,4)
// console.log(numbers)
// console.log(newSlicedArray)

// splice --> is used to change the content of an array by removing or replacing existing and/or adding new elements.
// splice(startIndex, deleteCount, item)

// let splicedNumbers = numbers.splice(2,1,10,11)
// console.log(numbers)

// split 
// let text = "I love Javascript"
// const newArray = text.split(" ")
// console.log(newArray)


// const person = {
//     name : "Manish Basnet",
//     address : "Itahari"
// }
// Object.freeze(person)
// person.name = "haha"
// console.log(person)

// console.log(Object.keys(person))
// console.log(Object.values(person))




// CONDITIONAL In Javascript 

const isRaining = true 
// if(isRaining){
//     console.log("Carry umbrella")
// }
// else{
//     console.log("Dont carry umbrella")
// }

// ternary operator 

// const result = isRaining ? "Carry Umbrella" : "Dont carry umbrella"

// short circuit evaluation 
// const result = isRaining && "Carry Umbrella"
// console.log(result)
let isLoggedIn = true 
const name = isLoggedIn && "Authenticated"
// console.log(name)



// const temperature = 30 
// if(temperature > 30){
//     console.log("It is hot outside")
// }else if(temperature > 25 ){
//     console.log("It is pleasant outside")
// }else{
//     console.log("It is cold outside")
// }

// Nullish Coelescing Operator 

let age = null

let result = age ?? "No age"
console.log(result)