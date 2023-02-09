import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAvnajhh3AShTTvNOL_wAabYNsBnPbzbEU",
    authDomain: "gpl3-cc9ca.firebaseapp.com",
    projectId: "gpl3-cc9ca",
    storageBucket: "gpl3-cc9ca.appspot.com",
    messagingSenderId: "20444428493",
    appId: "1:20444428493:web:bb2bf391efb6a3239a1184",
    measurementId: "G-QLYPV3HS3N"
};

firebase.initializeApp(firebaseConfig);

export default firebase;