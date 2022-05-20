var idade = 17
if (idade < 16) {
    console.log( 'Você tem ' + idade + ' anos' + ' Menor de idade = Não vota');
} else if (idade >= 16 && idade < 18 || idade > 65) { // idade maior ou igual a 16 oue idade menor que 18, ou idade maior 65
    console.log('Você tem ' + idade + ' anos' +  ' Voto opcional');

} else if (idade >= 18) {
    console.log('Você tem ' + idade + ' anos' +  ' Maior de idade = Vota');
}


