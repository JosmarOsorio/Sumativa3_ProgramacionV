const Clickbutton = document.querySelectorAll('.button')
let carrito = []

Clickbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e){
    const button = e.target
    const item = button.closest('.pelicula')
    const itemTitle = item.querySelector('.tituloPelicula').textContent;
    console.log(itemTitle)
}