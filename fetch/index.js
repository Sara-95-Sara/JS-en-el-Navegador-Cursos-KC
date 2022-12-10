    // Ejercicio:
   // obtener lista de todos
   // pintar todos los resultados en la pantalla (en el DOM).

const todosListElement = document.querySelector('.todos-list');

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

   /* 
   {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
   */






