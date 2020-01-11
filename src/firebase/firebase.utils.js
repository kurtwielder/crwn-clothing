import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD3RpP9jmbP0A9r9--uock6g4zn-kwNjhw",
    authDomain: "crwn-db-b2d9e.firebaseapp.com",
    databaseURL: "https://crwn-db-b2d9e.firebaseio.com",
    projectId: "crwn-db-b2d9e",
    storageBucket: "crwn-db-b2d9e.appspot.com",
    messagingSenderId: "657090505628",
    appId: "1:657090505628:web:82cafbfc7602b066d87659"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;