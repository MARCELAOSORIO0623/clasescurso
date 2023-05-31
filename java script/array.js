// lista de compras

var listaDeCompras = [];
listaDeCompras[0] = 'Tomates';
listaDeCompras[1] = 'lechuga';
console.log(listaDeCompras);

//ver lista de compras
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

// largo
var nombres = ['mat', 'mari'].length;
console.log(nombres);

//metodos de los array
var colores = ['azul', 'verde'];
colores.push('rojo');   // agrehga al final del array
console.log(colores);
colores.unshift('blanco');  //agrega al inicio del array
console.log(colores);
colores.pop();  // borra la ultima posicion
console.log(colores);
colores.shift();  //borra la prmera posicion
console.log(colores);

//metodo includes  // verificar si un arreglo incluye un elemento, true o false
var pintores = ['picasso', 'van gogh', 'dali'];
var incluyedali = pintores.includes('monet');  
console.log(incluyedali);


//metodo every   verifica si todos los elementos cumplen con una condicion
var numeros = [7, 6, 8, 9];
var cumplencondicion = numeros.every((num) => {
    return num > 5;
});
console.log(cumplencondicion);


//metodo split   separa transforma strings en arreglos
var palabra = 'henri'; // corregir la ultima letra a y
var palabraseparada = palabra.split('');  //separamos las letras de la palabra
palabraseparada.pop(); //quito ultimo elemento del arreglo
palabraseparada.push('y'); //agrego elemento al final
console.log(palabraseparada);

//metodo join  une   transforma strings en arreglos
var palabraunir = palabraseparada.join('');  //reunifica los elementos
console.log(palabraunir);  

//metodo forEach   imprime cada uno de los elementos independientemente recorre los elementos
var  numeros = [1, 2, 3, 4];
numeros.forEach((num) => console.log(num)); 
numeros.forEach((num) => {if(num >= 3) {  // busca e imprime un elemento 
    console.log(num)}}); 

//metodo map   modifica elementos del arreglo  recorre los elementos y modifica
var masuno = numeros.map((num) => { // le sumo 1 a todos los elementos del arreglo
    return num + 1;
});
console.log(masuno);

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var cumplencondicion = array.filter((num) => {   
      return num > 18;
});
console.log(cumplencondicion.length);
return cumplencondicion.length;
}
array = [7, 6, 23, 19];
cuentoElementos(array);

// ciclos con arrays
function encontrarletP(string) {
    var letras = string.split('');
    for(let i = 0; i < letras.length; i++) {
        if(letras[i] == 'p') {
            console.log('si contiene la P')
        }
    }
    console.log('no contiene la p');
}
encontrarletP('cami');

var arr = [];
while (arr.length < 5) {
    arr.push('cami');
}
console.log(arr);
