let valores = [8, 4, 9, 3, 7, 1]

for(let pos=0;pos<valores.length;pos++){
    console.log(`Vetor ${pos+1} = ${valores[pos]}`)
}

for(let pos in valores){
    console.log(`Vetor = ${valores[pos]}`)
}

console.log(`A cahve do vetor que contém o número 9 é ${(valores.indexOf(9))+1}`)

pos = valores.indexOf(6)

if (pos==-1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}