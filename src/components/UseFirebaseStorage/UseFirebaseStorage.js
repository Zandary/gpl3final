import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

function useFirebaseStorage(callback) {
  const [data, setData] = useState(null);

  useEffect(() => {
    firebase.initializeApp({
        apiKey: "AIzaSyAvnajhh3AShTTvNOL_wAabYNsBnPbzbEU",
        authDomain: "gpl3-cc9ca.firebaseapp.com",
        projectId: "gpl3-cc9ca",
        storageBucket: "gpl3-cc9ca.appspot.com",
        messagingSenderId: "20444428493",
        appId: "1:20444428493:web:bb2bf391efb6a3239a1184",
        measurementId: "G-QLYPV3HS3N"
    });

    const storage = firebase.storage();
    const storageRef = storage.ref();
    const fileRef = storageRef.child("drugs.json");

    fileRef.getDownloadURL().then((url) => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          callback(json);
        });
    });
  }, );

  return data;
}

export default useFirebaseStorage;
