import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const productoSchema = new mongoose.Schema({
    name: {
        type:String, require
    },
    price: Number, 
    thumbnail: String, 
    stock: Number, 
    id : {
        type:Number, unique: true
    }
});

const carritoSchema = new mongoose.Schema({
    productos: Array,
    id: Number, unique: true, 
    timestamp: String
});

export const productosModel = mongoose.model('productos', productoSchema);
export const carritoModel = mongoose.model('carrito', carritoSchema);
const connectionStringUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}/${process.env.MONGO_COLLECTION}?retryWrites=true&w=majority`


try{
    await mongoose.connect(connectionStringUrl, {
        useUnifiedTopology: true
    })
    console.log('Base de datos conectada')
}catch(errot){
    console.log(`Ha habido un error en la config del server mongo ${error}`)
}
