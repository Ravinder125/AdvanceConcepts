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


// const radius = [1, 2, 3, 4, 5];


// const area = (r) => Math.PI * r * r;
// const circumference = (r) => 2 * Math.PI * r;
// const diameter = (r) => 2 * r;

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
// Array.prototype.calculate = function (logic) {
//     const output = [];
//     for (let i = 0; i < this.length; i++) {
//         output.push(logic(this[1]));
//     }
// }

// console.log(radius.calculate(area));
// console.log(radius.calculate(circumference));
// console.log(radius.calculate(diameter));


const users = [
    { id: 1, firstname: "Alice", lastname: "Smith", age: 25, email: "alice@example.com" },
    { id: 2, firstname: "Bob", lastname: "Johnson", age: 30, email: "bob@example.com" },
    { id: 3, firstname: "Charlie", lastname: "Brown", age: 30, email: "charlie@example.com" }
];

// const output = users.map(({ id, firstname, lastname, age, email }) => ({
//     id,
//     fullname: `${firstname} ${lastname}`,
//     email,
//     age,
// }));

// console.log(updatedUsers)

// const ageDivided = users.reduce((acc, curr) => {
//     acc[curr.age] = acc[curr.age] ? ++acc[curr.age] : 1;
//     return acc
// }, {})

// console.log(ageDivided)

// const output = users
//     .filter((user) => (user.age > 25))
//     .map((user) => user.firstname)
// console.log(output)

// const output = users.reduce((acc, user) => {
//     if (user.age > 25) {
//         return [...acc, user.firstname]
//     }
//     return acc
// }, [])


// console.log(output)


// const haystack = "leetcode", needle = "leeto"

// const findIndex = (haystack, needle) => {
//     console.log(haystack.indexOf(needle))
// }

// findIndex(haystack, needle)

// var romanToInt = function (s) {
//     const symble = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     }

//     return s.split('').map((r) => {
//         return symble[r]
//     }).reduce((a, r) => a = a + r)
// }
// console.log(romanToInt("LVII"))]

// console.log(Math.floor(Math.sqrt(3)))

// var longestCommonPrefix = function (strs) {
//     let prefix = []
//     for (let i = 0; i < strs.length; i++) {
//         const str = strs[i]
//         for (let j = 1; j < str.length; j++) {
//             console.log(strs[j]?.[i] === str[i], strs[j]?.[i], str[i])
//             if (strs[j]?.[i] === str[i]) {
//                 if (prefix.includes(str[i])) {
//                     continue
//                 }
//                 console.log(prefix.includes(str[i]))
//                 prefix.push(str[i])
//             }
//         }
//     }
//     console.log(prefix)
// }
// longestCommonPrefix(["flower", "flow", "flight"])

// var rotateString = function (s, goal) {
//     const halfLen = Math.floor((s.length) / 2)
//     return s.slice(halfLen) + s.slice(0, halfLen + 1)
// };
// let s = "abcde", goal = "abced"
// rotateString(s, goal)