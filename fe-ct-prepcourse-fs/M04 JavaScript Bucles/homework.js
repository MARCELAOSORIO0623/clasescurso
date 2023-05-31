/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   if(x < y) {
      console.log(y);
      return y;
      }
   else {
      if(x === y) {
         console.log(x);
         return y;
      }
      else {
         console.log(x);
         return x;
      }
   }
}
obtenerMayor(5, 5);

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   if(edad >= 18) {
   console.log('allowed');
   return 'allowed';
   }
   else {
      console.log('not allowed');
      return 'not allowed';
   }
}
mayoriaDeEdad(14);

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código: 
   if(status === 1) {
      console.log('This is blue!');
      return 'This is blue!';
   }
   else {
      if(status ===2) {
         console.log('This is orange');
         return 'This is orange';
      }
      else {
         console.log('el usuario esta offline');
         return 'el usuario esta offline';
      }
   }
}
conection();

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "This is blue!".
   // Si "idioma" es "mandarin", devuelve "This is orange!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   if(idioma === 'aleman') {
      console.log('This is blue!');
      return 'This is blue!';
   }
   else {
      if(idioma === 'mandarin') {
         console.log('This is orange');
         return 'This is orange';
      }
      else {
         console.log('hola');
         return 'hola';
      }
   }
}
saludo('dfsd');

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is orange".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   if(color === 'blue') {
      console.log('This is blue!');
      return 'This is blue!';
   }
   else {
      if(color === 'red') {
         console.log('This is red');
         return 'This is red';
      }
      else {  
         if(color === 'orange') {
         console.log('This is orange');
         return 'This is orange';
      }
      else {
         console.log('color not found');
         return 'color not found';
      }
      }
   }
}
colors('blue');

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   if(num === 10 || num === 5) {
      console.log(true);
      return true;
   }
   else {
      console.log(false);
      return false;
   }
}
esDiezOCinco(7);

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   if(num < 50 && num > 20) {
      console.log(true);
      return true;
   }
   else {
      console.log(false);
      return false;
   }
}
estaEnRango(45);

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   if(num >= 0 || num <= 0) {
      if (Number.isInteger(num)) {
        console.log(true);
        return true;  
      }
      else {
         console.log(false);
         return false;
      }
   }
 }
esEntero(0.89);

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   if(num % 3 == 0 && num % 5 == 0) {
      console.log("fizzbuzz");
      return "fizzbuzz";
   }
   else {
      if(num % 3 == 0) {
         console.log("fizz");
         return "fizz";
      }
      else {
         if(num % 5 == 0) {
            console.log("buzz");
            return "buzz";
         }
         else {
            console.log(false);
            return false;
         }
      }
   }
   }
   fizzBuzz(25);

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
if(num1 > num2 && num1> num3 && num1 != 0) {
   if(num1 > 0 && num2 > 0 && num3 > 0) {
      console.log('el numero 1 es mayor y es positivo');
      return 'el numero 1 es mayor y es positivo';
   }
   else {
      console.log('hay negativos');
   }
 }
else {
   if(num3 > num1 && num3 > num2) {
      num3 ++;
      console.log(num3);
   }
   else {
      if(num1 == 0 && num2 == 0 && num3 == 0) {
         console.log('Error');
      }
      console.log(false);
      return false;
   }
}
}
operadoresLogicos(8, 9, 3);

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   if(num > 1) {
      for (var i = 2; i <= num; i++){
         if(num % i == 0) {
            console.log(false);
            return false;
          }
          else {
            console.log(num + ' es primo');
            return num + ' es primo';
          }
      }
   }
   else {
      console.log(false);
      return false;
   }
   }
esPrimo(5);

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   if(valor == true) {
      console.log('soy verdadero');
      return 'soy verdadero';
   }
   else {
      if(valor == false) {
         console.log('es falso');
         return 'es falso'; 
      }
      else {
         console.log('undefined');
         return 'undefined';
      }
   }
}
esVerdadero(false);

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   if(num >= 100 && num <= 999) {
      console.log(true);
      return true; 
   }
   else {
      console.log(false);
      return false;
   }
}
tieneTresDigitos(88);

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   var i = 0;
   do {
      i = i + 1;
      num = num + 5;
   }while (i < 8);
   console.log(num);
   }
   doWhile(1);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
