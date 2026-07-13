
function operate(a, b, callback) {
 return callback (a, b);
}

function add(a,b) {
 return a + b;
};

function substrac(a,b) {
 return a - b;
};

function Multiply(a,b) {
 return a * b;
};
function devide(a,b) {
 return a / b;
};

console.log("addition", operate(5, 7, add));
console.log("substraction", operate(13, 7, substrac));
console.log("Multiplication", operate(5, 5, Multiply));
console.log("divition", operate(25, 5, devide));