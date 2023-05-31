/* un objeto es un arreglo donde se guardan datos. a diferencia de las matrices que tienen elementos valorados en indices
los objetos usan un concepto llamado pares de clave:valor*/
/*
var deportes = {
    conbalon: ['football', 'basketball', 'rugby'],
    sinbalon: ['boxeo', 'surf', 'trekking'],
};

var personas = {
    nombre: 'lucas', 
    edad: 26,
    estudios: {esprogramador: true}   /// aca tenemos un objeto dentro de un objeto
};

//acceder
console.log(personas.edad);

//asignar
personas.nombre = 'martin';
console.log(personas.nombre);

//crear
var autos = {};
autos.marcas = ['ford', 'audi', 'ferrari'];
console.log(autos);


//borrar
delete autos.marcas;
console.log(autos);

//objeto  
var atuendos = {
    manos: ['guantes', 'anillos'], //propiedad arreglo
    pies: ['tennis', 'botines'],
}; // se cierran siempre con ;
console.log(atuendos.manos);  // dot-notation notacion por punto

//crear una nueva propiedad para el objeto
atuendos["piernas"] = ['pantaloneta', 'jean'];
console.log(atuendos.piernas);

// break notation tiene una particualridad q no tiene dot
var comidas = {};
var diferenciadenotaciones = function (propuno, propdos) {
    comidas.propuno = ["frutas", "vegetales"];
   // comidas.propdos = ["hamburguesas", "gaseosa"]; // salida:::> propdos hamburguesas .....
    comidas[propdos] = ["hamburguesas", "gaseosa"];  // salida:::> no saludable hamburguesas....  braket notation, sin comillas es la avriable, con comillas literal lo q se escribe

}
diferenciadenotaciones('saludables', 'no saludables');
console.log(comidas);*/

// metodos de los objetos
//hasOwnProperty   verifica si el on¿bjeto tiene una propiedad especifica, retorna bool 

var libro = {
    nombre: 'xxx',
    autor: 'boges',
    genero: 'policial',
    año: '1990'
};
var tienepropiedad = libro.hasOwnProperty('nombre');
var todaslaspropiedades = Object.keys(libro);  // muestra todas las propiedades
console.log(tienepropiedad, libro.nombre);
console.log(todaslaspropiedades);

// bucle for in para recorrer objetos
/*diferencia entre bucle for i for in:  el for recorre arreglos, elemento por elemento
el for in para recorrer objetos, proppiedad por propiedad*/
var mundo = {
    continentes: 7,
    paises: 195,
    oceanos: 5
};
for(var prop in mundo) {
    console.log('esta es la propiedad ' + prop);
    console.log('este es el valor ' + mundo[prop]);
}

//objeto this    cuando hablamos de este estamos haciendo referencia al contexto
var mascota = {
    animal: 'perro',
    raza: 'pastor aleman',
    amistoso: true,
    dueña: 'astrid marcela',
    info: function() {
        console.log('mi perro es un ' + this.raza);
    },
};
mascota.info();