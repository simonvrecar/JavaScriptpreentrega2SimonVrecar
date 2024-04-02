/* console.log('Hola'); */

let apellido = '' 
let nombre = '' 
let telefono = '' 

alert("Completa tus datos y participá por un descuento en la matricula");

//PEDIR EL APELLIDO:
function escribirApellido(){  
    apellido = prompt('Ingresa tu Apellido').toLowerCase()
    let mayApellido = apellido.charAt(0).toUpperCase() + apellido.slice(1)
    

    while(!mayApellido || ['',' '].includes(mayApellido)){
      switch(mayApellido){
        case false:
          alert('Debes ingresar el Apellido.')
          apellido = prompt('Ingresa tu Apellido').toLowerCase()
          mayApellido = apellido.charAt(0).toUpperCase() + apellido.slice(1)
          break
        case '':
          alert('El Apellido es un campo oblidatorio.')
          apellido = prompt('Ingresa el Apellido (por ejemplo: "Perez"').toLowerCase()
          mayApellido = apellido.charAt(0).toUpperCase() + apellido.slice(1)
          break
        case ' ':
          alert('El Apellido es un campo oblidatorio.')
          apellido = prompt('Ingresa el Apellido (por ejemplo: "Perez"').toLowerCase()
          mayApellido = apellido.charAt(0).toUpperCase() + apellido.slice(1)
          break   
      }
    }
    return mayApellido
  }

//PEDIR EL NOMBRE:
function escribirNombre(){  
  nombre = prompt('Ingresa tu Nombre').toLowerCase()
  let mayNombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
  
  while(!mayNombre || ['',' '].includes(mayNombre)){
    switch(mayNombre){
      case false:
        alert('Debes ingresar el Nombre.')
        nombre = prompt('Ingresa tu Nombre').toLowerCase()
        mayNombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
        break
      case '':
        alert('El Nombre es un campo oblidatorio.')
        nombre = prompt('Ingresa el Nombre (por ejemplo: "Simon"').toLowerCase()
        mayNombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
        break
     case ' ':
        alert('El Nombre es un campo oblidatorio.')
        nombre = prompt('Ingresa el Nombre (por ejemplo: "Simon"').toLowerCase()
        mayNombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
        break
    }
  }
  return mayNombre
}


//PEDIR EL TELEFONO:
function validarTelefono() {
  telefono = prompt("Ingrese su teléfono Por ejemplo: 11 9999 9999")
  telefono = telefono.replace(/\s/g, "")
  let regex = /^11\d{8}$/
  while(!regex.test(telefono)){
    alert('Ingrese nuevamente su teléfono. Debe comenzar con 11')
    telefono = prompt("Su número de teléfono debe comenzar con 11 y tener 10 dígitos. Por ejemplo:  11 9999 9999").replace(/\s/g, "")
  }
  return telefono
}



//PARTICIPAR EN EL DESCUENTO DE LA MATRICULA:
function promoNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 6) + 1; //El mensaje dice 10 pero lo cambie a propósito a 6 para que tenga más posibildad de ganar

    let intentosTotales = 0;
    let adivinado = false;

    while(adivinado === false) {

        let intento = parseInt(prompt("Adivina un número del 1 al 10. \nTenes 3 intentos. \nY gana descuentos: \nEn 1 intento 20% de la matricula. \nEn 2 intentos 10% de la matricula. \nEn 3 intentos 5% de la matricula."));
        intentosTotales++;

        if(intento === numeroAleatorio & intentosTotales === 1 ) {
            alert("Felicitades, el numero era " + numeroAleatorio + ". Lo adivinaste en " + intentosTotales + " intento. \nObtuviste un 20% de descuento");
            adivinado = true;
        } else if(intento === numeroAleatorio & intentosTotales === 2 ) {
                alert("Felicitades, el numero era " + numeroAleatorio + ". Lo adivinaste en " + intentosTotales + " intentos. \nObtuviste un 10% de descuento");
                adivinado = true;
        } else if(intento === numeroAleatorio & intentosTotales === 3 ) {
                alert("Felicitades, el numero era " + numeroAleatorio + ". Lo adivinaste en " + intentosTotales + " intentos. \nObtuviste un 5% de descuento");
                adivinado = true;
        } else if (intento < numeroAleatorio) {
            alert("El número que tenés que adivinar es más alto. Intentá otra vez.");
        } else {
            alert("El número que tenés que adivinar es más bajo. Intentá otra vez.");
        }

        if (intentosTotales >= 3) {
            adivinado = true;
            alert("Ya usaste tus 3 intentos. Contactate con nosotros " + nombre + " " + apellido);
        }
    }
}





