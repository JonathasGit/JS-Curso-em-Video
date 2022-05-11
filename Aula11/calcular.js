function calcular(){
    var txtv = document.querySelector('input#txtvel');
    var res = document.querySelector('div#res');
    var vel = Number(txtv.value);
    res.innerHTML = '<p>' + 'Sua velocidade é de ' +  '<b>' + vel + '</b>' + 'Km/h' + '</p>'; 
    if (vel > 60){
        res.innerHTML += 'Você está ' + '<b>' +  'MULTADO,' + '</b>' + 'velocidade alta';
    }
    res.innerHTML += '<p>' + 'Dirija sempre com o cinto de segurança' + '</p>';
}