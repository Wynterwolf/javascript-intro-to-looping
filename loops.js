/* TODO: Build a function forLoop. It takes an array as an argument. Start counting from 0, and, using a for loop, add a string to the array 25 times. But not just any string. If your i value is 1, add the string "I am 1 strange loop."; if your i value is anything else, add the string "I am ${i} strange loops.". (Remember flow control with if and else? And how do we interpolate i?) Then return the array. */
let array = []

function forLoop(array) { 
  for (var i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`) ;
    }
return array;
}
    
    
/* Create a function called whileLoop in loops.js. The function should take a number as an argument. Using a while loop, count down (using console.log) from the passed in number to 0. Then return the string 'done' */
    
function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  if (n === 0) {
  }}
return "done"
}
  
  /* TODO: Define a function called doWhileLoop in loops.js. The function should take an integer as an argument. Use the incrementVariable() function (you can copy it from this README) in the condition, and console log "I run once regardless." while incrementVariable() returns a number less than the parameter received. (Your condition might look something like incrementVariable() < num.) Remember that it should also console log when receiving 0 as a parameter because the do-while runs before the condition is checked. */
  
  function doWhileLoop(i) {
    function incrementVariable() {
  i = i + 1;
  return i;
}

do {
  console.log("I run once regardless");
} while (incrementVariable() > i);
  }
