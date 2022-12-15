import { myRoutes } from "./myRoutes";
import {Router} from 'express'
export const routerCart = new Router()
import ContenedorFB from "../Daos/cart/controllerFB.js";
import ContenedorMongo from '../Daos/cart/controllerMongo.js'

const cartControllerMongo = new ContenedorMongo();
const cartControllerFB = new ContenedorFB();

routerCart.get('/', (req, res) => {
    const carritos =  cartControllerMongo.getCarritos()
    const carritosFB =  productControllerFB.getAll()
    res.send(carritos);
    res.send(productosFB)
});

routerCart.get('/:id?',  (req, res) => {
    const { id } = req.params
    const cart =  cartControllerMongo.getCartByID(id);
    const cartFB =  cartControllerFB.getByID(id);
    res.send(cart);
    res.send(productosFB)
});

routerCart.post('/', (req, res) => {
    const nuevoCarrito =  cartControllerMongo.createCarrito();
    const nuevoCarritoFB =  cartControllerFB.save(newItem);
    res.send(nuevoCarrito);
    res.send(nuevoCarritoFB);
});

routerCart.delete('/:id?', (req, res) => {
    const {id} = req.params; 
    const deletedCart =  cartControllerMongo.deleteCarritoById(id)
    const deletedProductFB =  productControllerFB.deleteById(id)
    res.send(deletedCart);
    res.send(deletedProductFB)
});

routerCart.delete('/:id_carrito/productos/:id', (req, res) => {
    const { idCart, idProduct } = req.params;
    const deletedCart =  cartControllerMongo.deleteCarritoById(id)
    const deletedProductFB =  productControllerFB.deleteById(id)
    res.send(deletedCart);
    res.send(deletedProductFB)
});

routerCart.post('/:id_carrito/productos/:id', (req, res) => {
    
    const { idCart, idProduct } = req.params;
    const deletedProduct = cartControllerMongo.deleteProductInCart(idCart, idProduct);
    const deletedProductFB = cartControllerFB.deleteProductInCartFB(idCart, idProduct);
    res.send(deletedProduct);
    res.send(deletedProductFB);
})
