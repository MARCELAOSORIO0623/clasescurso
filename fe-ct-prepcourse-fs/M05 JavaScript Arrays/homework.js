/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
 console.log(array[0]);
 return array[0];
}
var array = [1, 2, 3, 4];
devolverPrimerElemento('love');

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var ultimo = array[3];
   console.log(ultimo);
   return ultimo;
  }
  var array = [1, 2, 3, 4];
  devolverUltimoElemento(array);

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   console.log(array.length);
   return array.length;
}
var array = [1, 2, 3, 4];
obtenerLargoDelArray(array);

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masuno = array.map((num) => {
      return num + 1;
  });
  console.log(masuno);
}
var array = [1, 2, 3, 4];
incrementarPorUno(array);

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(5);
   console.log(array);
   return array;
}
var array = [1, 2, 3, 4];
agregarItemAlFinalDelArray(array);

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(0);
   console.log(array);
   return array;
}
var array = [1, 2, 3, 4];
agregarItemAlComienzoDelArray(array);

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   console.log(palabras.split(' '));
   return palabras.split(' ');
}
var palabras = 'camilo marce!';
dePalabrasAFrase(palabras);

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   array.forEach(num => {
      if(num === elemento) {
         console.log(true);
         return true;
      }
      console.log(false);
      return false;
   });
}
var array = [1, 2, 3, 4];
var elemento = 2;
arrayContiene(array, elemento);

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var sumatodos = 0;
   for(let i = 0; i < arrayOfNums.length; i++) {
      sumatodos += arrayOfNums[i];
  }
  console.log(sumatodos);
  return sumatodos;
}
var arrayOfNums = [1, 2, 3, 4];
agregarNumeros(arrayOfNums);

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var sumatodos = 0;
   for(let i = 0; i < resultadosTest.length; i++) {
      sumatodos += resultadosTest[i];
      var prom = sumatodos / resultadosTest.length;
  }
  console.log(prom);
  return prom;
}
var resultadosTest = [1, 2, 3, 4];
promedioResultadosTest(resultadosTest);

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let maxNum = arrayOfNums[0]; 
   for(let i = 0; i < arrayOfNums.length; i++) {
     if(arrayOfNums[i] > maxNum) {
       maxNum = arrayOfNums[i];
     }
  }
  console.log(maxNum);
  return maxNum;
}
arrayOfNums = [1, 3, 8, 7];
numeroMasGrande(arrayOfNums);

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var multp = 1;
   for(let i = 0; i < arguments.length; i++) {
      multp = multp * arguments[i];
  }
  console.log(multp);
  return multp;
}
multiplicarArgumentos(1, 2, 3);

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

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   
      if(numeroDeDia === 6 || numeroDeDia === 7) {
         console.log('es fin de semana');
         return 'es fin de semana';
      }
      else {
         console.log('es dia de semana');
         return 'es fin de semana';
      }
  }
diaDeLaSemana(5);

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var digitos = Array.from(String(num), Number)
   if (digitos[0] === 9) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }
empiezaConNueve(784);

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for (var i = 1; i < array.length; i++) {
      if (array[i] !== array[0]) {
        console.log(false);
        return false;
      }
    }
    
    console.log(true);
    return true;
}
array = [1, 2, 1, 1];
todosIguales(array);

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var meses = [];
   for(var i = 0; i < array.length; i++) {
   if(array[i] === 'enero' || array[i] === 'marzo' || array[i] === 'noviembre') {
      meses.push(array[i]);
   }
}
if (meses.length === 3) {
   console.log(meses);
   return meses;
 } else {
   console.log('No se encontraron los meses pedidos');
   return 'No se encontraron los meses pedidos';
 }
}
array = ['enero', 'febreo', 'marzo'];
mesesDelAño(array);

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla = [];
   for (var i = 0; i <= 10; i++) {
     tabla.push(6 * i);
   }
   console.log(tabla);
   return tabla;
 }
 
 tablaDelSeis();

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
var mayores = [];
for(var i= 0; i <= array.length; i++) {
   if(array[i] > 100) {
      mayores.push(array[i]);
   }
}
console.log(mayores);
}
array = [9, 206, 20, 150, 188, 190, 3, 230];
mayorACien(array);

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var newArray = [];
   var i = 0;
 
   while (i < 10) {
     switch (true) {
       case num === i:
         console.log("Se interrumpió la ejecución");
         return "Se interrumpió la ejecución";
 
       default:
         num = num + 2;
         newArray.push(num);
         i++;
     }
   }
 
   console.log(newArray);
   return newArray;
 }
 
 breakStatement(3);
  
function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var newArray = [];

   for (var i = 0; i < 10; i++) {
     if (i === 5) {
       continue; // Aquí se utiliza la instrucción 'continue' para saltar a la siguiente iteración sin ejecutar el código restante
     }
 
     num = num + 2;
     newArray.push(num);
   }
 
   console.log(newArray);
   return newArray;
 }
 
 continueStatement(3);


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
