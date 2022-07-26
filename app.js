const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public');

// Configuracion
app.set('view engine', 'ejs');
app.use(express.static(publicPath));
app.use(express.urlencoded({extended: false}));

// Rutas
const mainRoutes = require('./routes/indexRoutes');
const usersRoutes = require('./routes/usersRoutes');
const productsRoutes = require('./routes/productsRoutes');

app.use('/', mainRoutes);
<<<<<<< HEAD
app.use('/login', usersRoutes);
app.use('/', productsRoutes);
=======
app.use('/', usersRoutes);

app.use('/', productsRoutes);

>>>>>>> 3710d560c76980187f0a897b9cb0b27a8ac2d681

// Servidor
app.listen(3030, () => {
    console.log("El servidor está corriendo en el puerto 3030")
});
