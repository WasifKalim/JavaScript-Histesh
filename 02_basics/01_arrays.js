// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); // 1

// Array methods

// myArr.push(6) // add in last
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) ; // add at begin
// console.log(myArr); 
// myArr.shift(); // remove one ele from start
// console.log(myArr);
// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(3)); // returns index of 3

// const newArr = myArr.join()

// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
// console.log( newArr); // 0,1,2,3,4,5


// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // not alter in main arr

// console.log(myn1); // 1, 2
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // remove from origin arr
// console.log("C ", myArr);
// console.log(myn2);
