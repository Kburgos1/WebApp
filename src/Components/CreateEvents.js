import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateEvent.css';
import amplifyConfig from "../amplify_outputs.json"; // Import amplify-output.json

function CreateEvent() {
  const navigate = useNavigate();

  const [eventName, setEventName] = useState('');
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [location, setLocation] = useState('');
  const [host, setHost] = useState('');
  const [guests, setGuests] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem('authenticated')) {
      alert("Please log in to create an event.");
      navigate('/auth');
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const newEvent = {
      title: eventName,
      description: `Hosted by ${host}`,
      address: location,
      startDatetime: '2024-12-03T12:00:00Z',
    };

    // GraphQL Mutation
    const mutation = `
      mutation CreateEvent($input: CreateEventInput!) {
        createEvent(input: $input) {
          id
          title
          description
          address
          startDatetime
        }
      }
    `;

    try {
      const response = await fetch(amplifyConfig.data.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': amplifyConfig.data.api_key,
        },
        body: JSON.stringify({
          query: mutation,
          variables: { input: newEvent },
        }),
      });

      const result = await response.json();

      if (result.errors) {
        console.error("Error creating event:", result.errors);
        setError("Failed to create the event. Please try again.");
        return;
      }

      console.log("Event created successfully:", result.data.createEvent);
      alert('Event created successfully!');
      navigate('/home'); // Redirect to home page
    } catch (err) {
      console.error("Error creating event:", err);
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-event-container">
      <h1>Create Event</h1>
      <form className="create-event-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Name:</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Start Date and Time:</label>
          <input
            type="datetime-local"
            value={startDateTime}
            onChange={(e) => setStartDateTime(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>End Date and Time:</label>
          <input
            type="datetime-local"
            value={endDateTime}
            onChange={(e) => setEndDateTime(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Host:</label>
          <input
            type="text"
            value={host}
            onChange={(e) => setHost(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Guests (separate with commas):</label>
          <input
            type="text"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Event"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default CreateEvent;
