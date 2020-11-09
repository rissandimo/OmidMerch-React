import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBlu_ZH-c89Y6nvUOlbiP64rToOGnJCWY",
    authDomain: "omidmerch-3f193.firebaseapp.com",
    databaseURL: "https://omidmerch-3f193.firebaseio.com",
    projectId: "omidmerch-3f193",
    storageBucket: "omidmerch-3f193.appspot.com",
    messagingSenderId: "600150337508",
    appId: "1:600150337508:web:f453fc85b0c89bcc0909f1",
    measurementId: "G-M86445C861"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();