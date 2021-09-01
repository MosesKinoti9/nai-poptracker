import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCC4CuPTb1t58tLq3C9t6RSdNfk9LfsPdc",
    authDomain: "cs-naipoptracker.firebaseapp.com",
    projectId: "cs-naipoptracker",
    storageBucket: "cs-naipoptracker.appspot.com",
    messagingSenderId: "4675952572",
    appId: "1:4675952572:web:47e6806737877acc4815b9",
    measurementId: "G-HKD3YWS7TX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;