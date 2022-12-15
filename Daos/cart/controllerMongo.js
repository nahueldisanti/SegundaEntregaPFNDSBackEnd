import carritoModel from '../../config/db/mongo.js'
import productosModel from '../../config/db/mongo.js'

//Clase Carrito Mongo

export default class CarritoMongo {

    async getCarritos () {
        try {
            let carritos = await carritoModel.find({});
            carritos.forEach(producto=> {
                carritosS = JSON.stringify(producto);
                console.log(carritosS) 
                return carritosS
            })
        }catch(error) {
            console.log(error)
        }
        }

    async createCarrito(cart) {
        try {
            const cart = await carritoModel.find({});
            const newId = cart.length()++
            const newCart = new  carritoModel({id: newId, productos:[], timestamp: new Date()});
            await newCart.save();
            return newCart
        }catch(error){
            console.log(error)
        }
    }

    async getCartByID(id) {
        try {
            const foundCart = await carritoModel.findById(id);
            if (foundCart === null){
                console.log("El carrito no se encuentra")
            }else{
                return foundCart
            }
        }catch(error){
            console.log(error)
        }
    }

    async deleteCarritoById(id) {
        try {
                deletedCart = await carritoModel.findByIdAndDelete(id)
                return deletedCart
        }catch(error){
            console.log(error)
        }
    }

    async addProductCart(idCart, idProduct) {
        try {
                const cart = await carritoModel.findById(idCart);
                if (cart !== null ){
                    const product = await productosModel.findById(idProduct);
                    if (product !== null ){
                        await cart.productos.push(product)
                        await carritoModel.findByIdAndUpdate(idCart , cart)
                        return cart.productos
                    }else{
                        console.log("Producto no encontrado")
                    }
                }else{
                    console.log("Carrito no encontrado")
                }
        }catch(error){
            console.log(error)
        }
    }

    async deleteProductInCart(idCart, idProduct) {
        try {                
            const cart = await carritoModel.findById(idCart);
            if (cart !== null ){
                const product = await productosModel.findById(idProduct);
                if (product !== null ){
                    await carritoModel.findByIdAndDelete(idCart , cart);
                    console.log('Producto Eliminado')
                    return cart.productos
                }else{
                    console.log("Producto no encontrado")
                }
            }else{
                console.log("Carrito no encontrado")
            }

        }catch(error){
            console.log(error)
        }
    }



}