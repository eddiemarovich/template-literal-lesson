// re-factor the function to use a template literal to log today's date
// update the function so that the date prints on a new line

let today = "11/14/17";

function printDate (date) {
	console.log("Today's date is: " + date);
}

printDate(today);

//////////////////////////////////////////////////////////////////

// re-factor the function to use a template literal to evalute the square of the number

let x = 5;

function squareNum (num) {
  console.log(num + " squared is " + Math.pow(num, 2) + " and not " + Math.pow(num, 3));
}

squareNum(x);
