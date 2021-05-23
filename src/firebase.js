import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDBVXhPI4kRNpB2F2zvwGCtWu-NNxdilA",
    authDomain: "facebook-clone-6c7d6.firebaseapp.com",
    projectId: "facebook-clone-6c7d6",
    storageBucket: "facebook-clone-6c7d6.appspot.com",
    messagingSenderId: "711699913104",
    appId: "1:711699913104:web:bac275e7a8105654913b15",
    measurementId: "G-LWGRMK1SNV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;