console.log(`el apellido es ${escribirApellido(apellido)}`)
console.log(`el nombre es ${escribirNombre(nombre)}`)
alert("Hola " + nombre.charAt(0).toUpperCase() + nombre.slice(1) + " " + apellido.charAt(0).toUpperCase() + apellido.slice(1));
console.log(`el telefono es ${validarTelefono(telefono)}`)
alert("Tenés 3 oportunidades para pagar menos en tu matricula!!");
promoNumero();


//USUARIO:
let interesado = nombre.charAt(0).toUpperCase() + nombre.slice(1) + " " + apellido.charAt(0).toUpperCase() + apellido.slice(1)
  

//PRECIO SELECCIONADO
function precioProducto(articuloElegido, productos) {
    let producto = productos.find(item => item.opcion === articuloElegido);
    return producto ? producto.precio : null;
}

//PRODUCTOS A LA VENTA
const productos = [
    {
        opcion: '1',
        titulo: "Pincel fino",
        precio: 9000,
        categoria: 'arte'
    },
    {
        opcion: '2',
        titulo: "Bastidor 40x60",
        precio: 24500,
        categoria: 'arte'
    },
    {
        opcion: '3',
        titulo: "Acrilico Rojo",
        precio: 3500,
        categoria: 'arte'
    },
    {
        opcion: '4',
        titulo: "Acrilico Azul",
        precio: 3500,
        categoria: 'arte'
    },
    {
        opcion: '5',
        titulo: "Lapiz negro",
        precio: 2500,
        categoria: 'libreria'
    },
    {
        opcion: '6',
        titulo: "Espatula",
        precio: 11000,
        categoria: 'arte'
    }
];
console.log(productos)

//MOSTRAR LOS PRODUCTOS:
let listaProductos = "Estos son nuestros productos a la venta:\n\n";
productos.forEach(producto => {
    listaProductos += producto.opcion + "- " + producto.titulo + ": $" + producto.precio + "\n";
});
listaProductos += "\nSeleccione el producto que desea comprar (escriba del 1 al 6). \nPara terminar con la compra escriba 'terminar' \nSi no esta interesado en ningun producto también escriba 'terminar'::";
let seguirComprando;


//VARIABLE DEL TOTAL DE COMPRA:
let totalCompra = 0;


//ELECCION DE PRODUCTOS
do {
    let articuloElegido = prompt(listaProductos);

    if (articuloElegido === 'terminar') {
        seguirComprando = false;  
    } else {
        seguirComprando = true; 

        let precioSeleccionado = precioProducto(articuloElegido, productos); 

        if (!precioSeleccionado) {
            alert("Seleccione una opcion valida (1, 2, 3, 4, 5 ,6).");
        } else {
            totalCompra += precioSeleccionado; 
            alert("El precio del producto es: $" + precioSeleccionado + " y fue agregado al carrito de compra.");
            console.log("El precio del producto agregado al carrito es: $" + precioSeleccionado);
        }
    }
} while (seguirComprando);

//MOSTRAR MENSAJE FINAL CON EL MONTO GASTADO O MENCIONANDO QUE NO SE REALIZO NINGUNA COMPRA:
if (totalCompra > 0) {
    alert(interesado + ", el precio total de su compra es: $" + totalCompra + ". ¡Gracias por su compra!");
    console.log("El precio total de la compra de " + interesado + " es: $" + totalCompra);
} else {
    alert("No elegiste ningun producto. Te esperamos en otro momento, " + interesado + "!");
    console.log("No se realizó ninguna compra. Muchas gracias por su visita, " + interesado + "!");
}





