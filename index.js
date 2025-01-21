// 1.	What is the result of the following code?
//  	console.log(true && false);
//      Answer : false
// a)	true

// b)	false

// c)	undefined

// d)	null



// 2.	What does the following code output?
// console.log(false || true);
// Answer : ture
// a)	true

// b)	false

// c)	undefined

// d)	null



// 3.	What is the value of result?
// const result = !true;
// console.log(result);
// Answer : false
// a)	true

// b)	false

// c)	undefined

// d)	null


// 4.	What will be logged to the console?
// console.log(10 > 5 && 3 < 4);
// Answer : true
// a)	true

// b)	false

// c)	undefined

// d)	null


// 5.	What will the following code output?
// console.log(5 === 5 || 5 > 10);
// Answer : true
// a)	true

// b)	false

// c)	undefined

// d)	null


// 6.	What is the result of this code?
// const x = false;
// const y = true;
// console.log(x && y || !x);
// Answer : true
// a)	true

// b)	false

// c)	undefined

// d)	null


// 7.	What does this code evaluate to?
// console.log(!!(5 > 3));
// Answer : true
// a)	true

// b)	false

// c)	undefined

// d)	null


// 8.	What will result be?
// const result = false || 0 || "hello";
// console.log(result);
// Answer : "hello"
// a)	false

// b)	0

// c)	"hello"

// d)	undefined


// 9.	What will the following code return?
// console.log(null && "JavaScript");
// Answer : null
// a)	null

// b)	"JavaScript"

// c)	true

// d)	false


// 10.	What does this code output?
// console.log(true || false && false);
// Answer : true
// a)	true

// b)	false

// c)	undefined

// d)	null


// 11.	What is the result of the following expression?
// console.log(!("hello" && 0));
// Answer : true
// a)	true

// b)	false

// c)	null

// d)	undefined


// 12.	What will be logged?
// console.log(10 || 0 && 5);
// Answer : 10
// a)	10

// b)	0

// c)	5

// d)	false


// 13.	What will result be?
// const result = "abc" && "def" || "";     
// console.log(result);
// Answer : def
// a)	"abc"

// b)	"def"

// c)	""

// d)	undefined


// 14.	What does this code evaluate to?
// console.log(3 > 2 && 2 > 4);
// Answer : false
// a)	true

// b)	false

// c)	undefined

// d)	null


// 15.	What will the following code return?
// console.log(false || NaN || undefined);
// Answer : undefined
// a)	false

// b)	NaN

// c)	undefined

// d)	null



// #scenario-based questions

// 1. Eligibility Check
// Write a condition to check if a student is eligible for a scholarship. The criteria are:
// - The student’s grade is A or B.
// - The student’s attendance is above 75%.
// print "Eligible" or "Not Eligible
    // Answer 
    // var grade = "A"; // Example grade
    // var attendance = 80; // Example attendance percentage

    // if ((grade === "A" || grade === "B") && attendance > 75) {
    //     console.log("Eligible");
    // } else {
    //     console.log("Not Eligible");
    // }

// 2. Age Group Classification
// Classify a person based on their age:
// - If the age is less than 13, they are a “Child”.
// - If the age is between 13 and 19 (inclusive), they are a “Teenager”.
// - Otherwise, they are an “Adult”.
    // Answer

    // var age = 15; // Example age

    // if (age < 13) {
    //     console.log("Child");
    // } else if (age >= 13 && age <= 19) {
    //     console.log("Teenager");
    // } else {
    //     console.log("Adult");
    // }

// 3. Login Status
// Check the login status of a user. A user is considered logged in if:
// - isLoggedIn is true.
// - Their session is active (sessionActive is true).
// Use a conditional statements to log "Welcome Back" if the user is logged in and "Please Log In" otherwise.

    // Answer
    //     var isLoggedIn = true; // Example login status
    // var sessionActive = true; // Example session status

    // if (isLoggedIn && sessionActive) {
    //     console.log("Welcome Back");
    // } else {
    //     console.log("Please Log In");
    // }

// 4. Grade Evaluation
// Assign a letter grade based on a student’s score:
// - Scores 90 and above: "A".
// - Scores between 80 and 89: "B".
// - Scores between 70 and 79: "C".
// - Scores below 70: "Fail".
// Use conditional statements to determine the grade.

    // Answer
    // var score = 80; // Example score

    // if (score >= 90) {
    //     console.log("A");
    // } else if (score >= 80) {
    //     console.log("B");
    // } else if (score >= 70) {
    //     console.log("C");
    // } else {
    //     console.log("Fail");
    // }

// 5. Product Discount Validation
// Determine the discount for a product based on the following criteria:
// - If the product price is greater than $100, the discount is 20%.
// - Otherwise, the discount is 10%.
// Use a conditional statements to set the discount percentage.

    // Answer
    // var price = 150;
    // if(price>100){
    //     console.log("discount is 20%");
    // }
    // else{
    //     console.log("discount is 10%");
    // }
