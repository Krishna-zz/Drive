
const Firebase = require('firebase-admin')
const firebasestorage = require('@google-cloud/firestore')
const { credential } = require('firebase-admin')
const admin = require('firebase-admin')
const serviceAccount = require('../drive-b9ffc-firebase-adminsdk-fbsvc-677acf1fe1.json')


admin.initializeApp({
    credential:Firebase.credential.cert(serviceAccount),
    storageBucket:'drive-b9ffc.firebasestorage.app',
    
})


const bucket = admin.storage().bucket()

module.exports = bucket
