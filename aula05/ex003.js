//node.js
var s = "JavaScript"
//undefined
"Eu estou estudando "+ s
//'Eu estou estudando JavaScript'

//---------------------------------

nome = "Gustavo"
//'Gustavo'
idade = 41
//41
nota = 5.5
//5.5
nome
//'Gustavo'
idade
//41
nota
//5.5
"O aluno " + nome + " com "+ idade + " anos " + "tirou " + nota
//'O aluno Gustavo com 41 anos tirou 5.5'

//modo mais facil de fazer o que foi escrito anteriormente
//seu nome e Template Strings e utiliza crase 
//${} - place holder (? ingles horrivel)

`O aluno ${nome} com ${idade} anos tirou a nota ${nota}` //o codigo fica menor
//'O aluno Gustavo com 41 anos tirou a nota 5.5'
