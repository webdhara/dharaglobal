import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyDMkveVMywAdo-vC2niMjO6Rw4E17IAFjs",
    authDomain: "certificate-verification-4c47c.firebaseapp.com",
    databaseURL: "https://certificate-verification-4c47c-default-rtdb.firebaseio.com",
    projectId: "certificate-verification-4c47c",
    storageBucket: "certificate-verification-4c47c.appspot.com",
    messagingSenderId: "312051762679",
    appId: "1:312051762679:web:b29c309e319c3b72a01af2",
    measurementId: "G-RYL8KLSXMY"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;