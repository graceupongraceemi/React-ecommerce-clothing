import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDfEx5pMqmJCa7wU7BMQeZdqeOj84AG3sk',
  authDomain: 'ecommerce-clothing-db-a1bb4.firebaseapp.com',
  projectId: 'ecommerce-clothing-db-a1bb4',
  storageBucket: 'ecommerce-clothing-db-a1bb4.appspot.com',
  messagingSenderId: '277116747822',
  appId: '1:277116747822:web:91d5f7cff61a21854f5fbf'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
