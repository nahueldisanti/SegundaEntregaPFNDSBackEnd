import admin from 'firebase-admin'
import fs from 'fs';
import db from '../../config/db/firebase.js'
import productos from '../../config/db/firebase.js'

//Clase Contenedor

export default class ContenedorFB {

    async getAll() {
        try {
            const snapshot = await productos.get();
            if (!snapshot.exists) {
                console.log (`no hay productos`)
            }else{
                snapshot.forEach(doc => {
                    console.log(doc.id, '=>', doc.data());
                    });
                    return snapshot
            }

            } catch (error) {
            console.log(error)
            }
    }

    async getByID(id) {
        try{
            const doc = query.doc(`${id}`)
            const product = await doc.get()
            const res = product.data()
            console.log(res)

        }catch(error){
            console.log(error)
        }
    }

    async save(newProd) {
        try {
            const saved = await productos.doc().set({name: newProd.name, price: newProd.pruce, thumbnail: newProd.thumbnail, stock: newProd.stock})
        }catch(error){
            console.log(error)
        }
    }

    async deleteById(id) {
        try{
            const doc = query.doc(`${id}`);
            const deleteItem = await doc.delete();
            console.log(`EL producto con id: ${id} ha sido eliminado`, deleteItem);

        }catch(error){
            console.log(error)
        }
    }
}





