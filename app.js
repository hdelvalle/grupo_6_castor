const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public');
const mainRoutes = require('./routes/indexRoutes');
const usersRoutes = require('./routes/usersRoutes');
const productsRoutes = require('./routes/productsRoutes');

app.set('view engine', 'ejs');
app.use(express.static(publicPath));


app.use('/', mainRoutes);
app.use('/', usersRoutes);

app.use('/', productsRoutes);


app.listen(3030, () => {
    console.log("El servidor está corriendo en el puerto 3030")
});
