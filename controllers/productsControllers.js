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
        res.render('index', {productos: productos});
    }
    // detalleMenu: (req, res) => {
    //     let idPlato = req.params.id;
    //     res.render('detalleMenu', {plato: platos[idPlato]});
    // }
}

module.exports = controlador;
