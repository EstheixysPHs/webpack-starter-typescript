import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDbsgHlWZbUOXUpmhfF2B_V7-7SFXNmBAY",
    authDomain: "sql-estheixysph.firebaseapp.com",
    projectId: "sql-estheixysph",
    storageBucket: "sql-estheixysph.appspot.com",
    messagingSenderId: "119900773626",
    appId: "1:119900773626:web:9defb8636d726636befd43",
    measurementId: "G-QGS27YW67P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  console.log('Firebase configurado');

  export default firebase.firestore();