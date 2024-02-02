/*
Logical operators

Logical operators evaluate a logical expression for truthiness or falseness.

There are three logical operators, shown in Table 5-5.



Table 5-5		Logical Operators
		
Operator	Meaning	Description
		
&&	And	Returns the first operand if it is true. Otherwise, it
		returns the second operand.
		
||	Or	Returns the first operand if it is true. Otherwise, it
		returns the second operand.
		
!	Not	Takes only one operand. Returns false if its oper-
		and can be converted to true. Otherwise, it returns
		false.
		



You can also use the OR operator to set a default value for variables. For example, in the following expression, the value of myVar will be set to the value of x unless x evaluates to a false value (for example, if x hasn’t been defined). Otherwise, it will be set to the default value of 0.


var myVar = x||0;
*/
