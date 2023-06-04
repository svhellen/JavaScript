let num = [5, 8, 2, 9, 3]
//add um valor na vaga 5
num[5] = 6
console.log(`Nosso vetor é o ${num}.`)

//use num.push() para adicionar valor na ultima vaga mesmo sem saber qual é
num.push(7)

//use num.length pra saber o comprimento do vetor
console.log(`O nosso vetor tem ${num.length} elementos.`)

//use num.sort() para colocar os elementos em ordem crescente
console.log(`Usando o comando num.sort(): ${num.sort()}`)
console.log(`Nosso vetor é o ${num}.`)

console.log('For padrão:')
for (let i = 0; i < num.length; i++) {
    console.log(`Vaga ${i}: ${num[i]}`)
}

//essa forma só funciona pra arrays e objectos (sao a mesma coisa pq arrays sao objetos)
console.log('For simplificado:')
for (let i in num) {
    console.log(`Vaga ${i}: ${num[i]}`)
}

//use num.indexOf() pra procurar um valor dentro do vetor, ele vai retornar a key do valor
console.log(`Se encontrar o valor procurado vai retornar a key, caso contrário vai retornar "-1"`)
console.log(`num.indexOf(7)  ===== ${num.indexOf(7)}`)
console.log(`num.indexOf(4)  ===== ${num.indexOf(4)}`)

//um for pra procurar valores de 0 a 10 na array/vetor
for (let i = 0; i < 10; i++) {
    let pos = num.indexOf(i)
    if (pos == -1) {
        console.log(`O valor ${i} não foi encontrado!`)
    }else{
        console.log(`O valor ${i} está na posição ${pos}`)
    }
}
