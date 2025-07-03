// const arr = [1, 2, 3]
// let reversedArr = []
// reversedArr = arr.reduce((prev, curr) => [curr, ...prev]

//     , [])
// for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i])

// }

// for (let i = 0; i < arr.length; i++) {
//     reversedArr.unshift(arr[i])

// }

// let string; reversedString = [];
// string = "Ravinder"

// for (let i = 0; i < string.length; i++) {
//     if (!!i) {
//         reversedString.unshift(string[i].toUpperCase())
//     } else {
//         reversedString.unshift(string[i])
//     }

// }

// string = reversedString.join(",")

// const str = "Sachin"
// const str2 = `${str.charAt(0)}${str.slice(1)}`


// const longStr = "Hello bhai kaise ho"
// longStr.split(" ").reverse().map((e) => e.split('').reverse().join('')).join(' ')

// console.log(reversedArr)
// console.log(string)
// console.log(str2)


// for (var i = 1; i <= 5; i++) {
//     function close(x) {
//         setTimeout(() => {
//             console.log(x)
//         }, x * 1000);
//     }
//     close(i)
// }



// var i = 3
// ;(function (){
//     i = 5
//     console.log(i)
// })()


// const outer = () => {
//     var a = 3

//     return inner = () => {
//         a++
//         console.log(a)
//     }
// }


// outer()()

// const counter = outer()
// counter()
// counter()
// counter()
// counter()



// Modular code example 


const radius = [1, 2, 3, 4, 5];


const area = (r) => Math.PI * r * r;
const circumference = (r) => 2 * Math.PI * r;
const diameter = (r) => 2 * r;

// const calculate = (arr, logic) => {
//     const output = [];
//     for (let i = 0; i < arr.length; i++) {
//         output.push(logic(arr[i]));
//     }

//     return output;
// }


// console.log(calculate(radius, area));
// console.log(radius.map(area));

// create our own map function
Array.prototype.calculate = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[1]));
    }
}

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));


