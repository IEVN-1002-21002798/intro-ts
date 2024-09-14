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

class Triangulo extends Punto {
    private puntoB: Punto;
    private puntoC: Punto;

    constructor(puntoA: Punto, puntoB: Punto, puntoC: Punto) {
        super(puntoA.x, puntoA.y); // Heredamos las propiedades de la clase Punto
        this.puntoB = puntoB;
        this.puntoC = puntoC;
    }

    esTriangulo() {
        const ladoA = this.calcularDistancia(this.puntoB);
        const ladoB = this.puntoB.calcularDistancia(this.puntoC);
        const ladoC = this.puntoC.calcularDistancia(this);

        if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
            console.log("Los puntos forman un triángulo.");
        } else {
            console.log("Los puntos no forman un triángulo.");
        }
    }
}

const puntoA = new Punto(0, 0);
const puntoB = new Punto(2, 0);
const puntoC = new Punto(4, 0);

const triangulo = new Triangulo(puntoA, puntoB, puntoC);
triangulo.esTriangulo();
