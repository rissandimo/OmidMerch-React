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

  export const addCollectionAndDocumentsToFirestore = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();

    // Loop through category array (Womens, Localpickup etc...)
    objectsToAdd.forEach(obj => {

      // Generate id for each category in collection
      const newDocRef = collectionRef.doc(obj.title);
      
      // Create Key/Value pairs = sd97sdf7d/Womens Object
      batch.set(newDocRef, obj)
    });

    await batch.commit();
  }

  export const convertCollectionsArraySnapshotToMap = (products) => {

    // convert array of array to array of objects
    // 0 : {id, housewares, items}
    // 1 : {id, womens, items}
    const transformedCollection = products.docs.map(doc => {
      const { title, items } = doc.data();

      console.log('converted products map version:');
      return {
        routeName: encodeURI(title.toLowerCase()), // parses String to adhere to proper url format
        id: doc.id,
        title,
        items
      }
    });

    // convert array of objects to objects of objects
    // {
    //    {womens: {}}
    //    {housewares: {}}
    // }
    // title(lowercase): respective collection
    // womens: womens products
    return transformedCollection.reduce((accumulator, product) => {
      accumulator[product.title.toLowerCase()] = product;
      return accumulator
    }, {});

    
  }

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;