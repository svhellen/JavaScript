function verificar() {
    var data = new Date()
    var ano = data.getFullYear()  
    var fnasc = window.document.getElementById('txtnasc')
    var res = window.document.querySelector('div#result')
    if (fnasc.value.length == 0 || Number(fnasc.value) > ano) {
        window.alert('Verifique os dados e tente novamente.')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fnasc.value)
        //adiciona o elemento 'img'
        var img = document.createElement('img')
        //adiciona o id 'photo' no img
        img.setAttribute('id', 'photo')
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                //criança
                //designa o caminho do arquivo pro elemento img usando js
                img.setAttribute('src', 'images/male-kid.jpg')
            }else if (idade <= 17 ) {
                //adolescente
                img.setAttribute('src', 'images/male-teen.jpg')
            }else if (idade <= 35) {
                //jovem-adulto
                img.setAttribute('src', 'images/male-young-adult.jpg')
            }else if (idade <= 59) {
                //adulto
                img.setAttribute('src', 'images/male-adult.jpg')
            }else if (idade <= 130) {
                //idoso
                img.setAttribute('src', 'images/male-old.jpg')
            }else{
                window.alert('Idade inválida!')
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                //criança
                img.setAttribute('src', 'images/female-kid.jpg')
            }else if (idade <= 17 ) {
                //adolescente
                img.setAttribute('src', 'images/female-teen.jpg')
            }else if (idade <= 35) {
                //jovem-adulto
                img.setAttribute('src', 'images/female-young-adult.jpg')
            }else if (idade <= 59) {
                //adulto
                img.setAttribute('src', 'images/female-adult.jpg')
            }else if (idade <= 130) {
                //idoso
                img.setAttribute('src', 'images/female-old.jpg')
            }else{
                window.alert('Idade inválida!')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        //mostra o elemento img na tela
        res.appendChild(img)
    }


}