
// for of loop

// const employee = ["Mohamed", "Hamdi", "Nur", "Najma"];

// for(let workers of employee) {
//  console.log(employee)
// }

// for in looop

const employeeInfo = { name: "Mohamed", id: 334, age: 25 },
----
const employeeInfo = { name: "Asma", id: 553, age: 21 }
---
const employeeInfo = { name: "Asma", id: 553, age: 21 }
---
const employeeInfo = { name: "Asma", id: 553, age: 21 }
--
const employeeInfo = { name: "Asma", id: 553, age: 21}

for (const key in employeeInfo) {
 console.log(employeeInfo[key])
}

