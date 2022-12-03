//Motor de plantilla
//Lee la plantilla que contiene la presentación que y atiene datos html e incerta en el la info dinamica del controlador.


//Algo de repaso de handlebars y js básico

app.set('views', path)
//especifica la carpeta de plantillas

.set('view engine', name)
//registra al motor de plantillas

app.use(express.static('public'))
//espacio público del servidor

app.engine('hbs', handlebars ({
    extname: 'hbs', 
    defaultLayout: 'index.hbs', //plantilla principal
    layoutsDir: _dirname + 'views/layouts', //ruta plantilla principal
    partialsDir: _dirname + 'views/partials' //ruta plantilla parciales
}))


/* 
LAYOUTS => plantillas con código común de HTML - se llaman por otro lado - navegación o footer
PARTIALS => pedazo de código para importar en otros HTML
*/
