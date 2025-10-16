export class Distancia {


  public static calcular(x1: number, y1: number, x2: number, y2: number): number {
    const diferenciaX = x2 - x1;
    const diferenciaY = y2 - y1;
    
    const resultado = Math.sqrt(Math.pow(diferenciaX, 2) + Math.pow(diferenciaY, 2));
    
    return resultado;
  }
}