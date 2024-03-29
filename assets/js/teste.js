const ainai = document.querySelector('.ainai');
let listaNumero = []

function gerarNumero (a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function handleClick() {
    let numero = gerarNumero(1, 10);
    if (listaNumero.includes(numero) == true) {
        console.log(`Numero ${numero} ja tem na lista`);
    } else {
        listaNumero.push(numero);
    }
    console.log(listaNumero)
    
}

ainai.addEventListener('click', handleClick);

