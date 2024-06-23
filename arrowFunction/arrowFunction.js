const professor = (callBacks) => {
  callBacks();
};

const greeting = () => {
  console.log("hello toun");
};
professor(greeting);

const student = (value) => {
  const studentVar = value;
  const arraySlice = studentVar.slice(1);
  return studentVar;
};
console.log(student(["budi", "dayat", "hamid", "dodi", "farhan"]));

const nameArray = (value) => {
  const nameVar = ["Bagas", "Agil", "Doni"];
  return nameVar;
};

console.log(value);
