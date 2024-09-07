//Es  una pequeña clase que nos heredara 
interface Alumno{
    nombre: string;
    apellido: string;
    edad: number;
    curso: string;
    direccion?: string;
    //El signo de interrogacion ayuda para darle a entender que algunos lo pueden tenmer y otros no 
}

const alumno:Alumno={
    nombre:"Juan",
    apellido:"Lopez",
    edad:22,
    curso:"Ingles"
}

console.table(alumno)

let mascotas=['perro','Gato','perico'];

console.log(mascotas[0]);
mascotas[1]="Nuevo Gato";//Cambiar combre (remplazar)
mascotas.push('hamster');//Agregar
console.log(mascotas)

let tem:(number|string)[]=[]
tem.push(1);
tem.push('dos');
console.log(tem)
