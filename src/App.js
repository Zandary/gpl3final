import './App.css';
import Home from './pages/Home';
import LandingPage from './components/LandingPage/LandingPage'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import WelcomeWrapper from './pages/WelcomePharmaAndPatient/WelcomeWrapper';
import NavBarre from './components/NavBarre/NavBarre';
import RealTimeDB from './components/RealTimeDB/RealTimeDB';

function App() {
  return (
    <div className="App">
      <NavBarre/>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/landing" element={<LandingPage/>} />
          <Route path="/doctorLogin" element={<Home user='doctor'/>} />
          <Route path="/patientLogin" element={<Home user='patient'/>} />
          <Route path="/pharmaLogin" element={<Home user='pharma'/>} />
          <Route path="/welcomePharma" element={<WelcomeWrapper user='pharma'/>} />
          <Route path="/welcomePatient" element={<WelcomeWrapper user='patient'/>} />
          <Route path="/realtime" element={<RealTimeDB/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
