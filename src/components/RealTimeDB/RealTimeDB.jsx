import React, { useState } from "react";
import firebase from "../../firebase";
import { getDatabase, ref, push } from "firebase/database";

const RealTimeDB = () => {
  const [value] = useState({
    owner: "Jhon Doe",
    doctor: "Jack Doe",
    ordonnances: [
      {
        designation: "paracet",
        forme: "comprimé",
      },
    ],
  });

  function handleSubmit(e) {
    e.preventDefault();
    const db = getDatabase();
    push(ref(db, "ordonnances/"), value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Save</button>
    </form>
  );
};

export default RealTimeDB;
