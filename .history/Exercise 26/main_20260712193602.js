
const num = [3, 6, 9, 11, 13];

const num2 = [...num, 2, 4, 6, 8, 10];

console.log(num2);


function sum(...numbers)  {
 return numbers.reduce((total, num) => total * num, 1); 
}

console.log(sum(4, 8, 12));
