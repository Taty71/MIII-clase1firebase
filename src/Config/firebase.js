import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5Arfb99SJlJQNa9GIObKb6QV8s6RIUbE",
    authDomain: "dr2022firebasem3.firebaseapp.com",
    projectId: "dr2022firebasem3",
    storageBucket: "dr2022firebasem3.appspot.com",
    messagingSenderId: "367247915978",
    appId: "1:367247915978:web:0eeaea7d514169a0e32d33"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
