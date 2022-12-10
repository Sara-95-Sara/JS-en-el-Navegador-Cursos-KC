    // Ejercicio:
   // obtener lista de todos
   // pintar todos los resultados en la pantalla (en el DOM).

// const todosListElement = document.querySelector('.todos-list');

/*
// fetch es un metodo que nos da el navegador.  built in- ներկառուցված.
// obtener datos del proveedor
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        // recorrer el array de todos
        todos.forEach(todo => {
          // por cada elemento, creamos un li
          const listItemElement = document.createElement("li");

          // lo rellenamos con los datos que queramos
          listItemElement.innerText =  `${todo.title} - ${todo.completed}`;
        
          // lo añadiremos a la lista
          todosListElement.appendChild(listItemElement);
        });
    });
*/
   /* 
   {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
   */



/*
// Ejercicio 1..   opcion Declarativa
const todosListElement = document.querySelector('.todos-list'); 

function buttonClicked() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        // recorrer el array de todos
        todos.forEach(todo => {
          // por cada elemento, creamos un li
          const listItemElement = document.createElement("li");

          // lo rellenamos con los datos que queramos
          listItemElement.innerText =  `${todo.title} - ${todo.completed}`;
        
          // lo añadiremos a la lista
          todosListElement.appendChild(listItemElement);
        });
    });
    console.log("amnmjsn");
}
*/

/*
// ejercicio 1.. opcion Imperativa
const todosListElement = document.querySelector('.todos-list');
const mostrarDatos = document.querySelector("#mostrarDatos");


mostrarDatos.addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        // recorrer el array de todos
        todos.forEach(todo => {
          // por cada elemento, creamos un li
          const listItemElement = document.createElement("li");

          // lo rellenamos con los datos que queramos
          listItemElement.innerText =  `${todo.title} - ${todo.completed}`;
        
          // lo añadiremos a la lista
          todosListElement.appendChild(listItemElement);
        });
    });
});
*/

// Ej. 1 con Async Await (Imperativa)
const todosListElement = document.querySelector('.todos-list');
const mostrarDatos = document.querySelector("#mostrarDatos");

mostrarDatos.addEventListener("click", showElementUsingAsyncAwait);


async function showElementUsingAsyncAwait () {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();

    // recorrer el array de todos
    todos.forEach(todo => {
        // por cada elemento, creamos un li
        const listItemElement = document.createElement("li");

        // lo rellenamos con los datos que queramos
        listItemElement.innerText =  `${todo.title} - ${todo.completed}`;
      
        // lo añadiremos a la lista
        todosListElement.appendChild(listItemElement);
    });
    mostrarDatos.remove();
}






