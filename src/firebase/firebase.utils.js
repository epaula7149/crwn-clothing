import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDrG5Udhwjy5F-Km5TnmtBkx7C5hgHvsyM",
    authDomain: "epacrwn-db.firebaseapp.com",
    projectId: "epacrwn-db",
    storageBucket: "epacrwn-db.appspot.com",
    messagingSenderId: "713631108663",
    appId: "1:713631108663:web:5e0bb5fe9efce7195a39b2",
    measurementId: "G-11SV1Z27CS"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
