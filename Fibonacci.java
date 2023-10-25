import java.util.Scanner;

public class Fibonacci {
    private int n, a = 0, b = 1, i = 2;
    private Scanner prompt = new Scanner(System.in);

    public void sequenciaFibonacci() {
        System.out.println("Número de termos:");
        n = prompt.nextInt();

        while (i < n) {
            System.out.print(a + " , " + b + " , ");
            int temp = a + b;
            a = b;
            b = temp;
            i = i + 2;
        }

        if (i == n) {
            System.out.println(a + ", " + b);
        } else {
            System.out.println(a);
        }
    }

    public static void main(String[] args) {
        Fibonacci fibonacci = new Fibonacci();
        fibonacci.sequenciaFibonacci();
    }
}
