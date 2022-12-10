
// Manejando eventos desde JavaScript
// Imperativa


const button1 = document.querySelector("#button-imperative");

/*
button1.addEventListener("click", () => {
    console.log("botton clicado");
});

button1.addEventListener("mouseover", () => {
    console.log("has pasado el raton por encima");
});
*/
/*
button1.addEventListener("click", (event) => {
    console.log(event);
});
*/

// añadimos la funcion que ya existe, sin parentesis
// buttonClicked !== buttonClicked()
button1.addEventListener("click", buttonClicked);


button1.addEventListener("mouseover", (e) => {
    console.log(e);
});




// Manejando eventos in-line... por onclick
// Declarativa
function buttonClicked() {
    console.log('se ha pulsado el button');
}