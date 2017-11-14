// re-factor the function to use a template literal to return today's date
// optional: update the function so that the date prints on a new line

let today = "11/14/17";

function printDate (date) {
	return "Today's date is: " + date;
}

//////////////////////////////////////////////////////////////////

// re-factor the function to use a template literal to evalute & return the square of the number (x)

let x = 5;

function squareNum (num) {
  return (num + " squared is " + Math.pow(num, 2) + " and not " + Math.pow(num, 3));
}

squareNum(x);


module.exports = {
	printDate,
	squareNum
}
