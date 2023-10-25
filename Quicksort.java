public class Quicksort {
    public static void main(String[] args) {
        int[] array = { 12, 4, 5, 6, 7, 3, 1, 15 };

        System.out.println("Array original:");
        imprimirArray(array);

        quickSort(array, 0, array.length - 1);

        System.out.println("Array ordenado:");
        imprimirArray(array);
    }

    public static void quickSort(int[] array, int inicio, int fim) {
        if (inicio < fim) {
            int indicePivot = particionar(array, inicio, fim);
            quickSort(array, inicio, indicePivot - 1);
            quickSort(array, indicePivot + 1, fim);
        }
    }

    public static int particionar(int[] array, int inicio, int fim) {
        int pivot = array[fim];
        int i = inicio - 1;

        for (int j = inicio; j < fim; j++) {
            if (array[j] < pivot) {
                i++;
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

        int temp = array[i + 1];
        array[i + 1] = array[fim];
        array[fim] = temp;

        return i + 1;
    }

    public static void imprimirArray(int[] array) {
        for (int num : array) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
