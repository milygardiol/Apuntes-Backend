/* 
http => codigos de estado
1xx = informacion
2xx = éxito
3xx = redirección (servidor web)
4xx = error de cliente
5xx =  error de servidor (base de datos)

200 ok, 400 bad request, 404 not found, 500 internal server error

API => application programming interface

endpoints => método http + ruta
extensión =Z thunder client
*/

app.get("/", controller)

// en los formularios de HTML => action="route" method="get, post, etc"

//MIDDLEWARE => es un sofware para comunicar entre si

// web server => concepto Front, rutas que devuelven texto plano - páginas
// api rest (server) => rutas que devuelven datos (sustantivos, devuelven JSON, usar los methods ver=get, guardar=post borrar=delete actualizar=put)

/* Ejemplos:
Listar usuarios = get
Agregar usuario = post
Obtener usuario 1 (URI) = get (con id especifico)
Modificar usuario = put
Borrar = delete (URI)
Usuarios con domicilio = get => filtro


req.url.split() ?
Object.fromEntries

Libreria CRYPTO = criptografia (funcion de id randoms)
*/

//localhost:8080   /api/cosas  ?min=200
//dominio del servidor - partes del servidor - datos adicionales

app.use(express.json())
//guardará en el campo "body" el json de la petición


//Difetencia PUT y PATCH
// put contiene la actualización completa del json
//no varian sus velocidad, solo tienen un uso diferente
// patch tiene actualización parcial (rfc)

