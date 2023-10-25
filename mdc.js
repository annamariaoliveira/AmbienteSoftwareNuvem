const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularMDC(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

rl.question("Digite o primeiro número inteiro: ", function (a) {
    rl.question("Digite o segundo número inteiro: ", function (b) {
        const mdc = calcularMDC(parseInt(a), parseInt(b));
        console.log(`O Máximo Divisor Comum de ${a} e ${b} é: ${mdc}`);
        rl.close();
    });
});


