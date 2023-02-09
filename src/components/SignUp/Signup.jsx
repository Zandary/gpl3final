import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
// import firebase from '../../firebase'
import 'firebase/auth';
import 'firebase/compat/firestore';
import { Button } from 'react-bootstrap';


const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [patientInfo, setPatientInfo] = useState({
        nom: '',
        prenom: '',
        birth: new Date()
      });
  const [patientGender, setPatientGender] = useState('homme');

  const [doctorInfo, setDoctorInfo] = useState({
        nom: '',
        prenom: ''
      });
  const [user, setUser] = useState(null);

  if(props.user === "patient") {
    const handlePatientSignUp = async (event) => {
      event.preventDefault();
      //add email and pwd in firebase auth
      try {
        if(password1 === password2){
          const response = await firebase.auth().createUserWithEmailAndPassword(email, password1);
          setUser(response.user);
        } else {
          console.log('Password Not Matching');
        }
        
      } catch (error) {
        console.error(error);
      }
      
      //add other patient userinfo in firestore
      console.log(patientInfo.nom, patientInfo.prenom, patientInfo.birth, patientGender );
      try {
        firebase.firestore().collection('patients').add({
          nom: patientInfo.nom,
          prenom: patientInfo.prenom,
          birth: patientInfo.birth,
          gender: patientGender,
          ordonnances: []
        })
      } catch (error) {
        console.error(error);
      }
    }

      return (
        <div className='bordure'>
          <p>Pour vous incrire, c'est ici.</p>
          {user ? (
            <div>
              <h1>Hello, {user.email}</h1>
              <button onClick={() => firebase.auth().signOut()}>Sign out</button>
            </div>
          ) : (
            <form onSubmit={handlePatientSignUp}>
              <input type="email" placeholder='E-mail' value={email} onChange={(event) => setEmail(event.target.value)} />
              <input type="password" placeholder='Mot de passe' value={password1} onChange={(event) => setPassword1(event.target.value)} />
              <input type="password" placeholder='Confirmez votre mot de passe' value={password2} onChange={(event) => setPassword2(event.target.value)} />
              <input type="text" placeholder='Nom' value={patientInfo.nom} onChange={(event) => setPatientInfo({...patientInfo, nom: event.target.value})} />
              <input type="text" placeholder='Prenom' value={patientInfo.prenom} onChange={(event) => setPatientInfo({...patientInfo, prenom: event.target.value})} />
              <div>
                <label htmlFor="start">Date de naissance:</label>
                <input type="date" id="start" name="trip-start" value={patientInfo.birth} onChange={(event) => setPatientInfo({...patientInfo, birth: event.target.value})} min="1900-01-01" max="2023-12-31"/>
              </div>
              <input type="radio" id="h" name="fav_language" value="homme" onChange={(event) => {setPatientGender(event.target.value)}}/>
              <label htmlFor="h">Homme</label><br/>
              <input type="radio" id="f" name="fav_language" value="femme" onChange={(event) => {setPatientGender(event.target.value)}}/>
              <label htmlFor="f">Femme</label><br/>
              <Button variant="primary" type="submit">Sign up</Button>
            </form>
          )}
        </div>
      );
  } else if (props.user === "doctor"){
      ///////////////////////////////////////////////////////////
      //////////  DOCTOR SECTION ////////////////////////////////
      //////////////////////////////////////////////////////////
      const handleSignUp = async (event) => {
        event.preventDefault();
        //add email and pwd in firebase auth
        try {
          const response = await firebase.auth().createUserWithEmailAndPassword(email, password1);
          setUser(response.user);
        } catch (error) {
          console.error(error);
        }

      //add other doctorInfo in firestore
        console.log(doctorInfo.nom, doctorInfo.prenom)
        try {
          firebase.firestore().collection('doctors').add({
            nom: doctorInfo.nom,
            prenom: doctorInfo.prenom
          })
        } catch (error) {
          console.error(error);
        }
    };

    return (
        <div className='bordure'>
          <p>Pour vous incrire, c'est ici.</p>
          {user ? (
            <div>
              <h1>Hello, {user.email}</h1>
              <button onClick={() => firebase.auth().signOut()}>Sign out</button>
            </div>
          ) : (
            <form onSubmit={handleSignUp}>
              <input type="email" placeholder='E-mail' value={email} onChange={(event) => setEmail(event.target.value)} />
              <input type="password" placeholder='Mot de passe' value={password1} onChange={(event) => setPassword1(event.target.value)} />
              <input type="text" placeholder='Nom' value={doctorInfo.nom} onChange={(event) => setDoctorInfo({...doctorInfo, nom: event.target.value})} />
              <input type="text" placeholder='Prenom' value={doctorInfo.prenom} onChange={(event) => setDoctorInfo({...doctorInfo, prenom: event.target.value})} />
              <Button variant="primary" type="submit">Sign up</Button>
            </form>
          )}
        </div>
      );
  } else {
    return (
      <div>
        Pharma
      </div>
    )
  }
  
};

export default Signup;
