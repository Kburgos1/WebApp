import { Amplify } from 'aws-amplify';
import outputs from "./amplify_outputs.json" ;
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'; // Your custom styles
import Home from './Components/Home.js';
import EventDetails from './Components/Eventdetails.js';
import LandingPage from './Components/LandingPage';
import CreateEvent from './Components/CreateEvents';
import AuthPage from './Components/AuthPage';
import './Components/CreateEvent.css';
import './Components/AuthPage.css';
import './Components/LandingPage.css';

// Configure Amplify
Amplify.configure(outputs);

function ProtectedRoute({ element }) {
  const isAuthenticated = localStorage.getItem('authenticated'); // Your auth check
  return isAuthenticated ? element : <Navigate to="/" />; // Redirect if not authenticated
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/event/:id" element={<ProtectedRoute element={<EventDetails />} />} />
        <Route path="/create-event" element={<ProtectedRoute element={<CreateEvent />} />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;