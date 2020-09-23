import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDCFg0JXxmyeKi5sOlyRAK5d_FxkESCVrE",
    authDomain: "fakebook-1de58.firebaseapp.com",
    databaseURL: "https://fakebook-1de58.firebaseio.com",
    projectId: "fakebook-1de58",
    storageBucket: "fakebook-1de58.appspot.com",
    messagingSenderId: "20977846947",
    appId: "1:20977846947:web:0e70c658914b9715d64d16"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;