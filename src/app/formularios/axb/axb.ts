export class Axb {
 public calcular(numeroA: number, numeroB: number): number {
    let resultado = 0;
    const iteraciones = Math.abs(numeroB);
    let valorASumar = numeroA;

    if (numeroB < 0) {
       valorASumar = -numeroA;
    }

    for (let i = 0; i < iteraciones; i++) {
      resultado = resultado + valorASumar;
    }
    return resultado;
  }
}