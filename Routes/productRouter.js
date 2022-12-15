import { myRoutes } from "./myRoutes";
import {Router} from 'express'
export const routerProduct = new Router()
import ContenedorFB from "../Daos/products/controllerFB.js";
import ContenedorMongo from '../Daos/products/controllerMongo.js'

const productControllerMongo = new ContenedorMongo();
const productControllerFB = new ContenedorFB();

routerProduct.get('/', (req, res) => {
    const productos =  productControllerMongo.getAllMongo()
    const productosFB =  productControllerFB.getAll()
    res.send(productos);
    res.send(productosFB)
});
routerProduct.get('/:id?',  (req, res) => {
    const { id } = req.params
    const productos =  productControllerMongo.getById(id);
    const productosFB =  productControllerFB.getByID(id);
    res.send(productos);
    res.send(productosFB)
});
routerProduct.post('/', (req, res) => {
    const {name, thumbnail, price, stock, id } = req.body
    const newItem = {
        name: name, 
        price: price, 
        thumbnail: thumbnail, 
        stock: stock, 
        id: id
    }
    const nuevoProductos =  productControllerMongo.save(newItem);
    const nuevoProductosFB =  productControllerFB.save(newItem);
    res.send(nuevoProductos);
    res.send(nuevoProductosFB);
});
routerProduct.delete('/:id?', (req, res) => {
    const {id} = req.params; 
    const deletedProduct =  productControllerMongo.deleteById(id)
    const deletedProductFB =  productControllerFB.deleteById(id)
    res.send(deletedProduct);
    res.send(deletedProductFB)
});
routerProduct.delete('/',(req, res) => {
    const deletedProducts =  productControllerMongo.deleteAll()
    const deletedProductsFB =  productControllerFB.deleteAll()
    res.send(deletedProducts);
    res.send(deletedProductsFB)
});