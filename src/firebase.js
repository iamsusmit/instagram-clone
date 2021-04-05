import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC6fCi_aAnBbrV6Hxi7PZ8bIUtf152VCOU",
    authDomain: "instagram-clone-b8056.firebaseapp.com",
    projectId: "instagram-clone-b8056",
    storageBucket: "instagram-clone-b8056.appspot.com",
    messagingSenderId: "559102063245",
    appId: "1:559102063245:web:beff1349260720483168c4",
    measurementId: "G-S31VTPNK9G"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }