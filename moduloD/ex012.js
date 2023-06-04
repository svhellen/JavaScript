var idade = 24
if (idade < 4) {
    console.log(`Bebê.`)
}else{
    if (idade < 11 ) {
        console.log(`Criança.`)
    }else{
        if (idade < 14) {
            console.log(`Pré-adolescente.`)
        }else{
            if (idade < 18) {
                console.log(`Adolescente.`)
            }else{
                if (idade < 25) {
                    console.log(`Jovem-adulto.`)
                }else{
                    if (idade < 65) {
                        console.log(`Adulto.`)
                    }else{
                        console.log(`Idoso.`)
                    }
                }
            }
        }
    }
}