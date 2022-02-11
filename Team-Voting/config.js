import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCI3znf61Ua0hft9Mmh_BORnjZS7OOZKdU",
    authDomain: "team-voting-app-ab1b0.firebaseapp.com",
    projectId: "team-voting-app-ab1b0",
    storageBucket: "team-voting-app-ab1b0.appspot.com",
    messagingSenderId: "635365574927",
    appId: "1:635365574927:web:afc08642a42d62a826d67a"
  };



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();