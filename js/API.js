//Desarrollado Por: JOSMAR OSORIO y STEPHANIA SALMERÓN. Para: Programación V-UBA Prof. Elizabeth del Valle
//Conversor de divisas
//API
fetch("https://ve.dolarapi.com/v1/dolares") //Consultamos los valores de la api 
.then(response => response.json())
.then(data => {
  const tbody = document.querySelector('tbody'); //Creamos la constante tbody para contener el cuerpo de la tabla donde se vana a colocar los datos
    data.forEach(tipoCambio => { //Creamos un bucle para obtener los datos que necesitamos y realizar las operaciones
      const promedio = tipoCambio.promedio //Creamos la constante promedio para extraer el promedio que nos arroja la api o el valor del dolar 
      const precioMultiplicado = promedio * 1.99 //Multiplicamos le valor obtenido por el precio de la suscripcion

      const fila = document.createElement('tr') //Creamos la constante fila para crear un nuevo elemnto de fila en la tabla

      const tipoCambioCell = document.createElement('td') //Creamos la constante tipoCambioCell para para crear un nuevo elemnto  en la tabla y almacenar el dato del tipo de cambio ya que hay 3 
      tipoCambioCell.textContent = tipoCambio.nombre //Utilizamos esta funcion para indicar que tipo de cambio es en la tabla como "Dolar oficial"

      const precioCell = document.createElement('td') //Creamos un nuevo elemnto para mostar y almacenar el percio calculado en la tabla
      precioCell.textContent = precioMultiplicado.toFixed(2) + ' Bs' //Indicamos que el valor calculado solo contendra 2 decimales y que a un laod se le agrege "Bs"

      fila.appendChild(tipoCambioCell)//Se agrega el tipo de moneda a la fila 
      fila.appendChild(precioCell) //Se agrega el precio calculado a la fila 

      tbody.appendChild(fila) //Se agrega toda la fila a la tabla 
    });
});