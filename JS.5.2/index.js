// MAKE SURE you use the array functions to complete these problems.

// Problem 1
// Below we have an array. Take the last item off of the array.

let array1 = [1, 2, 3, 4, 5, 6];
function removeLastItem() {
  //write code here
  array1.pop();
}

removeLastItem();
console.log(array1);

// Problem 2
// Below we have an array. Take the first item off of the array.

let array2 = ["This", "Hello", "World"];
function removeFirstItem() {
  //write code here
  array2.shift();
}
removeFirstItem();
console.log(array2);


// Problem 3
// Below we have an array. Remove "stuff" and "ready" from the array.

let array3 = ["well", "stuff", "money", "ready", "hello"];
function removeItems() {
  //write code here
  array3.splice(1, 1);
  array3.splice(2, 1);
}
removeItems();
console.log(array3);

// Problem 4
// Below we have an array. Add "well" to the beginning of the array.

let array4 = ["hello", "people"];

function addItem() {
  //write code here
  array4.splice(0, 0, "well");
}
addItem("well");
console.log(array4);


// Problem 5
// Below we have an array. Add "power" in between "great" and "comes".

let array5 = ["with", "great", "comes", "great", "responsibility"];
function addMoreItem() {
  //write code here
  array5.splice(2, 0, "power");
}
addMoreItem();
console.log(array5);

// Problem 6
// Below we have an array. Add 7 to the end of the array.

let array6 = [1, 2, 3, 4, 5, 6];
function addLast() {
  //write code here
  array6.push(7);
}

addLast();
console.log(array6);

