function findSafestPath(dream) {
  const rows = dream.length;
  const cols = dream[0].length;

  // Paso 1: Sumar valores acumulados en la primera fila
  for (let col = 1; col < cols; col++) {
    dream[0][col] += dream[0][col - 1];
  }

  // Paso 2: Sumar valores acumulados en la primera columna
  for (let row = 1; row < rows; row++) {
    dream[row][0] += dream[row - 1][0];
  }

  // Paso 3: Calcular el camino más seguro para el resto de la matriz
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      dream[row][col] += Math.min(
        dream[row - 1][col], // Desde arriba
        dream[row][col - 1]  // Desde la izquierda
      );
    }
  }

  // Paso 4: Retornar el valor acumulado en la última celda
  return dream[rows - 1][cols - 1];
}

 