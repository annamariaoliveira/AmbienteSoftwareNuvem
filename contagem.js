const readlineSync = require('readline-sync');

class Contagem {
    constructor() {
        this.n = 0;
        this.nota = 0;
        this.cont = 0;
        this.i = 0;
    }

    iniciarContagem() {
        console.log("Quantidade de Alunos: ");
        this.n = parseInt(readlineSync.question());

        while (this.i < this.n) {
            this.i = this.i + 1;
            console.log("Nota do Aluno: " + this.i);
            this.nota = parseInt(readlineSync.question());

            if (this.nota < 50) {
                this.cont = this.cont + 1;
            }
        }

        console.log("São " + this.n + " alunos");
        console.log("São " + this.cont + " aprovados");
    }
}

const contador = new Contagem();
contador.iniciarContagem();
