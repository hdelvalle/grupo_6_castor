const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public');


// Configuracion
app.set('view engine', 'ejs');
app.use(express.static(publicPath));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Rutas
const mainRoutes = require('./routes/indexRoutes');
const usersRoutes = require('./routes/usersRoutes');
const productsRoutes = require('./routes/productsRoutes');

app.use('/', mainRoutes);
app.use('/user', usersRoutes);
app.use('/products', productsRoutes);


// Servidor
app.listen(3030, () => {
    console.log("El servidor está corriendo en el puerto 3030")
});
