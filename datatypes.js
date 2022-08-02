let no = 5;
let flo = 986.9;
let name = "Hello";
console.log(no + ' ' +flo + ' ' +name);

var concatExample = "Con" + "cat" + "e" + "nate";

console.log("concatExample");


//Template Literals - Backquoted Strings

// Backtick-quoted strings, usually called template literals, can do a few more
// tricks. Apart from being able to span lines, they can also embed other values.
// `half of 100 is ${100 / 2}`
// When you write something inside ${} in a template literal, its result will be computed, converted to a string, and included at that position. The example
// produces “half of 100 is 50

let tempLiteral = `half of 100 is ${100/2} `;
console.log(tempLiteral);

//Unary Operators (take one value)- example is typeof 
console.log(typeof 4.5);
console.log(typeof "x");

//Binary Operator (take two values)
/*Note: minus operator acts as both unary and binary operator */

console.log(- (10-2));

//Boolean values
    //Comparison

console.log(3>2);
console.log(-3>-2);
console.log(3<2);
console.log(-3<2);
   
    //String can also be compared in the same way
console.log("Aadvark" < "Zoroaster");
console.log("Aadvark" < "zoroaster");
console.log("aadvark" < "Zoroaster");
console.log("aadvark" < "zoroaster");

//When comparing strings, JavaScript goes over the characters from left to right, comparing the Unicode codes one by one.

console.log("Itchy" != "Scratchy");
console.log("Apple" == "Orange");

//There is only one value in JavaScript that is not equal to itself, and that is NaN (“not a number”).

console.log("Hi" +"NaN" == "NaN");
console.log("Hello" +"NaN" === "NaN");

//Logical Operators 

console.log(true && true);
console.log(true && false);
console.log(true || true);
console.log(true || false);
console.log(false && true);
console.log(false && false);
console.log(false || true);
console.log(false || false);

//Ternary or Conditional Operator (operating on three values)

console.log(true ? 1 : 2);
console.log(false ? 1 :2);

/*If the condition is true it returns the first/left side value of colon.
  If the condition is false it returns the second/right side value of colon*/

//Empty values are null and undefined. these two are values but doesn't give a meaningful values.

//Automatic  Type Conversion
console.log( 8 * null);
console.log("5" - 1);
console.log("5" + 1);
console.log("five" * 2);

/*   When an operator is applied to the “wrong” type of value, JavaScript will
quietly convert that value to the type it needs, using a set of rules that often
aren’t what you want or expect. This is called type coercion. The null in the
first expression becomes 0, and the "5" in the second expression becomes 5
(from string to number). Yet in the third expression, + tries string concatenation before numeric addition, so the 1 is converted to "1" (from number to
string)

When something that doesn’t map to a number in an obvious way (such as
"five" or undefined) is converted to a number, you get the value NaN. Further
arithmetic operations on NaN keep producing NaN, so if you find yourself getting
one of those in an unexpected place, look for accidental type conversions.
When comparing values of the same type using ==, the outcome is easy to
predict: you should get true when both values are the same, except in the case
of NaN. But when the types differ, JavaScript uses a complicated and confusing
set of rules to determine what to do. In most cases, it just tries to convert
one of the values to the other value’s type. However, when null or undefined
occurs on either side of the operator, it produces true only if both sides are one
of null or undefined.


*/


console.log(null == undefined);
console.log(null == 0);

//SHORT-CIRCUITING OF LOGICAL OPERATORS

/* The logical operator && and || handles values of different types in a peculiar way. 
    
   || - The || operator, for example, will return the value to its left when that can
be converted to true and will return the value on its right otherwise. This has
the expected effect when the values are Boolean and does something analogous
for values of other types.

*/

console.log(null || "user");
console.log("Agnes" || "user");




