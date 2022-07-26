const productos = [
    {
        nombre: 'Andamios',
        precio: 'AR$ 800',
        descripcion: '1/4mt',
        nombreImagen: 'andamios.webp',
    },
    {
        nombre: 'Ladrillos',
        precio: 'AR$ 500',
        descripcion: '100u.',
        nombreImagen: 'ladrillos.webp',
    },
    {
        nombre: 'Arena',
        precio: 'AR$ 1000',
        descripcion: 'mt^3',
        nombreImagen: 'arenaEmbolsada.webp',
    },
    {
        nombre: 'Cemento',
        precio: 'AR$ 1000',
        descripcion: 'bolsa',
        nombreImagen: 'cemento.webp',
    },
    {
        nombre: 'Hormigonera',
        precio: 'AR$ 15.000',
        descripcion: 'unidad',
        nombreImagen: 'hormigonera.webp',
    },
    {
        nombre: 'Martillo neumatico',
        precio: 'AR$ 15.000',
        descripcion: 'unidad',
        nombreImagen: 'martilloNeumatico.webp',
    },
    {
        nombre: 'Varillas',
        precio: 'AR$ 700',
        descripcion: '1mt',
        nombreImagen: 'varillas.webp',
    },
    {
        nombre: 'Ventanas',
        precio: 'AR$ 3500',
        descripcion: 'unidad',
        nombreImagen: 'ventanas.webp',
    },
    {
        nombre: 'Vigas Metalicas',
        precio: 'AR$ 3000',
        descripcion: '5mts',
        nombreImagen: 'vigasMetalicas.webp',
    },
    
]

const mainControllers = {
    index: (req, res) => {
        res.render('index', { productos: productos })
    },
    // login: (req, res)=>{
    //     res.sendFile(path.join(__dirname , '../views/login.html'))
    // },
    productCart: (req, res)=>{
        res.sendFile(path.join(__dirname , '../views/productCart.html'))
    },
    productDetail: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productDetail.html'))
    },
    // register: (req, res)=>{
    //     res.sendFile(path.join(__dirname , '../views/register.html'))
    // }  
    
}

module.exports = mainControllers;