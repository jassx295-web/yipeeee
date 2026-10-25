function AgregaImagen() {
    var URL = document.getElementById("imagenURL").value.trim();
    var pie = document.getElementById("pieFoto").value.trim();
    var galeria = document.getElementById("galeriaImagenes");

    if (URL === "") {
        alert("Ingresa la URL de una imagen");
        return;
    }

    var div = document.createElement("div");
    var img = document.createElement("img");
    var p = document.createElement("p");

    img.src = URL;
    img.width = 300;
    img.height = 250;
    img.alt = pie || "Imagen de la galería";

    img.onerror = function() {
        alert("No se pudo cargar la imagen. Revisa la URL.");
        div.remove();
    };

    p.textContent = pie;

    div.className = "tarjeta";
    div.appendChild(img);
    div.appendChild(p);

    galeria.appendChild(div);

    document.getElementById("imagenURL").value = "";
    document.getElementById("pieFoto").value = "";
    document.getElementById("galeriaImagenes")
}