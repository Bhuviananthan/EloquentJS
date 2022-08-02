// A fragment of code that produces a value is called an expression.
/* An expression between parentheses is also an expression.
   To catch and hold values, JavaScript provides a thing called a binding, or variable.
*/
let caught = 5*5; //let is the keyword which is going to define a binding.
console.log(caught);
/* It is followed by the name of
the binding and, if we want to immediately give it a value, by an = operator
and an expression.
The previous statement creates a binding called caught and uses it to grab
hold of the number that is produced by multiplying 5 by 5. 
After a binding has been defined, its name can be used as an expression. The
value of such an expression is the value the binding currently holds. Here’s an
example:
*/
let ten = 10;
console.log(ten*ten);



