function toggleSubmenu(event) {
    event.stopPropagation(); // Evita que el evento se propague
    let submenu = event.target.closest('li').querySelector('.submenu');
    
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
}
/*function hideSubmenu() {
    let submenu = document.querySelector('.submenu');
    submenu.style.display = "none";
}*/

