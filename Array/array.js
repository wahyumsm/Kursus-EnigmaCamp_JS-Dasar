const myLunch = ["ucok", "toun", "citut", "euseuuseu"];

// myLunch.push("popo", "whwhshws");
// myLunch.splice(2);

// myLunch.reverse();
myLunch[2] = undefined;

console.log(myLunch);

const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

grid.push(323);
console.log(grid);

// JavaScript Array Methods

// Basic Array Methods
// Array length
// Array toString()
// Array at()
// Array join()
// Array pop()
// Array push()

// Array shift()
// Array unshift()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array splice()
// Array toSpliced()
// Array slice()

// https://www.w3schools.com/js/js_arrays.asp

// https://www.w3schools.com/js/js_array_methods.asp
// https://www.w3schools.com/js/js_array_search.asp
// https://www.w3schools.com/js/js_array_sort.asp
// https://www.w3schools.com/js/js_array_iteration.asp
// https://www.w3schools.com/js/js_array_const.asp
const training = ["Enigma", "Camp", "Code", "Node"];
let size = training.length;
console.log(size);

const buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
console.log(buah);

const name1 = ["Cecilie", "Lone"];
const name2 = ["Emil", "Tobias", "Linus"];
const name3 = ["Robin", "Morgan"];
const students = name1.concat(name2, name3);
console.log(students);
