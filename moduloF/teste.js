
function parimp(n) {
    if (n%2==0) {
        return 'par'
    }else{
        return 'ímpar'
    }
}

function verificar() {
    let num = document.querySelector('input#txtnum')
    let res = document.querySelector('div#result')
    if (num.value.length == 0) {
         res.innerHTML = 'Digite um número!'
    }else{
        num = Number(num.value)
        res.innerHTML = `<p>O número ${num} é ${parimp(num)}`
 }
}

//let res = parimp(11)
console.log(res)