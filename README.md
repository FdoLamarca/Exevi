# Exevi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Buenas tardes,
Paso a comentar algunas notas referentes a la realización de la prueba:

He intentado hacer un desarrollo de una SPA con 3 páginas: un Home, una página donde se calcula el índice y una página de error 404, cuando se indica una dirección en el navegador que no existe.
El Array que introduce el usuario se hace en un campo de texto, separado por comas. Hay una validación del campo con una expresión regular pero no he conseguido integrarla en el formulario, por problemas de tiempo, aunque se probó y creo que funciona. La expresion es la siguiente: ^-?[\d]+(,-?[\d]+)*$

Los resultados de todas las validaciones de los arrays se muestran en una tabla, ordenados cronologicamente de mas reciente a más antigua. Al llegar a 10 registros, se elimina la entrada más antigua.
Comencé a realizar la aplicación responsive, pero no he podido comprobar su correcto funcionamiento.

Correciones, mejoras y funcionalidades que faltan:
- Restaría resaltar mediante una clase css el literal "No hay indice", cuando muestra la información de un array que no tiene índice de equilibrio.
- Implementar correctamente la validación del campo texto donde el usuario introduce el array.
- Refactorizar el código eliminando alguna duplicidad.
- Eliminar clases css no usadas.

Para cualquier duda o aclaración, quedo a su entera disposición y aprovecho la ocasión para agradecerles sinceramente la oportunidad.
Un cordial saludo.

Fernando Lamarca
