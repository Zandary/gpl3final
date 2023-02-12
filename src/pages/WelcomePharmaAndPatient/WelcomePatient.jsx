import React from "react";

const WelcomePatient = () => {
  return <div>Welcome {localStorage.getItem("name")}</div>;
};

export default WelcomePatient;
