
function operate(a, b callback) {
 return callback (a, b);
}

function add(a,b) {
 return a + b;
};

console.log("addition", operate(5, 7, add));