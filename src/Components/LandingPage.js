import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  // Function to handle Create Event button click, checking if the user is logged in
  const handleCreateEventClick = () => {
    if (localStorage.getItem('authenticated')) {
      navigate('/create-event');
    } else {
      alert("Please log in to create an event.");
      navigate('/auth');
    }
  };

  return (
    <div className="landing-container">
      <div className="top-right-buttons">
        <button>Discover</button>
        <button onClick={handleCreateEventClick}>Create Event</button>
        <button onClick={() => navigate('/auth')}>Log In</button>
      </div>
      <h1 className="header-text">Where sports meet friendship</h1>
      <p className="subheader-text">Host and join events to watch your favorite sports games.</p>
      <p className="subheader-text">Share the thrill of the game together.</p>
      <button className="styled-button" onClick={handleCreateEventClick}>Create Event</button>
    </div>
  );
}

export default LandingPage;