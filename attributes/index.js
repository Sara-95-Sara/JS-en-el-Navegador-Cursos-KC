const inputElement = document.querySelector('input');

debugger;

// obtener sus atributes
console.log(inputElement.attributes);

// añadimos placeholder
inputElement.setAttribute("placeholder", "Introduce cualquier texto");

// obtenemos valor del atributo placeholder
console.log(inputElement.getAttribute("placeholder"));


// comprobamos si el input tiene el atributo disabled.
console.log(inputElement.hasAttribute("disabled"));

// eliminamos un atributo del input
inputElement.removeAttribute("placeholder");


// cambiamos type de input.
inputElement.setAttribute("type", "password");