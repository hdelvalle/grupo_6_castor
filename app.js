const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

const mainRoutes = require('./routes/mainRoutes')

app.use('/', mainRoutes);

app.listen(3030, () => {
    console.log("El servidor está corriendo en el puerto 3030")
});
