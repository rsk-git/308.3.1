//PART 1
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

for (let i = 1; i<=100; i++) 
    
    if (i % 3 ===0 && i% 5===0)  {
        console.log("Fizz Buzz") ;
        } 
        else if(i % 3 ===0)  {
    console.log("Fizz");
    }
    else if (i % 5 ===0)  {
      console.log("Buzz")
    }
   
    else{
    console.log(i);
  
  }
//PART 2
//   Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.

let n = 30; // change number
let currentNumber = n;

while (true) {
    let isPrime = currentNumber > 1 && (currentNumber === 2 || currentNumber % 2 !== 0);

    for (let i = 3; i < currentNumber && isPrime; i += 2) {
        if (currentNumber % i === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        console.log(currentNumber);
        break;
    }

    currentNumber++;
}

//PART 3
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.
// Use the example string provided above to test your program. Once you are confident it is working correctly, try the following string to see if your program works properly with other data.
// Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232

let csvString = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

let cell = '';
let row = '';

for (let i = 0; i < csvString.length; i++) {
    let char = csvString[i];

    if (char === ',') {
        // Print cell content with a space and reset for next cell
        row += cell + '  ';
        cell = ' ';
    } else if (char === '\n') {
        // Print the entire row and reset for next row
        console.log(row + cell); // Print last cell in the row
        row = ''; // Clear the row variable for the next row
        cell = ''; // Clear the cell variable for the next cell
    } else {
        // Accumulate characters for the cell
        cell += char;
    }
}

// Print the last row content if any
if (row || cell) {
    console.log(row + cell);
}