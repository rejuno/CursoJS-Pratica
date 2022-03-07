const kelvin = 0;
//criou essa variavel para armazenar o valor constante de kelvin
const celsius = kelvin - 273; 
// para chegar ao resultado de celsius, precisa subtrair o resultado do kelvin com 273.
var fahrenheit = Math.floor(celsius *(9/5) + 32);
// equacao para descobrir o valor em Fahrenheit, colocar em var para permitir a mudanca do valor dessa variavel
//foi colocado o Math.floor para arredondar pra baixo o numero
var newton = Math.floor(celsius * (33/100));
console.log(`The temperaturre is ${newton} degrees Newton`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);


//feito no codecademy
