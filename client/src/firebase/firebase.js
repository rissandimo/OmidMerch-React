import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


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

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }


  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;

    // get user doc ref
    const userDocRef = firestore.doc(`users/${userAuth.uid}`);

    // get user snapshot ref
    const userSnapshotRef = await userDocRef.get();

    // execute if user doesn't exists in firestore db
    if(!userSnapshotRef.exists){
      const { displayName, email } = userAuth;
      const dateCreated = new Date();

      try{
        await userDocRef.set({
           displayName,
           email,
           dateCreated,
           ...additionalData
        })
      }
      catch(error){
        console.log('Error creating user: ', error.message);
      }
    }

    // return existing user or new user in db
    return userDocRef;

  }

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;