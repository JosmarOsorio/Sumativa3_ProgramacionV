//Desarrollado Por: JOSMAR OSORIO y STEPHANIA SALMERÓN. Para: Programación V-UBA Prof. Elizabeth del Valle
//Generador de mensajes emergentes
//FRASES CELEBRES 
//Creamos un arreglo para almacenar cada frase ceelebre y sus imagenes correspondientes
let frasesCelebres = [
    {
      frase: "Que la fuerza te acompañe - Star wars",
      imagen: "img/Frases/Yoda.jpg"
    },
    {
      frase: "Hasta el infinito... ¡y más allá! - Toy Story",
      imagen: "img/Frases/Buzz.jpeg"
    },
    {
      frase: "Hasta la vista, baby - Terminator 2: El juicio final",
      imagen: "img/Frases/Terminator.png"
    },
    {
      frase: "Siempre se llega a alguna parte si se camina lo bastante - Alicia en el país de las maravillas",
      imagen: "img/Frases/Gato.png"
    },
    {
      frase: "¡Yo soy Iron Man! - Avengers End Game",
      imagen: "img/Frases/IronMan.jpg"
    },
    {
      frase: "Es leviosa, no leviosá - Harry Potter y la piedra filosofal",
      imagen: "img/Frases/Hermione.jpeg"
    },
    {
      frase: "¡Yo soy el rey del mundo! - Titanic",
      imagen: "img/Frases/Jack.jpg"
    },
    {
      frase: "Hakuna Matata - El rey león",
      imagen: "img/Frases/ReyLeon.png"
    },
    {
      frase: "Le haré una oferta que no podrá rechazar - El Padrino",
      imagen: "img/Frases/ElPadrino.png"
    },
    {
      frase: "La vida es la preparación detrás del telón que nunca subirá - El show de Truman",
      imagen: "img/Frases/Truman.jpeg"
    }
  ]
  
  //Creamos una funcion para mostar la frase celebre y su imagen de forma aleatoria
  function mostrarFraseCelebre() {
    let indice = Math.floor(Math.random() * frasesCelebres.length) //creamos uan variable llamada indice que le asignara un valor numerico a cada frase y hará que se muestre de forma aleatoria
    let frase = frasesCelebres[indice].frase //Creamos una variable llamada frase para almacenar la frase que se va a mostar segun el indice obtenido 
    let imagen = frasesCelebres[indice].imagen //Creamos una variable llamada imagen para almacenar la imagen que se va a mostar segun el indice obtenido
    document.getElementById("frase").innerText = frase //Utilizamos la funcion getElemntById para mostar la frase correspondiente 
    document.getElementById("imagenPelicula").src = imagen //Utilizamos la funcion getElemntById para mostar la imagen correspondiente 
  }
  
  mostrarFraseCelebre() //Lamamos a la funcion mostarFraseCelebere para agregar el contenido en el html
  
  setInterval(mostrarFraseCelebre, 30000) //Agregamos una funcion para que la farse y la imagen cambien cada 30 segundos 