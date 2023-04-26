import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAq4uR8TuBEIyByw5KkFZ_nJpRkMouqctU",
    authDomain: "ainshams-press.firebaseapp.com",
    databaseURL: "https://ainshams-press-default-rtdb.firebaseio.com",
    projectId: "ainshams-press",
    storageBucket: "ainshams-press.appspot.com",
    messagingSenderId: "54216635307",
    appId: "1:54216635307:web:a038383c83c066bf8158ee",
    measurementId: "G-Q3EGHGKY82"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;