const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    if (numero <= 3) {
        return true;
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= numero; i = i + 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

rl.question("Digite um número inteiro positivo: ", function (numero) {
    numero = parseInt(numero);
    if (ehPrimo(numero)) {
        console.log(numero + " é um número primo.");
    } else {
        console.log(numero + " não é um número primo.");
    }
    rl.close();
});
