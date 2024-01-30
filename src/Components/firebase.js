import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
var firebaseConfig = {
   apiKey: "AIzaSyA1Zh1V7ireKB53z0dqpS4S6oAL3aA5E0Q",
  authDomain: "dharaglobals.firebaseapp.com",
  projectId: "dharaglobals",
  storageBucket: "dharaglobals.appspot.com",
  messagingSenderId: "113770209207",
  appId: "1:113770209207:web:51b00c92d707881de19232",
  measurementId: "G-HKDS2FGQNQ"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
