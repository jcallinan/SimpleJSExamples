// Creating objects in JavaScript
// from functions....
function calculateArea(width, height) { return width * height; }
console.log(typeof(calculateArea));
var rectangleArea = calculateArea(300, 200);
console.log(rectangleArea);
console.log(calculateArea.name);

// from thin air...
var myObject = {};
console.log(typeof(myObject));
console.log(myObject);
// from JSON style key values
var myRectangle = { width: 300, height: 200 };
console.log(typeof(myRectangle));
console.log(myRectangle.width);
// from constructors like traditional OOP
function Rectangle(width, height) {
    console.log("I'm creating a new Rectangle");
    this.width = width;
    this.height = height;
    this.calculateArea = function() {
        return this.width * this.height;
        }
   }
var rectangle1 = new Rectangle(293, 117);
var rectangle2 = new Rectangle(293, 137);
console.log(rectangle1);
console.log(rectangle2.height);
var rectangle3 = new Rectangle(143, 187);
console.log(rectangle3.calculateArea());