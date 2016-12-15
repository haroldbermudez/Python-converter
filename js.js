/**
 * Created by harold.bermudez421 on 12/15/16.
 */
import math
    from (random import * or
decimal import *
getcontext().prec = 38

var def = addition(n1, n2);
return n1 + n2
var def = multiplication(n1, n2);
return n1 * n2
var def = subtraction(n1, n2);
return n1 - n2
var def = division(n1, n2);
return n1 / n2
var def = modulus(n1, n2);
return n1 % n2

//#Generate two random numbers:
for (count in range(1, 10));
//#since random returns [0.0, 1.0), use ceil to prevent 0
num1 = Decimal(math.ceil(100 * random()))
num2 = Decimal(math.ceil(100 * random()))
//#num1 = Decimal(100 * random())
//#num2 = Decimal(100 * random())
sm = addition(num1, num2);
prod = multiplication(num1, num2);
dif = subtraction(num1, num2);
quotient = division(num1, num2);
mod = modulus(num1, num2);

document.write("Value A:\t" + str(num1));
document.write("Value B:\t" + str(num2));
document.write("The sum of the two numbers is: " + str(sm));
document.write("The product of the two numbers is: " + str(prod));
document.write("The different of the two numbers is: " + str(dif));
document.write("The quotient of the two numbers is: " + str(quotient));
document.write("The modulus of the two numbers is: " + str(mod));
