let num = [5, 8, 2, 9, 3]
num[3]=6
num.push(7)

console.log(`Nosso vetor e o ${num}`)

console.log(`A quantidade dos valores da array e: ${num.length}`)

console.log(`Na oredem crescente fica: ${num.sort()}`)

console.log(`Na primeira posicao esta o numero: ${num[0]}`)

let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor nao foi encontrado!')

}else{
    console.log(`O valor 8 esta na posicao ${pos} `)
}


