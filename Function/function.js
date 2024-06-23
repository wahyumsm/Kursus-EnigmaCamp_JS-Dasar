function helloUcok() {
  console.log("toun");
}
helloUcok();

function bootCamp(value) {
  const bootCampFunc = value;
  return bootCampFunc;
}
// /FUNCTION DISEBUT PRMETER

function student(value) {
  const studentFunct = ["Andi", "Budi", "Wahyu"];
  return studentFunct;
}
const list = student();
console.log(list);



function camp(value) {
  const campVar = value;
  const campInd = campVar[3];
  console.log(campInd);
}

camp(["Enigma", "Camp", "Code", "Node", "Javascript"]);