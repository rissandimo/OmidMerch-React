import firebase from 'firebase/app';
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

  /*
  collectionKey = collection name
  objectsToAdd = shop data
  obj = Womens, Jewelry, etc...
  */
  export const addCollectionAndDocumentsToFirestore = async (collectionKey, objectsToAdd) => {

    // Create collection ref (collection name)
    const collectionRef = firestore.collection(collectionKey);

    console.log('collection ref', collectionRef);

    const batch = firestore.batch();

    // Loop through category array (Womens, Localpickup etc...)
    objectsToAdd.forEach(obj => {

      // Generate id for each category in collection
      const newDocRef = collectionRef.doc();
      
      // // Create Key/Value pairs = sd97sdf7d/Womens Object
      batch.set(newDocRef, obj);
    });

    return await batch.commit();
  }

  export const convertCollectionsArraySnapshotToMap = (collections) => {

    // convert array of array(firestore) to array of objects(transformedCollection)
    // 0 : {id, housewares, items}
    // 1 : {id, womens, items}
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()), // parses String to adhere to proper url format
        id: doc.id,
        title,
        items
      }
    });
    // console.log('converted products map version:');
    // console.log(transformedCollection);

    // convert array of objects(transformedCollection) to objects of objects(after reduce)
    // {
    //    {womens: {}}
    //    {housewares: {}}
    // }
    // title(lowercase): respective collection
    // womens: womens products
    // Start off with empty object. For every iteration - the object key = category name, and the value will be assigned the current collection
   return transformedCollection.reduce((accumulator, collection) => { // 'return' return the result(object of objects)
    //  replace id with title
     accumulator[collection.title.toLowerCase()] = collection; // for every collection (womens, jewelry, etc..)
     return accumulator; // go to next iteration
   }, {}); // {} pass in initial object = empty
  }

  export const saveOrderToFirestore = (userAuth, token, purchaseDetails) => {
    firestore.collection('users')
            .doc(userAuth?.id)
            .collection('orders')
            .doc(token.id)
            .set({
              cartItems: purchaseDetails.cartItems,
              price: purchaseDetails.price,
              created: token.created
            }).then(() => console.log('purchase saved to database'))
            .catch(error => console.log(error.message))
  }

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;