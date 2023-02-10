import React from "react";
import useFirebaseStorage from "./UseFirebaseStorage";

function DisplayData() {
  const data = useFirebaseStorage((json) => {
    console.log(json);
  });

  return null;
}

export default DisplayData;
