import './App.css';
import Home from './pages/Home';
import LandingPage from './components/LandingPage/LandingPage'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/landing" element={<LandingPage/>} />
          <Route path="/doctorLogin" element={<Home user='doctor'/>} />
          <Route path="/patientLogin" element={<Home user='patient'/>} />
          <Route path="/pharmaLogin" element={<Home user='pharma'/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
