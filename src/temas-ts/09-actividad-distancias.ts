class Punto {
    protected x: number;
    protected y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    imprimir() {
        console.log(`Punto: (${this.x}, ${this.y})`);
    }

    // Método para calcular la distancia entre este punto y otro punto
    calcularDistancia(otroPunto: Punto): number {
        const dx = this.x - otroPunto.x;
        const dy = this.y - otroPunto.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

const punto1 = new Punto(3, 0);
const punto2 = new Punto(4, 0);

punto1.imprimir();
punto2.imprimir();

const distancia = punto1.calcularDistancia(punto2);
console.log(`La distancia entre los puntos es: ${distancia}`);
