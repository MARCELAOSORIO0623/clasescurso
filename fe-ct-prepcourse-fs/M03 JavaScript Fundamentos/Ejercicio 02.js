/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   var Name = string;
   console.log(Name);
   return Name;
   }
   devolverString('camilo');

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   Suma = x + y;
   console.log(Suma);
   return Suma;
 }
 suma(3, 9);

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   Resta = x - y;
   console.log(Resta);
   return Resta;
 }
 resta(9, 3);


function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   dividir = x / y;
   console.log(dividir);
   return dividir;
   }
   divide(9, 3);

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   mult = x * y;
   console.log(mult);
   return mult;
}
multiplica(9, 3);

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   resto = x % y;
   console.log(resto);
   return resto;
}
obtenerResto(9, 3);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
