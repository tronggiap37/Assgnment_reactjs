import firebase from "firebase/app";
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyCQptzWhZQekqI_gmvfioVcmoFvdXKtI0s",
    authDomain: "upload-img-6685b.firebaseapp.com",
    DatabaseURL: "https://upload-img-6685b.firebaseio.com",
    projectId: "upload-img-6685b ",
    storageBucket: " upload-img-6685b.appspot.com ",
    messagingSenderId: " 446.236.537.296 ",
    AppID: " 1: 446.236.537.296: web: a48405cad77ae7ba2e49d5 ",
    measurementId: " G-RXDKKH9ZJY ",
}; 
    firebase.initializeApp(firebaseConfig)

    const storage = firebase.storage();

    export {storage, firebase as default};
