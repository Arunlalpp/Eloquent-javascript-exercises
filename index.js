let total = 0,
	count = 1;
while (count <= 10) {
	total += count;
	count += 1;
}
console.log(total);

//Factorial function //

function factorial(n) {
	if (n == 0) {
		return 1;
	} else {
		return factorial(n - 1) * n;
	}
}
console.log(factorial(8));

//String Values//

`${100 / 2}`;

//Unary Operator//

console.log(typeof 4.5);

console.log(typeof "X");

console.log(-(10 - 2));

//Boolean Valuew//

console.log("Aardvark" < "Zoroaster");

console.log("itchy" != "scratchy");

console.log(NaN == NaN);

//Logical opertore//

1 + 1 == 2 && 10 * 10 > 50;

console.log(false ? 1 : 2);

//Chapter-2//

//Program structure //

let ten = 10;
console.log(ten * ten);

//....//

mood = "Dark";
console.log(mood);
let Benton = 140;

Benton = Benton - 40;
console.log(Benton);

//..//

let one = 1,
	two = 2;
console.log(one + two);

//Functions//

// prompt("Enter passcode");

let X = 30;
console.log("the value of x is", X);

console.log(Math.max(2, 4));

console.log(Math.min(2, 4) + 100);

//Control Flow //

// let theNumber = Number(prompt("Pick a number"));
// console.log("your number is the square root of", +theNumber * theNumber);

// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
// 	console.log("Your number is the square root of", +theNumber * theNumber);
// }

// let num = Number(prompt("Pick a number"));
// if (num < 10) {
// 	console.log("Small");
// } else if (num < 100) {
// 	console.log("Medium");
// } else {
// 	console.log("Large");
// }

//whileloop//

let number = 0;
while (number <= 18) {
	console.log(number);
	number = number + 2;
}

//do while//

// let yourName;
// do {
// 	yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName);

if (false != true) {
	console.log("That makes sense.");
	if (1 < 2) {
		console.log("No surprise there.");
	}
}

// For Loop //

for (let number = 0; number <= 12; number = number + 1) {
	console.log(number);
}

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
	result = result * 2;
}
console.log(result);

for (let current = 20; ; current = current + 1) {
	if (current % 7 == 0) {
		console.log(current);
		break;
	}
}

//SwitchCase//

// switch (prompt("What is the weather like?")) {
//     case "rainy":
//       console.log("Remember to bring an umbrella.");
//       break;
//     case "sunny":
//       console.log("Dress lightly.");
//     case "cloudy":
//       console.log("Go outside.");
//       break;
//     default:
//       console.log("Unknown weather type!");
//       break;
//   }
//   let n = 5;

// External loop.
// for (let i = 1; i <= n; i++) {
// // printing spaces.
// for (let j = 1; j <= n - i; j++) {
// process. stdout. write(' ')
// }
// }

// Functins //

const square = function (x) {
	return x * x;
};

console.log(square(12));

const makeNoise = function () {
	console.log("Pling!");
};

//   makeNoise();

//   const power = function (base, exponent) {
// 		let result = 1;
// 		for (let count = 0; count < exponent; count++) {
// 			result *= base;
// 		}
// 		return result;
// 	};

// 	console.log(power(2, 10));

let x = 10;
if (true) {
	let y = 20;
	var z = 30;
	console.log(x + y + z);
	// → 60
}
// y is not visible here
console.log(x + z);
// → 40

const halve = function (n) {
	return n / 2;
};

let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10

//Function in another Function //

const hummus = function (factor) {
	const ingredient = function (amount, unit, name) {
		let ingredientAmount = amount * factor;
		if (ingredientAmount > 1) {
			unit += "s";
		}
		console.log(`${ingredientAmount} ${unit} ${name}`);
	};
	ingredient(1, "can", "chickpeas");
	ingredient(0.25, "cup", "tahini");
	ingredient(0.25, "cup", "lemon juice");
	ingredient(1, "clove", "garlic");
	ingredient(2, "tablespoon", "olive oil");
	ingredient(0.5, "teaspoon", "cumin");
};

// let launchMissiles = function () {
// 	let safeMode;
// 	missileSystem.launch("now");
// };
// if (safeMode) {
// 	launchMissiles = function () {
// 		/* do nothing */
// 	};
// }

console.log("The future says:", future());

function future() {
	return "You'll never have flying cars";
}

console.log("Arun", recret());

