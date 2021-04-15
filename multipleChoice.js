// Switch if...
//1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).
const color = "red";
switch (color) {
  case 1:
    console.log("blue");
    break;
  case 2:
    console.log("green");
    break;
  case 3:
    console.log("yellow");
    break;
  case 4:
    console.log("orange");
  default:
    // standard case or backup; should be at the end; no "break;" here!
    console.log("I don't get it! Did you really mean no color?");
}

//2. Grading
//Create a switch statement that prints different comments depending on a grade.
const grade = "Excellent";
switch (grade) {
  case 80:
    console.log("Excellent");
    break;
  case 70:
    console.log("Very good");
    break;
  case 60:
    console.log("Good");
    break;
  case 50:
    console.log("Passed");
    break;
  default:
    console.log("Sorry, it seems you did not sit for the exam!");
}

//3. Fruits
//Create a switch statement that prints different statement for various fruit (e.g. banana, /
const fruit = "kiwi";
switch (fruit) {
  case "oranges":
    console.log("I see oranges");

    break;
  case "apples":
    console.log("apples");
    break;
  case "kiwi":
    console.log("kiwi");
    break;
  default:
    console.log("There are no fruits left!");
}

//4. Percentage Complete.

const percentageComplete = 100;
switch (true) {
  case percentageComplete < 30: //If percentageComplete is below 30,
    console.log("Still a long way to go");

    break;
  case percentageComplete >= 30 && percentageComplete <= 50: //percentageComplete is between 30 and 50
    console.log("Still a long way to go");

    break;
  case percentageComplete >= 51 && percentageComplete <= 80:
    console.log("You can do it!");

    break;
  case percentageComplete >= 81 && percentageComplete <= 99:
    console.log("This is the last push");

    break;
  case percentageComplete === 100:
    console.log("You're there. Well done!");

    break;
  default:
    console.log("Don't worry. Be happy!");
}

// Differences
//When should you use a switch statement versus an if else statement. Comment your answer in your js file.

//ANSWER: Switch statement is preferable when dealing  an operation that emphasizes only equality. But the if else statement evaluates both equality and logical expression.
