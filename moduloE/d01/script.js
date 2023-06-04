function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('result')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `<p>Preencha todos os campos de dados.</p>`      
    }else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido. Considerando passo 1.')
            p = 1
        }
        res.innerHTML = `<p>Contando:</p>`
        if (i < f) {
            //contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} &#x1F449; `
            }
            
        }else{
            //contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} &#x1F449; `
            } 
        }
      res.innerHTML += ` \u{1F3C1} `
    }  
}