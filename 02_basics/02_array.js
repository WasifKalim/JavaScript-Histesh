const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // array in array in marvel
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros); // 2D array
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // 1D array

//  seperator - concat both values
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity); // 1D array
// console.log(real_another_array);


// console.log(Array.isArray("Hitesh")); // false 
// console.log(Array.from("Hitesh")); // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting - []

let score1 = 100
let score2 = 200
let score3 = 300

// Converts to array
console.log(Array.of(score1, score2, score3));
