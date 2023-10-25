import java.util.Scanner;

public class Contagem {
    public static void main(String[] args) {
        Scanner prompt = new Scanner(System.in);
        int i = 0; // Inicialize i com 0
        int n, nota, cont = 0; // Inicialize cont com 0

        System.out.println("Quantidade de Alunos: ");
        n = prompt.nextInt();

        while (i < n) {
            i = i + 1;
            System.out.println("Nota do Aluno " + i + ":");
            nota = prompt.nextInt();

            if (nota >= 50) {
                cont = cont + 1; // Incrementa cont quando a nota é maior ou igual a 50
            }
        }

        System.out.println("São " + n + " alunos");
        System.out.println("São " + cont + " aprovados");
        prompt.close(); // Feche o Scanner quando não for mais necessário
    }
}
