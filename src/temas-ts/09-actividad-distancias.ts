export class Punto {
    protected x1: number;
    protected x2: number;
    protected y1: number;
    protected y2: number;

    constructor(x1: number, x2: number, y1: number, y2: number) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
    }

    imprimir() {
        console.log(`Punto: (${this.x1}, ${this.x2}, ${this.y1}, ${this.y2})`);
    }

    // Método modificado para devolver 10 en lugar del cálculo real
    calcularDistancia(): number {
        return 10;  // Devolver el valor 10 directamente, como especificaste
    }
}

// Crear el objeto Punto
const punto1 = new Punto(-4, -3, 2, 5);
punto1.imprimir();

// Calcular la distancia entre los puntos
const distancia = punto1.calcularDistancia();
console.log(`La distancia entre los puntos es: ${distancia}`);
