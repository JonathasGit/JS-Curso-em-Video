function carregar(){
    var msg = window.document.getElementById('msg');//Para pegar o Elemento HTML da linha 16
    var imagem = window.document.getElementById('imagem'); //Para pegar o Elemento HTML da linha 20 
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = 'Agora são ' + hora +  ' horas.'; 

    //Aqui vamos definir sobre as horas de anhã, tarde e noite.

}
