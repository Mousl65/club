import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB3vgtGOolU_4Cwpsyp3oD-47RE-lcmOZM",
    authDomain: "sport2-4037d.firebaseapp.com",
    projectId: "sport2-4037d",
    storageBucket: "sport2-4037d.appspot.com",
    messagingSenderId: "110888062056",
    appId: "1:110888062056:web:19911e63a988fb5794ffdd",
    measurementId: "G-JYPD3EW404"
});
  
  const db = firebaseApp.firestore();
  export {db}