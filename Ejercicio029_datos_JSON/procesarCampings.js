function procesarCampings(texto){
    arrayCampings=JSON.parse(texto);
    arrayCampings.forEach(camping => {
        console.log(camping.address);

        creaFilaCamping(camping.address, camping.image_uri, camping.postcode, camping.description);
    });
}

function procesarError(err){
    console.error(err);
}

function creaFilaCamping(address, image_uri, postcode, description){
    let divCamping = document.createElement("div");
    divCamping.classList.add("camping");
    document.querySelector("#iCampings").appendChild(divCamping);
    let divImagen = document.createElement("div");
    divImagen.classList.add("imagen");
    divCamping.appendChild(divImagen);
    //<img src="./images/r1.jpg">
    let imgCamping = document.createElement("img");
    imgCamping.src = image_uri;
    divImagen.appendChild(imgCamping);
    //<div class="descripcion">
    let divDescripcion = document.createElement("div");
    divDescripcion.classList.add("descripcion");
    divCamping.appendChild(divDescripcion);
    let divNombre = document.createElement("div");
    divNombre.classList.add("address");
    divNombre.appendChild(document.createTextNode(address));
    divDescripcion.appendChild(divNombre);
    //Address
    let divPostcode = document.createElement("div");
    divPostcode.classList.add("postcode");
    divPostcode.appendChild(document.createTextNode(postcode));
    divDescripcion.appendChild(divPostcode);
    //<div class="precio">30€</div>
    let divDescription = document.createElement("div");
    divDescription.classList.add("description");
    divDescription.appendChild(document.createTextNode(description));
    divDescripcion.appendChild(divDescription);
    //<hr>
    document.querySelector("#iCampings").appendChild(document.createElement("hr"));
}