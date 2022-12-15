//Requires
const express = require('express');
const app = express();
const PORT = 8080;

import { routerCart } from './Routes/cartRouter.js'
import { routerProducts } from './Routes/productRouter.js'

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/api/cart', routerCart)
app.use('/api/products', routerProducts)

//Levantando el servidor
const server = app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`)
});
server.on('error', (error) => {
    console.log('Server error:' , error)
});