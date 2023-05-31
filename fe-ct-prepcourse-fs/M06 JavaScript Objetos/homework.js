/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var gato = {
      nombre: nombre,
      edad: edad,
      meow: function() {
         var msj = 'Meow!';
         return msj;
      }
   };
   console.log(gato.meow());
   console.log(gato);
   return gato;
}
crearGato('haslan', '5 meses');


function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var usuario = {
      name: nombre,
      mail: email,
      pass: password,
   }
   console.log(usuario);
   return usuario;
}
nuevoUsuario('camilo', 'xxx.gmail', '1234');

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null;
   console.log(objeto);
   return objeto;
}
var usuario = {
   name: 'camilo',
   mail: 'xxx.gmail',
   pass: '1234'
};
agregarPropiedad(usuario, 'edad');

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
     for(var prop in objeto) {
         if(prop === metodo) {
         console.log('esta es la propiedad ' + prop);
         console.log('este es el valor ' + objeto[prop]);
     };
   }
   }
   var gato = {
      nombre: 'haslan',
      genero: 'masculino',
      tienepropiedad: function() {
         console.log('Este es el método tienepropiedad' + gato[prop]);
      }
   };
invocarMetodo(gato, 'nombre');

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   for(var prop in objetomisterioso) {
      var mult = objetomisterioso[prop] * 5;
   }
   console.log(mult);
   return mult;
}
var objetomisterioso = {
   numeromisterioso: 9
}
multiplicarNumeroDesconocidoPorCinco(objetomisterioso);

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete objeto[propiedad];
   console.log(objeto);
   return objeto;
}
var objeto = {
   numeromisterioso: 9,
   numerofinal: 10
};
eliminarPropiedad(objeto, 'numerofinal');

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   for (var prop in objetoUsuario) {
      if (prop === "email") {
         if (objetoUsuario[prop] !== undefined && objetoUsuario[prop] !== null) {
            console.log(true);
         } else {
            console.log(false);
         }
      }
   }
}

var usuario = {
   name: 'camilo',
   email: 'xxx.gmail',
   pass: '1234'
};

tieneEmail(usuario);


function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
      var tienepropiedad = objeto.hasOwnProperty(propiedad);
      console.log(tienepropiedad);
}
var laptop = {
   nombre: 'acer',
   ram: '4'
};
tienePropiedad(laptop, 'nombre');

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   var tienepropiedad = objetoUsuario.hasOwnProperty(password);
   console.log(tienepropiedad);
}
var usuario = {
   name: 'camilo',
   email: 'xxx.gmail',
   pass: '1234'
};

verificarPassword(usuario, 'pass');

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.pass = nuevaPassword;
   console.log(objetoUsuario.pass);
}
var usuario = {
   name: 'camilo',
   email: 'xxx.gmail',
   pass: '1234'
};
actualizarPassword(usuario, '567');

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);
   console.log(objetoUsuario);
}
var usuario = {
   name: 'camilo',
   email: 'xxx.gmail',
   amigos: ['cami', 'marce']
};
agregarAmigo(usuario, 'leonor');

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   for (var i = 0; i < objetoMuchosUsuarios.length; i++) {
      objetoMuchosUsuarios[i].esPremium = true;
   }
   console.log(objetoMuchosUsuarios);
   return objetoMuchosUsuarios;
}
var usuarios = [
   {
      nombre: 'usuar1',
      esPremium: false
   },
   {
      nombre: 'usuar2',
      esPremium: false
   }
];
pasarUsuarioAPremium(usuarios);

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
      var posts = objetoUsuario.posts; 
      var totalLikes = 0; 
      for (var i = 0; i < posts.length; i++) {
         totalLikes += posts[i].likes; 
      }
      console.log(totalLikes); 
      return totalLikes; 
   }

var usuario = {
   posts: [
      {
         likes: 10
      },
      {
         likes: 20
      },
      {
         likes: 5
      }
   ]
};
sumarLikesDeUsuario(usuario);

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto.calcularPrecioDescuento = function() {
      var calc = objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
      var preciofinal = objetoProducto.precio - calc;
      console.log(calc);
      return preciofinal;
   };
   var precioFinal = objetoProducto.calcularPrecioDescuento();
   console.log(precioFinal);
   return precioFinal;
}
var producto = {
   precio: 10,
   porcentajeDeDescuento: 0.2,
};
agregarMetodoCalculoDescuento(producto);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
