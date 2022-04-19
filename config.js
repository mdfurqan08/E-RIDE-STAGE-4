import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDkQU_blcD31nKskxsNe4TBeu710o_Swo",
    authDomain: "e-ride-stage-660ac.firebaseapp.com",
    projectId: "e-ride-stage-660ac",
    storageBucket: "e-ride-stage-660ac.appspot.com",
    messagingSenderId: "849162640237",
    appId: "1:849162640237:web:33a2efbb2362286036d864",
    measurementId: "G-GKJS1X5M5D"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
