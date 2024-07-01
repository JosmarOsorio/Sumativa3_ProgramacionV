let carrito = []; //Creasmo suna variable carrito 

//Creamos una funcion para agregar un elemento al carrito 
function agregarProducto(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

//Creamos una función para actualizar el contador del carrito
function actualizarCarrito() {
  const carritoElement = document.getElementById('cuenta-carrito');
  carritoElement.textContent = carrito.length;
}

//Creamos una funcion para eliminar un elemento del carrito (Nota para que se vea la actualizacion del elemento eliminaod se debe cerrar y abrir la ventana de carrito)
function eliminarProducto(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

 //Creamos la función para mostrar el contenido del carrito en la ventana modal
 function mostrarCarrito() {
  const carritoModal = new bootstrap.Modal(document.getElementById('carritoModal')); 
  actualizarCarrito();
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = '';
  let precioTotal = 0; //Inicializamos el precio total en 0

  carrito.forEach((producto, index) => { //Creamos un apartado con la estructura del elemento que vamos a agergar a la ventana modal y hacemos que extraiga lso datos segun la pelicula
    const productoElement = document.createElement('div');
    productoElement.innerHTML = `
      <p><strong>${producto.nombre}</strong></p>
      <p>Precio: ${producto.precio}$</p>
      <button onclick="eliminarProducto(${index})">Eliminar</button>
      <hr> <!-- Línea divisoria entre productos -->
    `;
    modalBody.appendChild(productoElement);

    //Creamos una funcionabilidad que sume el precio de cada producto al precio total
    precioTotal += producto.precio;
  });

  //Mostramos el precio total en la ventana modal
  const precioTotalElement = document.createElement('div');
  precioTotalElement.innerHTML = `<p><strong>Precio Total: ${precioTotal}$</strong></p>`;
  modalBody.appendChild(precioTotalElement);

  if (carrito.length > 0) {
    carritoModal.show();
  } else {
    carritoModal.hide(); //Agregamos una funcion q ue oculte la ventana modal si no hay productos en el carrito
  }
}


//Creamos uan función para cerrar la ventana modal
function cerrarModal() {
  const carritoModal = new bootstrap.Modal(document.getElementById('carritoModal'));
  carritoModal.hide();
}

//Creamos una función para restablecer el carrito
function restablecerCarrito() {
  carrito = [];
  actualizarCarrito();
  cerrarModal();
}
