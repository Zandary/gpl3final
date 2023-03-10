import "./Login.css";
import React, { useState } from "react";
import firebase from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Stack, Form, Card, Button } from "react-bootstrap";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    localStorage.setItem("user", "medecin");
    event.preventDefault();

    try {
      //Sign in the user with their email and password
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function () {
          // Redirect to the personalized welcome page
          if (props.user === "doctor") {
            navigate("/welcome", { replace: true });
          } else if (props.user === "patient") {
            navigate("/welcomePatient", { replace: true });
          }

          localStorage.setItem("email", email);
          localStorage.setItem("isLoggedIn", "true");
        });

      // const idToken = await user.getIdToken();

      // Store the ID token in local storage
      // localStorage.setItem('idToken', idToken);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <Card>
          <Card.Header>
            Si vous avez dejà un compte connectez vous ici
          </Card.Header>
          <Card.Body>
            <Stack gap={2}>
              <Form.Control
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                size="sm"
              />
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                size="sm"
              />
              <Button type="submit">Se connecter</Button>
            </Stack>
          </Card.Body>
        </Card>
      </form>
    </div>
  );
}

export default Login;
