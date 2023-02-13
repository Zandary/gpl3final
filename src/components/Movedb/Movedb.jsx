import firebase from "firebase/compat/app";

const Movedb = (props) => {
  const firebaseConfig = {
    apiKey: "AIzaSyAvnajhh3AShTTvNOL_wAabYNsBnPbzbEU",
    authDomain: "gpl3-cc9ca.firebaseapp.com",
    projectId: "gpl3-cc9ca",
    storageBucket: "gpl3-cc9ca.appspot.com",
    messagingSenderId: "20444428493",
    appId: "1:20444428493:web:bb2bf391efb6a3239a1184",
    measurementId: "G-QLYPV3HS3N",
    databaseURL:
      "https://gpl3-cc9ca-default-rtdb.europe-west1.firebasedatabase.app/",
  };

  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  const realtimeDb = firebase.database();

  const firestoreCollection = firestore.collection("pharmacies");

  firestoreCollection
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        realtimeDb.ref(`/pharmacies/${data.pharma}`).set(data);
      });
    })
    .catch((error) => {
      console.error(
        "Error copying Firestore collection to Realtime Database:",
        error
      );
    });
  return;
};

export default Movedb;
