function quickSort(array, inicio, fim) {
    if (inicio < fim) {
        const indicePivot = particionar(array, inicio, fim);
        quickSort(array, inicio, indicePivot - 1);
        quickSort(array, indicePivot + 1, fim);
    }
}

function particionar(array, inicio, fim) {
    const pivot = array[fim];
    let i = inicio - 1;

    for (let j = inicio; j < fim; j++) {
        if (array[j] < pivot) {
            i++;
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    const temp = array[i + 1];
    array[i + 1] = array[fim];
    array[fim] = temp;

    return i + 1;
}

function imprimirArray(array) {
    console.log(array.join(' '));
}

const array = [12, 4, 5, 6, 7, 3, 1, 15];

console.log("Array original:");
imprimirArray(array);

quickSort(array, 0, array.length - 1);

console.log("Array ordenado:");
imprimirArray(array);
