import java.util.Scanner;

public class MaximoDivisorComum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite o primeiro número inteiro: ");
        int a = scanner.nextInt();
        
        System.out.print("Digite o segundo número inteiro: ");
        int b = scanner.nextInt();
        
        int mdc = calcularMDC(a, b);
        
        System.out.println("O Máximo Divisor Comum de " + a + " e " + b + " é: " + mdc);
        
        scanner.close();
    }
    
    // Função para calcular o MDC usando o algoritmo de Euclides
    public static int calcularMDC(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
