

// funcion que pinta una imagen aleatoria usando appendChild
function drawRandomImage() {
   // creación de nodo
   const newImage = document.createElement('img');
   newImage.src = "https://picsum.photos/seed/picsum/200/300";

   // selección del nodo destino
   const target = document.querySelector('.images-wrapper');

   // añadir nuevo nodo al nodo de destino
   target.appendChild(newImage);
}


// funcion que pinta 5 imagenes usando innerHtml
function drawRandomImagesUsingInnerHtml() {

    let images = "";

    // generamos un string que contiene 5 etuiquetas img.
    for (let index = 0; index < 5; index++) {
        images = images + "<img src = 'https://picsum.photos/seed/picsum/200/300' ></img>"; 
    }

    // selecion del nodo destino
    const target = document.querySelector('.images-wrapper');

    // cambiamos todo el contenido de este nodo por lo que contiene la variable images.
    target.innerHTML = images;
}

// borramos todas las imagenes cuando pasen 10 segundos.
function removeAllImages() {
    const target = document.querySelector('.images-wrapper');
    // creamos un array con los hijos de target.HTMLCollection, 
    // puesto que este tipo de dato no nos permite usar ForEach
    const childrenArray = Array.from(target.children);
    childrenArray.forEach(img => img.remove());
}



// pintamos 5 imagenes cuando pasen 5 segundos  usando la propiedad innerHTML
setTimeout( () => {
    drawRandomImagesUsingInnerHtml();
}, 5000);

/*
// pintamos 5 imagenes cuando pasen 5 segundos  usando el metodo appendChild
setTimeout( () => {
    for (let index = 0; index < 5; index++) {
        drawRandomImage();
    }
}, 5000);


setTimeout(() => {
    removeAllImages();
}, 8000);
*/
/*
// ejecutar la funcion n veces, una vez cada x tiempo. cada 2.5 segundo aparece nuevo imagen.
const interval = setInterval(() => {
    drawRandomImage();
}, 2500);


//para pararlo 
//clearInterval(interval);



// ahora  se pinta solo 2 imagenes, no llega hasta 3, porque en 6 segundos 2*2.5
setTimeout( () => {
    clearInterval(interval);
}, 6000);

*/