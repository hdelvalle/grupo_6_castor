const productos = [
    {
    nombre:'Andamios',
    precio:'AR$ 800',
    descripcion:'1/4mt',
    nombreImagen: 'andamios.webp',
    },
    {
    nombre:'Ladrillos',
    precio:'AR$ 500',
    descripcion:'100u.',
    nombreImagen: 'ladrillos.webp',
    },
    {
    nombre:'Arena',
    precio:'AR$ 1000',
    descripcion:'mt^3',
    nombreImagen: 'arenaEmbolsada.webp',
    },
]


const controlador = {
    vistaIndex: (req,res) => {
<<<<<<< HEAD
        res.render('index', {productos: productos});
=======
        res.render('./products/productCart', {productos});
    },
    detalleMenu: (req, res) => {
        let idProducto = req.params.id;
        res.render('./products/productDetail', {producto: productos[idProducto]});
>>>>>>> 3710d560c76980187f0a897b9cb0b27a8ac2d681
    }
    // detalleMenu: (req, res) => {
    //     let idPlato = req.params.id;
    //     res.render('detalleMenu', {plato: platos[idPlato]});
    // }
}

module.exports = controlador;
