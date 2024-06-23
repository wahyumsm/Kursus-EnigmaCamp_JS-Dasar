const user = ["udin", "sitompul", "yuyu", "ucok", "seto"];

// for (let i = 0; i < user.length; i++) {
//   const currentUser = user[i];
//   if (currentUser.length < 5) {
//     console.log("username lebih 5" + currentUser);
//   }
//   console.log(currentUser);
// }
user.forEach((username, index) => {
  console.log(`Index: ${index}|username: ${username}`);
});

function nameArray(value) {
  const nameIndx = value.forEach((newName) => newName[0]);
  return nameIndx;
}

console.log(nameArray(["budi", "dayat", "hamid", "dodi", "farhan"]));

function nameArray(value) {
  const nameIndx = value.map((newName) => newName[0]);
  return nameIndx;
}

console.log(nameArray(["budi", "dayat", "hamid", "dodi", "farhan"]));

function nameArray(value) {
  const nameIndx = value.filter((newName) => newName[0] !== "a");
  return nameIndx;
}

console.log(nameArray(["asus", "lenovo", "acer", "hp", "axioo"]));

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  console.log((txt += value));
}

let laptop = ["asus", "lenovo", "acer", "hp", "axioo"];

let gpu = [4070, 4090, 4050, 4080, 4060];

const laptopGpu = (laptop, gpu) => {
  if (laptop.length !== gpu.length) {
    throw new Error("ini lebih length");
  }
};
console.log(laptopGpu(laptop, gpu));
