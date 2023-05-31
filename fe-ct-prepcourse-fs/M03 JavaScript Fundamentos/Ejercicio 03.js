/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if(x === y) {
      console.log(true);
      return true;
   }
   else {
      console.log(false);
      return false;
   }
}
sonIguales(9, 3);

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if(str1 === str2) {
      console.log(true);
      return true;
   }
   else {
      console.log(false);
      return false;
   }
}
tienenMismaLongitud('camilo', 'camilo');

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if(num < 90){
      console.log(true);
      return true;
   }
   else {
      console.log(false);
      return false; 
   }
}
menosQueNoventa(80);

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if(num > 50){
      console.log(true);
      return true;
   }
   else {
      console.log(false);
      return false; 
   }
}
mayorQueCincuenta(30);


function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if(num % 2 === 0){
      console.log(true);
      return true;
   }
   else {
      console.log(false);
      return false; 
   }
}
esPar(33);


function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if(num % 2 != 0){
      console.log(true);
      return true;
   }
   else {
      console.log(false);
      return false; 
   }
}
esImpar(34);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
