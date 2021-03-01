import firebase from "firebase/app";
//firebaseで使うサービスを別途インポート
import "firebase/auth";


// このファイルはfirebaseの基本設定などを書く
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCTkO3qfw_LALeXtCOxljHUL0mrHjPpzX4",
    authDomain: "chatapp-f96d3.firebaseapp.com",
    projectId: "chatapp-f96d3",
    storageBucket: "chatapp-f96d3.appspot.com",
    messagingSenderId: "131039163837",
    appId: "1:131039163837:web:92248ab99fe6d480058ed4",
    measurementId: "G-CRQMQ3D0BR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export const auth = firebase.auth()

  export default firebase;