function recret() {
	return "You will get soon";
}

const powerFull = (base, exponent) => {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
};

const horn = () => {
	console.log("Toot");
};

//   function greet(who) {
// 	console.log("Hello " + who);
//   }
//   greet("Harry");
//   console.log("Bye");

//   function chicken() {
// 	return egg();
//   }
//   function egg() {
// 	return chicken();
//   }
//   console.log(chicken() + " came first.");
//   // → ??

function minus(a, b) {
	if (b === undefined) return -a;
	else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5

function power(base, exponent = 2) {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64

console.log("C", "O", 2);
// → C O 2

function wrapValue(n) {
	let local = n;
	return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

// function power(base, exponent) {
// 	if (exponent == 0) {
// 	  return 1;
// 	} else {
// 	  return base * power(base, exponent - 1);
// 	}
//   }

//   console.log(power(2, 3));
//   // → 8

// function findSolution(target) {
// 	function find(current, history) {
// 		if (current == target) {
// 			return history;
// 		} else if (current > target) {
// 			return null;
// 		} else {
// 			return (
// 				find(current + 5, `(${history} + 5)`) ||
// 				find(current * 3, `(${history} * 3)`)
// 			);
// 		}
// 	}
// 	return find(1, "1");
// }

// console.log(findSolution(24));
// // → (((1 * 3) + 5) * 3)

// function printFarmInventory(cows, chickens) {
// 	let cowString = String(cows);
// 	while (cowString.length < 3) {
// 		cowString = "0" + cowString;
// 	}
// 	console.log(`${cowString} Cows`);
// 	let chickenString = String(chickens);
// 	while (chickenString.length < 3) {
// 		chickenString = "0" + chickenString;
// 	}
// 	console.log(`${chickenString} Chickens`);
// }
// printFarmInventory(7, 11);

// function printzeroPaddedwithLabel(number, label) {
// 	let numberString = String(number);
// 	while (numberString.length < 3) numberString = "0" + numberString;
// 	{
// 	}
// 	console.log(`${numberString} ${label}`);
// }

const f = function (a) {
	console.log(a + 2);
};

function g(a, b) {
	return a * b * 3.14;
}

//******Chapter-4 */

//*****Arra */

let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3

let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH

let sequence = [1, 2, 3, 4];
sequence.push(5);
sequence.push(6);
sequence.push(10);
console.log(sequence);
console.log(sequence.pop());

let day1 = {
	squirrel: false,
	events: ["work", "touched tree", "pizza", "running"],
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false

let anObject = { left: 1, right: 2 };
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true

// Copy object fromn anpther object //

let objectA = { a: 1, b: 2, c: 8, d: 12 };
Object.assign(objectA, { b: 3, c: 4, d: 18 });
console.log(objectA);
// → {a: 1, b: 3, c: 4}

//Mutability//

let object1 = { value: 10 };
let object2 = { value: 12 };
let object3 = { value: 14 };
let object4 = { object1 };
console.log(object1 == object4);

console.log(object2 == object3);

function phi(table) {
	return (
		(table[3] * table[0] - table[2] * table[1]) /
		Math.sqrt(
			(table[2] + table[3]) *
				(table[0] + table[1]) *
				(table[1] + table[3]) *
				(table[0] + table[2])
		)
	);
}

console.log(phi([76, 9, 4, 1]));
// → 0.068599434

function tableFor(event, journal) {
	let table = [0, 0, 0, 0];
	for (let i = 0; i < journal.length; i++) {
		let entry = journal[i],
			index = 0;
		if (entry.events.includes(event)) index += 1;
		if (entry.squirrel) index += 2;
		table[index] += 1;
	}
	return table;
}
  
//   console.log(tableFor("pizza", JOURNAL));
// 	// → [76, 9, 4, 1]

// 	///Complete correlation///

// 	function journalEvents(journal) {
// 		let events = [];
// 		for (let entry of journal) {
// 			for (let event of entry.events) {
// 				if (!events.includes(event)) {
// 					events.push(event);
// 				}
// 			}
// 		}
// 		return events;
// 	}
  
//   console.log(journalEvents(JOURNAL));
//   // → ["carrot", "exercise", "weekend", "bread", …]



  let todoList = [];
	function remember(task) {
		todoList.push(task);
	}
	function getTask() {
		return todoList.shift();
	}
	function rememberUrgently(task) {
		todoList.unshift(task);
	}