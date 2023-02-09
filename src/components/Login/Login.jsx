import './Login.css';
import React, { useState }  from 'react'
import firebase from '../../firebase';
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      setUser(response.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='bordure'>
      <p>Si vous avez dejà un compte connectez vous ici</p>
      {user ? (
        navigate("/welcome", {
          state: {
            email: user.email,
          }
        })
      ) : (
        <form onSubmit={handleSignIn}>
          <input type="email" placeholder='E-mail' value={email} onChange={(event) => setEmail(event.target.value)} />
          <input type="password" placeholder='Mot de passe' value={password} onChange={(event) => setPassword(event.target.value)} />
          <Button type="submit">Sign in</Button>
        </form>
      )}
    </div>
  );
}

export default Login