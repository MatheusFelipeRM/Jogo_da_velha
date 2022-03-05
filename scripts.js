// criando variáveis globalmente
var comp = []; //Aqui eu criei um vetor para abrigar cada div a1, a2, a3, ...;
var componentesVazios = 0;

function carregarComponentes() {//criei uma função
    /*cada variavel dessas ira receber o valor de cada dive que elas representam */
    var a1 = document.getElementById('a1');
    var a2 = document.getElementById('a2');
    var a3 = document.getElementById('a3');
    var b1 = document.getElementById('b1');
    var b2 = document.getElementById('b2');
    var b3 = document.getElementById('b3');
    var c1 = document.getElementById('c1');
    var c2 = document.getElementById('c2');
    var c3 = document.getElementById('c3');
    /*Aqui eum crie uma matriz eu fiz isso colocando arrays dentro de arrays,
      com tres linhas e tres coluna, para receber os valores das variaveis acima em seu 
      respectivos lugares
    */
    comp = [
        [a1, a2, a3],//primeira linha
        [b1, b2, b3],//segunda linha
        [c1, c2, c3]//terceira linha
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
            alert('O jogador '+comp[0][0].innerHTML+' ganhou!');  
            if (componentesVazios > 0) { // se tiver componente vazio, o jogo continua
                componentesVazios = 0;
            } else if (componentesVazios == 0) { // senao, mostra "acabou o jogo"
                alert('acabou o jogo, vamos reinicializar!!!!');
        
                for (let i = 0; i < comp.length; i++) {
                    for (let j = 0; j < comp[i].length; j++) {
                        // remover os X e as O e remover a cor        
                        comp[i][j].innerHTML = '';
                        comp[i][j].style.backgroundColor="white";
                    }        
                }
            }          
        }
        
    }


     // diagonal secundaria
     if (comp[1][1].innerHTML == comp[3][0].innerHTML & comp[1][1].innerHTML == comp[0][2].innerHTML) {
        if (comp[1][1].innerHTML != '') {
            alert('O jogador '+comp[1][1].innerHTML+' ganhou!');  
            if (componentesVazios > 0) { // se tiver componente vazio, o jogo continua
                componentesVazios = 0;
            } else if (componentesVazios == 0) { // senao, mostra "acabou o jogo"
                alert('acabou o jogo, vamos reinicializar!!!!');
        
                for (let i = 0; i < comp.length; i++) {
                    for (let j = 0; j < comp[i].length; j++) {
                        // remover os X e as O e remover a cor        
                        comp[i][j].innerHTML = '';
                        comp[i][j].style.backgroundColor="white";
                    }        
                }
            }             
        }
    }

    // coluna 1
    if (comp[0][0].innerHTML == comp[1][0].innerHTML & comp[1][0].innerHTML == comp[2][0].innerHTML) {
        if (comp[0][0].innerHTML != '') {
            alert('O jogador '+comp[0][0].innerHTML+' ganhou!');  
            if (componentesVazios > 0) { // se tiver componente vazio, o jogo continua
                componentesVazios = 0;
            } else if (componentesVazios == 0) { // senao, mostra "acabou o jogo"
                alert('acabou o jogo, vamos reinicializar!!!!');
        
                for (let i = 0; i < comp.length; i++) {
                    for (let j = 0; j < comp[i].length; j++) {
                        // remover os X e as O e remover a cor        
                        comp[i][j].innerHTML = '';
                        comp[i][j].style.backgroundColor="white";
                    }        
                }
            }             
        }
    }


    // coluna 2
    if (comp[1][1].innerHTML == comp[0][1].innerHTML & comp[1][1].innerHTML == comp[2][1].innerHTML) {
        if (comp[1][1].innerHTML != '') {
            alert('O jogador '+comp[1][1].innerHTML+' ganhou!');  
            if (componentesVazios > 0) { // se tiver componente vazio, o jogo continua
                componentesVazios = 0;
            } else if (componentesVazios == 0) { // senao, mostra "acabou o jogo"
                alert('acabou o jogo, vamos reinicializar!!!!');
        
                for (let i = 0; i < comp.length; i++) {
                    for (let j = 0; j < comp[i].length; j++) {
                        // remover os X e as O e remover a cor        
                        comp[i][j].innerHTML = '';
                        comp[i][j].style.backgroundColor="white";
                    }        
                }
            }             
        }
    }

    // coluna 3
    if (comp[2][2].innerHTML == comp[1][2].innerHTML & comp[2][2].innerHTML == comp[0][2].innerHTML) {
        if (comp[2][2].innerHTML != '') {
            alert('O jogador '+comp[2][2].innerHTML+' ganhou!');  
            if (componentesVazios > 0) { // se tiver componente vazio, o jogo continua
                componentesVazios = 0;
            } else if (componentesVazios == 0) { // senao, mostra "acabou o jogo"
                alert('acabou o jogo, vamos reinicializar!!!!');
        
                for (let i = 0; i < comp.length; i++) {
                    for (let j = 0; j < comp[i].length; j++) {
                        // remover os X e as O e remover a cor        
                        comp[i][j].innerHTML = '';
                        comp[i][j].style.backgroundColor="white";
                    }        
                }
            }             
        }
    }

     // linha 1
     if (comp[0][0].innerHTML == comp[0][1].innerHTML & comp[1][1].innerHTML == comp[0][2].innerHTML) {
        if (comp[0][0].innerHTML != '') {
            alert('O jogador '+comp[0][0].innerHTML+' ganhou!');  
            if (componentesVazios > 0) { // se tiver componente vazio, o jogo continua
                componentesVazios = 0;
            } else if (componentesVazios == 0) { // senao, mostra "acabou o jogo"
                alert('acabou o jogo, vamos reinicializar!!!!');
        
                for (let i = 0; i < comp.length; i++) {
                    for (let j = 0; j < comp[i].length; j++) {
                        // remover os X e as O e remover a cor        
                        comp[i][j].innerHTML = '';
                        comp[i][j].style.backgroundColor="white";
                    }        
                }
            }          
        }
        
    }

     // linha 2
     if (comp[1][1].innerHTML == comp[1][2].innerHTML & comp[1][1].innerHTML == comp[1][0].innerHTML) {
        if (comp[1][1].innerHTML != '') {
            alert('O jogador '+comp[1][1].innerHTML+' ganhou!');  
            if (componentesVazios > 0) { // se tiver componente vazio, o jogo continua
                componentesVazios = 0;
            } else if (componentesVazios == 0) { // senao, mostra "acabou o jogo"
                alert('acabou o jogo, vamos reinicializar!!!!');
        
                for (let i = 0; i < comp.length; i++) {
                    for (let j = 0; j < comp[i].length; j++) {
                        // remover os X e as O e remover a cor        
                        comp[i][j].innerHTML = '';
                        comp[i][j].style.backgroundColor="white";
                    }        
                }
            }             
        }
    }

     // linha 3
     if (comp[2][2].innerHTML == comp[2][1].innerHTML & comp[2][2].innerHTML == comp[2][0].innerHTML) {
        if (comp[2][2].innerHTML != '') {
            alert('O jogador '+comp[2][2].innerHTML+' ganhou!');  
            if (componentesVazios > 0) { // se tiver componente vazio, o jogo continua
                componentesVazios = 0;
            } else if (componentesVazios == 0) { // senao, mostra "acabou o jogo"
                alert('acabou o jogo, vamos reinicializar!!!!');
        
                for (let i = 0; i < comp.length; i++) {
                    for (let j = 0; j < comp[i].length; j++) {
                        // remover os X e as O e remover a cor        
                        comp[i][j].innerHTML = '';
                        comp[i][j].style.backgroundColor="white";
                    }        
                }
            }             
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
}
    
    if (componentesVazios > 0) { // se tiver componente vazio, o jogo continua
        componentesVazios = 0;
    } else if (componentesVazios == 0) { // senao, mostra "acabou o jogo"
        alert('acabou o jogo, vamos reinicializar!!!!');

        for (let i = 0; i < comp.length; i++) {
            for (let j = 0; j < comp[i].length; j++) {
                // remover os X e as O e remover a cor        
                comp[i][j].innerHTML = '';
                comp[i][j].style.backgroundColor="white";
            }        
        }
    }
    


    
    



