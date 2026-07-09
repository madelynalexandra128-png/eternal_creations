// Obtiene todos los checkboxes
const filtros = document.querySelectorAll(".filtro");

// Obtiene todos los productos
const productos = document.querySelectorAll(".producto");

// Agrega el evento a cada checkbox
filtros.forEach(filtro => {
    filtro.addEventListener("change", filtrarProductos);
});

// Función principal
function filtrarProductos() {

    // Obtiene las categorías seleccionadas
    const categoriasSeleccionadas = [...filtros]
        .filter(filtro => filtro.checked)
        .map(filtro => filtro.value);

    // Recorre todos los productos
    productos.forEach(producto => {

        // Obtiene la categoría del producto
        const categoria = producto.dataset.categoria;

        // Si no hay filtros seleccionados, muestra todo
        if (categoriasSeleccionadas.length === 0) {
            producto.style.display = "block";
        }

        // Si la categoría está seleccionada, muestra el producto
        else if (categoriasSeleccionadas.includes(categoria)) {
            producto.style.display = "block";
        }

        // Si no coincide, lo oculta
        else {
            producto.style.display = "none";
        }

    });

}