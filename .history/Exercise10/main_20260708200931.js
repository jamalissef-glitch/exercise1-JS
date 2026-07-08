

let car = {
 make: "United satate",
 model: "Ferrari",
 year: 2025,
 message: "This car has start",

  start: function(){
   console.log('Hello Jamal', this.start); 
  }
 
}

car.start()