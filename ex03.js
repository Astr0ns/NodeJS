const readline = require('readline-sync')

const altura = readline.question('Digite altura: ')
const sexo = readline.question('Digite o sexo(F/M):').toUpperCase()
let pesoideal

if (sex === "M" ){
    pideal = (72.7 * hei) - 58;
    console.log(`O seu peso ideal é de ${pesoideal.toFixed(2)}`)
}else if(sex === "F" ){
    pideal = (62.1 * hei) - 44.7;
    console.log(`O seu peso ideal é de ${pesoideal.toFixed(2)}`)
}else{
    return 'Sexo inválido. Digite (F) para feminino, ou (M) para masculino!';
}

