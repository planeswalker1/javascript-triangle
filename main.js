console.log('Hello!');
/*
 1
 22
 333
 4444
 55555
*/

// pseudo code
// have a var to store the triangle
// ima need to loop twice maybe one loop for each row and one loop for each column
// first loop (row)
  // loop until limit rows
  // check if currentNumber <= limit
  // second loop (column)
    // loop currentNumber of times
    // check if printedNumber <= currentNumber
    // add currentNumber to printedMessage
    // printedNumber++
    // end loop
  // check if currentNumber !== limit to add return space;
  // currentNumber++
  // end loop

function loop(limit) {
  let printedMessage = '';
  // loop until limit
  for (let currentNumber = 1; currentNumber <= limit; currentNumber++) {
    // loop until currentNumber
    for (let printedNumber = 1; printedNumber <= currentNumber; printedNumber++) {
      printedMessage += currentNumber;
    }
    // add return space for each completed row
    if (currentNumber !== limit) {
      printedMessage += '\n';
    }
  }
  console.log(printedMessage);
}

loop(5);