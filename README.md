<h1>Esta es una API realizada por medio de Node.js, express y mongoDB. Se uso heroku para realizar el deploy</h1>
<h2>Esta API cuenta con 2 endpoint: Agregar datos y borrar datos de la mascota</h2>
<p>Me base en el siguiente video para realizarla: https://www.youtube.com/watch?v=vjf774RKrLc<br>
Link de la app en Heroku: https://hack-mascotas.herokuapp.com/</p>
<h2>¿Como se manejan las funciones?</h2>
<h3>Debido a que los 2 endpoint hacen uso de POST y DELETE las peticiones deberan realizarse con Postman</h3>
<p>Aqui podemos ver ejemplos de como subir los datos: </p>
<p>Subir datos de mascotas: Se necesita subir un json en el body con los datos que queremos subir</p>
<p align="center">
<img height="250" src="https://user-images.githubusercontent.com/50376236/120087070-7e3f8f00-c0aa-11eb-9733-f26fc4e98cab.png"></p>

<p>Eliminar datos de mascotas: Escogemos la ID de la mascota que queremos eliminar</p>
<p align="center">
<img height="80" src="https://user-images.githubusercontent.com/50376236/120087082-98796d00-c0aa-11eb-9eee-bd6bec5731eb.png"></p>
<h4>Ademas si copiamos unicamente el link de heroku sin ninguna instruccion nos mostrara un json con todos los datos para que sepamos cuales estan disponibles para eliminar o ver si ya se elimino</h4>
