class Fibonacci {
    constructor() {
        this.n = 0;
        this.a = 0;
        this.b = 1;
        this.i = 2;
        this.prompt = require('readline-sync');
    }

    sequenciaFibonacci() {
        console.log("Número de termos:");
        this.n = parseInt(this.prompt.question());

        while (this.i < this.n) {
            console.log(this.a + " , " + this.b + " , ");
            this.a = this.a + this.b;
            this.b = this.a + this.b;
            this.i = this.i + 2;
        }

        if (this.i === this.n) {
            console.log(this.a + ", " + this.b);
        } else {
            console.log(this.a);
        }
    }
}

const fibonacci = new Fibonacci();
fibonacci.sequenciaFibonacci();
