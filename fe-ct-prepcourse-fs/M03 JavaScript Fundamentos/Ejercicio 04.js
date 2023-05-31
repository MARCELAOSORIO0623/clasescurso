/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   var elevar = Math.pow(num, 2);
   console.log(elevar);
   return elevar;
}
elevarAlCuadrado(4);

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   var elevar = Math.pow(num, 3);
   console.log(elevar);
   return elevar;
}
elevarAlCubo(2);


function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   var Elevar = Math.pow(num, exponent);
   console.log(Elevar);
   return Elevar;
}
elevar(4, 2);


function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   var random = Math.round(num);
   console.log(random);
   return random;
}
redondearNumero(0,48);

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   var random = Math.floor(num);
   console.log(random);
   return random;
}
redondearHaciaArriba(5,48);


function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   var random = Math.random();
   console.log(random);
   return random;
}
numeroRandom('');



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
