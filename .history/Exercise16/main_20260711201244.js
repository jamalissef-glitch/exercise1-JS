
// for of loop

// const students = [
//  {
//   name: "Ahmed",
//   age: 39,
//   class: "C3442"
//  },
//  {
//   name: "Abdiharun",
//   age: 29,
//   class: "C4432"
//  },
//  {
//   name: "Ahlam",
//   age: 5,
//   class: "C335"
//  }
// ];

// for (let student of students) {
//  console.log(student)
// }


const student = [
 {
  name: "Ahmed",
  age: 39,
  class: "C3442"
 },
 {
  name: "Abdiharun",
  age: 29,
  class: "C4432"
 },
 {
  name: "Ahlam",
  age: 5,
  class: "C335"
 }
];

for (let key in student) {
 console.log(student[key])
}
