const inputElement = document.querySelector('input');



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



debugger;

// obtener listado de clases del elemento
console.log(inputElement.classList);

// .add   añadir clase desde js
inputElement.classList.add("clase-desde-js");

// .remove   eliminar clase desde js
inputElement.classList.remove("clase-desde-js");

// .toggle   añade la clase si no la tiene, elimina la clase si la tiene.
inputElement.classList.toggle("clase-desde-js");

// .contains  devuelve un booleano segun si el elemento tiene la clase o no
inputElement.classList.contains("clase-que-no-existe");
