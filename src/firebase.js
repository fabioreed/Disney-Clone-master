import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const  firebaseConfig = {
    apiKey: "AIzaSyDFxslAjuA1ajPOEUWssDezr_qBQ2SxsC0",
    authDomain: "disney-plus-5b92e.firebaseapp.com",
    projectId: "disney-plus-5b92e",
    storageBucket: "disney-plus-5b92e.appspot.com",
    messagingSenderId: "697521935909",
    appId: "1:697521935909:web:f125c5590f54bb55a7d1cc",
    measurementId: "G-46YL2BHWPR"
  };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    const storage = firebase.storage();


    export {auth, provider, storage};
    export default db;