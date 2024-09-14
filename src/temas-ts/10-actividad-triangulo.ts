import {Punto} from "./09-actividad-distancias";

export class Triangulo extends Punto {
    protected x3: number;
    protected y3: number;

    constructor(x1: number, x2: number, y1: number, y2: number, x3: number, y3: number) {
        super(x1, x2, y1, y2);
        this.x3 = x3;
        this.y3 = y3;
    }

    // Método para calcular la distancia entre dos puntos dados por coordenadas
    calcularDistanciaEntreDosPuntos(x1: number, y1: number, x2: number, y2: number): number {
        const dx = x1 - x2;
        const dy = y1 - y2;
        return Math.sqrt(dx * dx + dy * dy);
    }

    // calcular las tres distancias
    calcularDistancias(): { d1: number, d2: number, d3: number } {
        const d1 = this.calcularDistanciaEntreDosPuntos(this.x1, this.y1, this.x2, this.y2);  // Distancia entre (x1, y1) y (x2, y2)
        const d2 = this.calcularDistanciaEntreDosPuntos(this.x2, this.y2, this.x3, this.y3);  // Distancia entre (x2, y2) y (x3, y3)
        const d3 = this.calcularDistanciaEntreDosPuntos(this.x3, this.y3, this.x1, this.y1);  // Distancia entre (x3, y3) y (x1, y1)
        return { d1, d2, d3 };
    }

    // verificar si los puntos forman un triángulo
    esTriangulo(): boolean {
        const { d1, d2, d3 } = this.calcularDistancias();
        // Verificar si es triángulo
        return (d1 + d2 > d3 && d2 + d3 > d1 && d1 + d3 > d2);
    }

    // Imprimir las distancias y verificar si es un triángulo
    imprimirResultado() {
        const { d1, d2, d3 } = this.calcularDistancias();
        console.log(`Distancia entre Punto 1 y Punto 2: ${d1}`);
        console.log(`Distancia entre Punto 2 y Punto 3: ${d2}`);
        console.log(`Distancia entre Punto 3 y Punto 1: ${d3}`);

        if (this.esTriangulo()) {
            console.log('Los puntos forman un triángulo');
        } else {
            console.log('Los puntos no forman un triángulo');
        }
    }
}

// Crear el objeto Triangulo con tres puntos (x1, y1), (x2, y2), y (x3, y3)
const triangulo = new Triangulo(-4, -3, 2, 5, 6, 10);

// Calcular distancias y verificar si forman un triángulo
triangulo.imprimirResultado();
