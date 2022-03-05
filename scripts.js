// criando variáveis globalmente
var comp = []; 
var componentesVazios = 0;

function carregarComponentes() {
    var a1 = document.getElementById('a1');
    var a2 = document.getElementById('a2');
    var a3 = document.getElementById('a3');
    var b1 = document.getElementById('b1');
    var b2 = document.getElementById('b2');
    var b3 = document.getElementById('b3');
    var c1 = document.getElementById('c1');
    var c2 = document.getElementById('c2');
    var c3 = document.getElementById('c3');
    comp = [
        [a1, a2, a3],
        [b1, b2, b3],
        [c1, c2, c3]
    ];
}

var vezJogador1 = true;
function jogada(casa){
    var casa2 = document.getElementById(casa);
    
    if(casa2.innerHTML == ""){
        if(vezJogador1==true){
            casa2.innerHTML = "x";
            vezJogador1 = false
            document.getElementById(casa).style.backgroundColor="red";
            verificar();
        }else{
            casa2.innerHTML = "o";
            vezJogador1 = true
            document.getElementById(casa).style.backgroundColor="green";
            verificar();
        }
    }else{
        return alert("");
    }   
}

function verificar() {
    // Diagonal principal
    if (comp[0][0].innerHTML == comp[1][1].innerHTML & comp[1][1].innerHTML == comp[2][2].innerHTML) {
        if (comp[0][0].innerHTML != '') {
            alert('O jogador '+comp[0][0].innerHTML+' ganhou');            
        }
    }

    // coluna 1
    if (comp[0][0].innerHTML == comp[1][0].innerHTML & comp[1][0].innerHTML == comp[2][0].innerHTML) {
        if (comp[0][0].innerHTML != '') {
            alert('O jogador '+comp[0][0].innerHTML+' ganhou');            
        }
    }

    
    // testar se tem algum componente vazio
    for (let i = 0; i < comp.length; i++) {
        for (let j = 0; j < comp[i].length; j++) {
            if (comp[i][j].innerHTML == '') {
                componentesVazios++;                
            }
            
        }        
    }

    
    if (componentesVazios > 0) { // se tiver componente vazio, o jogo continua
        componentesVazios = 0;
    } else if (componentesVazios == 0) { // senao, mostra "acabou o jogo"
        alert('acabou o jogo!');

        for (let i = 0; i < comp.length; i++) {
            for (let j = 0; j < comp[i].length; j++) {
                // remover os X e as O e remover a cor        
                comp[i][j].innerHTML = '';
                comp[i][j].style.backgroundColor="white";
            }        
        }
    }
    
}

    
    



