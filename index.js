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
    
    addMascota(nuevaMascota) {
    
    this.mascotas.push(nuevaMascota)
    
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
    
    for (const libros of this.libros) {
    
        nombres.push(libros.nombre)
    
    }
    
    return nombres
    
    }
}

const p2 = new Persona('charly', 'martinez', ['alma', 'dalila'], ['el señor de los anillos'])

console.log(p2)

console.log('el nombre de la persona creada es', p2.getFullName())

p2.addMascota(nuevaMascota = 'pelusa')
console.log(p2)

console.log('las cantidades de mascotas de charly son', p2.countMascotas())

p2.addBook('batallas navales' , 'DE SIMON')
console.log(p2)

console.log(p2.getBookNames()[1])

