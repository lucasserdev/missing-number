const button = document.querySelector('button');
const telaInicial = document.querySelector('.container');
const telaJogo = document.querySelector('.window-game');
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const refresh = document.querySelector('.again')

function gerarNumeroAleatorio (a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function criarListaNumeros() {
    const listaNumero = [];
    while (listaNumero.length < 9) {
        for (let i = 0; i < 10; i++){
            let numeroAleatorio = gerarNumeroAleatorio(1, 10);
            if (listaNumero.includes(numeroAleatorio)){
                continue;
            }else {
                listaNumero.push(numeroAleatorio)
            }
        }
    }

    return listaNumero;
}


function mudarTela () {
    telaInicial.style.display = 'none';
    telaJogo.style.display = 'flex';
    let = valor = input.value;
    let numeros = criarListaNumeros();
    for (let c = 0; c < 9; c++) {
        let newLi = document.createElement('li');
        newLi.innerHTML = numeros[c];
        ul.appendChild(newLi);
    }

}

function tentarNumero (e) {
    let valor = input.value;
    let listaUl = []
    if (e.key == 'Enter') {
       for (let i = 0; i < 9; i++) {
        listaUl.push(ul.children[i].textContent);
       }

       if (listaUl.includes(valor) == true) {
            alert(`Errou, Tente novamente! ${valor}`);
            let newLi = document.createElement('li');
            newLi.innerHTML = valor
            newLi.classList.add('red')
            ul.appendChild(newLi)
        } else {
            alert(`Parabens, acertou! ${valor}`)
            let newLi = document.createElement('li');
            newLi.innerHTML = valor
            newLi.classList.add('verde')
            ul.appendChild(newLi)
        }
    }
}

function reaload() {
    location.reload();
}

button.addEventListener('click', mudarTela);
input.addEventListener('keyup', tentarNumero);
refresh.addEventListener('click', reaload);