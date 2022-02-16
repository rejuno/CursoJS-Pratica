//node.js - operadores 
5 + 2
//7
9%2
//1
9/2
//4.5
5 + 3/2
//6.5

//5 +/ 2
/*   ^

Uncaught SyntaxError: Invalid regular expression: missing /
*/

(5+2)*10
//70
(5+3)/2
//4


//node.js - atribuicao simples
var a = 5 + 3
//undefined
var b = a %5
//undefined
var c = 5*b**2
//undefined
var d= 10-a/2
//undefined
var e = 6*2/d
//undefined
var f = b%e +4/e
//undefined
a
//8
b
//3
c
//45
d
//6
e
//2
f
//3

//node.js - auto atribuicao 
var n = 3 //
//undefined
n=n+4 //modo simplificado  n+=4
//7 --- 3+4
n=n-5 //modo simplificado n-=5
//2 --- 7-5
n=n*4 //modo simplificado n*=4
//8 --- 2*4
n=n/2 //modo simplificado  n/=2
//4 --- 8/2
n=n**2 //modo simplificado n**=2
//16 --- 4**2
n=n%5 //modo simplificado n%=5
//1 --- 16%5


var num = 8
//undefined
num
//8
num +=2
//10
num
//10
num%=2
//0
num
//0
num-=5
//-5
num
//-5
num*=4
//-20
num
//-20
num/=2
//-10
num
//-10
num **=2
100

//node.js - incrementacao 
    //APARECE o resultado DEPOIS
var n = 10
//undefined
n
//10
n++
//10
n
//11

    //APARECE o resultado ANTES
n--
//11
n
//10
++n
//11
--n
//10


