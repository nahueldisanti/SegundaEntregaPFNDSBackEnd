import { ShaCertificate } from 'firebase-admin/lib/project-management/android-app.js';
import { productos } from '../../config/db/firebase.js';
import productosModel from '../../config/db/mongo.js'

export default class ContenedorMongo {

    async getAllMongo() {
        try{ 
            let productos = await productosModel.find({});
            productos.forEach(producto=> {
                productosS = JSON.stringify(producto);
                console.log(productosS) 
                return productosS
            })
        }catch(error) {
            console.log(error)
        }
    }

    async getById(id) {
        try {
            const foundProduct = await productosModel.find({id: id});
            return foundProduct

        }catch(error) {
            console.log(error)
        }
    }
    
    async save(product) {
        const newProduct = new productosModel({name: product.name, price: product.price, thumbnail: product.thumbnail, stock: product.stock});
        const savedProduct = newProduct.save()
        console.log(`Producto guardado`)
        return savedProduct
    } 

    async deleteAll() {
        try{
            const deleteAll = await productosModel.deleteMany({})
            console.log(`Eliminados con exito`);
            return deleteAll
        }catch(error){
            console.log(error)
        }}

    async deleteById(id) {
        try{
            const deleteById = await productosModel.findOneAndDelete({id: id})
            console.log(`Eliminado con exito`);
            return deleteById
        }catch(error){
            console.log(error)
        }}
}