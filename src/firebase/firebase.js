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

  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;

    const userDocRef = firestore.doc(`users/${userAuth.uid}`);

    const userSnapshotRef = await userDocRef.get();

    if(!userSnapshotRef.exists){
      const { email } = userAuth;
      const dateCreated = new Date();

      try{
        await userDocRef.set({
           email,
           dateCreated,
           ...additionalData
        })
      }
      catch(error){
        console.log('Error creating user: ', error.message);
      }
    }

    return userDocRef;

  }

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();