
const productos = [
    {
    nombre:'Carpaccio fresco',
    precio:'U$S 65.50',
    descripcion:'Entrada Carpaccio de salmón con cítricos',
    nombreImagen: 'Carpaccio-de-salmon.jpg',
    },
    {
    nombre: 'Risotto de berenjena',
    precio: 'U$S 47.00',
    descripcion: 'Risotto de berenjena y queso de cabra',
    nombreImagen: 'Risotto-berenjena-queso-cabra.jpg',
    }
    ]


const controlador = {
    vistaIndex: (req,res) => {
        res.render('productsCart', {platos});
    },
    detalleMenu: (req, res) => {
        let idPlato = req.params.id;
        res.render('detalleMenu', {plato: platos[idPlato]});
    }
}

module.exports = controlador;
