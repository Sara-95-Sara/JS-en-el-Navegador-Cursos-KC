
// Tendremos un input de texto donde escribiremos una palabra
// tendremos un boton donde, cuando se pulse, 
   //   almacenaremos lo que haya escrito en el input en localStorage
// tendremos un parrafo donde escribiremos tambien este texto.
// cuando iniciemos la web, si hubiera algo almacenado en localStorage, lo incluiremos en el parrafo.

const inputElement = document.querySelector("#inputElement");

const saveInputElement = document.querySelector("#save");

// saveInputElement.innerText = inputElement.value;

saveInputElement.addEventListener("click", SaveInputValue);

function SaveInputValue() {
    localStorage.setItem("savedText", inputElement.value);
    
    const parrafo = document.querySelector("#parrafo");

    // escribimos el texto que se ha introducido en el input dentro del parrafo
    parrafo.textContent = inputElement.value;

    inputElement.value = "";
}

const textSaved = localStorage.getItem("savedText");
   
if(textSaved !== null) {
    const parrafo = document.querySelector("#parrafo");
    parrafo.textContent = textSaved;
}