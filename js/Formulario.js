//Desarrollado Por: JOSMAR OSORIO y STEPHANIA SALMERÓN. Para: Programación V-UBA Prof. Elizabeth del Valle
//Formulario 
function validarFormulario() {
    let nombre = document.getElementById('nombre').value; //Creamos una varibale de cada elemento del formulario y determinamos si existe o se encuentra lleno
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let comentario = document.getElementById('comentario').value;
  
    if (nombre && email && telefono && direccion && comentario) { //Creamos un condicional para que en caso de que se rellenen todos los elementos del formulario se muestre un mensaje de exito
        Swal.fire({
            title: "Enviado!",
            text: "Su formulario ha sido enviado de forma exitosa",
            icon: "success"
        });
        document.getElementById("Formulario").reset();
    } else { //Agregamos un else para que muestre un mensaje de error en caso de que no se haya rrellenado todo el formulario 
        Swal.fire({
            title: "Error",
            text: "Por favor complete todos los campos antes de enviar el formulario",
            icon: "error"
        });
    }
  }
  