import admin from 'firebase-admin'
import fs from 'fs';

const serviceAccount = JSON.parse(fs.readFileSync('./codersegundaentrega-firebase-adminsdk-yv8nu-450b5bc18d.json', utf8));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount), 
    databaseURL: 'codersegundaentrega.firebaseio.com'
})

console.log('base firebase conectada');

export const db = admin.firestore();
export const productos = db.collection('productos');