const Firebase = require('firebase-admin')

const serviceAccount = require('../drive-b9ffc-firebase-adminsdk-fbsvc-677acf1fe1.json')

const firebase = Firebase.initializeApp({
    
    credential:Firebase.credential.cert(serviceAccount),
    storageBucket: 'drive-b9ffc.firebasestorage.app'
})


module.exports = firebase