function gerarTabuada() {
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Preencha o campo de número.')
    }else{
        var n = Number(num.value)
        tab.innerHTML = '' 
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${c * n}` 
            item.value = `tab${c}`
            tab.appendChild(item)
        }    
    }
}