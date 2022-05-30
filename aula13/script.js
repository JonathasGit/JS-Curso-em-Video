function carregar(){
    var msg = window.document.getElementById('msg');//Para pegar o Elemento HTML da linha 16
    var imagem = window.document.getElementById('imagem'); //Para pegar o Elemento HTML da linha 20 
    var data = new Date();
    var hora = data.getHours();
   //var hora = 10;
    msg.innerHTML = 'Agora são ' + hora +  ' horas.'; 
    

    //Aqui vamos definir sobre as horas de anhã, tarde e noite.

    if(hora >= 0 && hora < 12){//Se a hora for maior ou igual ou abaixo de meio dia,
        //Bom dia 
        document.getElementById('imagem').src = 'imagens/noite.png'; 

        document.body.style.background = 'red'

    }   else if(hora >= 12 && hora < 18 ){ //Se hora for maior ou igual a 12 ou abaixo de 18, boa tarde 
        //boa tarde
        img.src = 'tarde.png'

    } else {
        //boa noite
        img.src = 'noite.png'
        document.getElementById('imagem').src = 'imagens/noite.png'; 
        
        
    }

}
