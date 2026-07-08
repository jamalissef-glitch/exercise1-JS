

let car = {
 make: "United satate",
 model: "Ferrari",
 year: 2025,
 start: "This car has start",

  start: function(){
   console.log('Hello Jamal', this.start); 
  }
 
}

console.log(car.start());
