const arr = [1, 2, 3]
let reversedArr = []
// reversedArr = arr.reduce((prev, curr) => [curr, ...prev]

//     , [])
// for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i])

// }

for (let i = 0; i < arr.length; i++) {
    reversedArr.unshift(arr[i])

}

let string; reversedString = [];
string = "Ravinder"

for (let i = 0; i < string.length; i++) {
    if (!!i) {
        reversedString.unshift(string[i].toUpperCase())
    } else {
        reversedString.unshift(string[i])
    }

}

string = reversedString.join(",")

const str = "Sachin"
const str2 = `${str.charAt(0)}${str.slice(1)}`


const longStr = "Hello bhai kaise ho"
longStr.split(" ").reverse().map((e) => e.split('').reverse().join('')).join(' ')

console.log(reversedArr)
console.log(string)
console.log(str2)