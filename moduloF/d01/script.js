let num = document.querySelector('input#txtnum')
let flista = document.querySelector('select#flista')
let res = document.querySelector('div#result')
let valores = []

function adicionar() {  
    if (num.value.length == 0) {
        window.alert('Digite um número!')
    }else{
        num = Number(num.value)
        valores.push(num)
        let item = document.createElement('option')
        item.text = `${num}`
        item.value = `flista${num}`
        flista.appendChild(item)
    }
}