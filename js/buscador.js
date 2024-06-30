document.getElementById('#searchForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar el envío del formulario por defecto
    let searchTerm = document.getElementById('#searchInput').value.toLowerCase();
    let productos = document.querySelectorAll('.productos div');

    productos.forEach(function(producto) {
        let titulo = producto.querySelector('h3').innerText.toLowerCase();
        let descripcion = producto.querySelector('.descripcion').innerText.toLowerCase();

        if (titulo.includes(searchTerm) || descripcion.includes(searchTerm)) {
            producto.style.display = 'block';  // Mostrar el producto si coincide con el término de búsqueda
        } else {
            producto.style.display = 'none';  // Ocultar el producto si no coincide con el término de búsqueda
        }
    });
});