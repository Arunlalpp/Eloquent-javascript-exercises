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

const square = function(x) {
	return x * x;
  };
  
  console.log(square(12));


  const makeNoise = function() {
	console.log("Pling!");
  };
  


  makeNoise();
  
  const power = function (base, exponent) {
		let result = 1;
		for (let count = 0; count < exponent; count++) {
			result *= base;
		}
		return result;
	};

	console.log(power(2, 10));


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


const halve = function(n) {
	return n / 2;
  };
  
  let n = 10;
  console.log(halve(100));
  // → 50
  console.log(n);
  // → 10

  