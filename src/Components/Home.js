import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Events from './Events'; // Import events data
import { FaSearch } from "react-icons/fa";
import { signOut, fetchUserAttributes } from '@aws-amplify/auth'; // Import fetchUserAttributes

export const SearchBar = ({ setResults, events, onEventSelect }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    const filteredResults = events.filter((event) =>
      value && event.eventName.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="s-button">
      <FaSearch id="search-icon" />
      <input
        placeholder="Find event..."
        className="search-button"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

function HomePage() {
  const navigate = useNavigate();
  const [events, setEvents] = useState(Events);
  const [username, setUsername] = useState(''); // For displaying the user's name
  const [results, setResults] = useState([]);

  const handleLogout = async () => {
    try {
      await signOut(); // Sign out using Amplify
      navigate('/'); // Redirect to login page
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const attributes = await fetchUserAttributes(); // Fetch user attributes
        const usernameAttr = attributes.find(attr => attr.Name === 'preferred_username'); // Find preferred_username
        if (usernameAttr) {
          setUsername(usernameAttr.Value); // Set username
        } else {
          setUsername('Guest'); // Fallback
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        setUsername('Guest');
      }
    }

    fetchUserDetails(); // Fetch user details on page load

    // Load newly created events from localStorage
    const storedEvents = JSON.parse(localStorage.getItem('createdEvents')) || [];
    setEvents([...Events, ...storedEvents]);
  }, []);

  return (
    <div>
      <h2>Welcome {username ? username : 'Guest'}!</h2>

      <SearchBar setResults={setResults} events={events} />

      {results && results.length > 0 && (
        <>
          <h3>Search Results:</h3>
          <div className="results-list">
            {results.map((result, id) => (
              <div key={id} className="search-result">
                {result.eventName}
              </div>
            ))}
          </div>
        </>
      )}

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>

      <div className="events-grid">
        {events.map((event) => (
          <div key={event._id} className="event-card">
            <h3>{event.eventName}</h3>
            <p>Start: {event.startDateTime}</p>
            <p>End: {event.endDateTime}</p>
            <p>Location: {event.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
