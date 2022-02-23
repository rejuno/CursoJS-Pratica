let valores = [0, 1, 4, 2, 9]
valores.sort()
/*for(let pos=0;pos<valores.length;pos++){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}
*/

//utilizando FOR IN
    for(let pos in valores ){
        console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
        
    }