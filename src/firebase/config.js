import firebase from "firebase";
import "firebase/auth"
import 'firebase/firestore'
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "ENTER YOUR API KEY HERE",
    authDomain: "olx-react-9ae8d.firebaseapp.com",
    projectId: "olx-react-9ae8d",
    storageBucket: "olx-react-9ae8d.appspot.com",
    messagingSenderId: "218083841876",
    appId: "1:218083841876:web:9fb5bf2b5f2f8238295ac1",
    measurementId: "G-DYN186JZRV"
  };
  export default firebase.initializeApp(firebaseConfig);
