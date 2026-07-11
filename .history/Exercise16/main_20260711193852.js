
// for of loop

const employees = [
  {
    name: "Mohamed",
    id: 334,
    age: 25
  },
  {
    name: "Ahmed",
    id: 335,
    age: 28
  },
  {
    name: "Asha",
    id: 336,
    age: 22
  },
  {
    name: "Fatima",
    id: 337,
    age: 30
  }
];

// for...of -> wuxuu dhex marayaa array-ga
for (const employee of employees) {

  // for...in -> wuxuu dhex marayaa properties-ka object-ka
  for (const key in employee) {
    console.log(`${key}: ${employee[key]}`);
  }

  console.log(employees[key]);
}


