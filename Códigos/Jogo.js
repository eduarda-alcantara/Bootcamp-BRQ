var select;
var numero;

// Usando o Nick e a Opção desejada
var botao1 = document.getElementById('botaoComecar');
botao1.addEventListener('click', function () {
    var input = document.querySelector('#digitacao').value;
    console.log('Nick:', input)

    var mensagem = document.querySelector('#BoasVindas').innerHTML = ("Olá "+input+ ", vamos jogar!");

    select = document.getElementById('opcoes').value;
    console.log(select);

    if (select === 'Opção 1') {
        numero = Math.floor(Math.random() * 10) + 1
    }
    else if (select === 'Opção 2') {0
        numero = Math.floor(Math.random() * 100) + 1
    }
    else if (select === 'Opção 3') {
        numero = Math.floor(Math.random() * 200) + 1
    }
    console.log('Nº sorteado:', numero);
})

//Jogo
var tentativa=3;
var chute;

function instrucao(dicas) {
    document.querySelector('#resultado').innerHTML = dicas;
}

var botao2 = document.getElementById('botaoJogar');
    botao2.addEventListener('click', function () {
        if ((tentativa <= 3) && (tentativa >= 1)) {
            chute = document.querySelector('#numeroDigitado').value;
            if (chute == numero) {
                instrucao("Parabéns você acertou!!!");
                document.getElementById("h3Esq").style.display = "none";
                document.getElementById("numeroDigitado").style.display = "none";
                document.getElementById("tentativas").style.display = "none";
                document.querySelector('#fimJogo').innerHTML = "Para jogar novamente recarregue a página!";
            }
            else if (chute < numero) {
                instrucao("Seu número é pequeno demais!");
            }
            else {
                instrucao("Seu número é alto demais!");
            }
            document.querySelector('#numeroDigitado').value = "";
            tentativa--;
            if (tentativa == 0) {
                instrucao("");
                document.querySelector('#tentativas').innerHTML = "";
                document.getElementById("h3Esq").style.display = "none";
                document.getElementById("numeroDigitado").style.display = "none";
                document.querySelector('#fimJogo').innerHTML = "Suas tentativas acabaram :( <br />O número sorteado era: " + numero + "<br />Para jogar novamente recarregue a página!";
            } else {
                document.querySelector('#tentativas').innerHTML = "Você tem mais " + tentativa + " tentativa(s)!";
            }
        }
        else {
            instrucao("");
            document.querySelector('#tentativas').innerHTML = "";
            document.getElementById("h3Esq").style.display = "none";
            document.getElementById("numeroDigitado").style.display = "none";
            document.querySelector('#fimJogo').innerHTML = "Suas tentativas acabaram :( <br />O número sorteado era: " + numero + "<br />Para jogar novamente recarregue a página!";
        }
})
