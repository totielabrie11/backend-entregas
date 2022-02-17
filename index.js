class Persona {

    constructor(nombre, apellido, mascotas, libros) {
    
    this.nombre = nombre
    
    this.apellido = apellido
    
    this.mascotas = mascotas
    
    this.libros = libros
    
    }
    
    getFullName() {
    
    return `${this.nombre} ${this.apellido}`
    
    }
    
    addMascota(mascota) {
    
    this.mascotas.push(mascota)
    
    }
    
    countMascotas() {
    
    return this.mascotas.length
    
    }
    
    addBook(nombre, autor) {
    
    this.libros.push({
    
    nombre,
    
    autor
    
    })
    
    }
    
    getBookNames() {
    
    const nombres = []
    
    for (const libro of this.libros) {
    
    nombres.push(libro.nombre)
    
    }
    
    return nombres
    
    }
}


const p = new Persona('pepa', 'pig', '[pikachu]', '[]')

console.log(p)

const p2 = new Persona('charly', 'martinez', ['alma', 'dalila'], '[el señor de los anillos]')

console.log(p2)

console.log('las cantidades de mascotas de charly son', p2.countMascotas())
