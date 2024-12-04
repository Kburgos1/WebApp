import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateEvent.css';
import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createEvent } from "./graphql/mutations";

  mutation CreateEvent($input: CreateEventInput!) {
    createEvent(input: $input) {
      id
      title
      description
      address
      startDatetime
    }
  }
;
function CreateEvent() {
  const navigate = useNavigate();
  
  // State to store form values
  const [eventName, setEventName] = useState('');
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [location, setLocation] = useState('');
  const [host, setHost] = useState('');
  const [guests, setGuests] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('authenticated')) {
      alert("Please log in to create an event.");
      navigate('/auth');
    }
  }, [navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the logic to save the event data (e.g., send it to an API or store it in localStorage)
    const newEvent = {
      eventName,
      startDateTime,
      endDateTime,
      address: location,
      hostname: host,
      guests: guests.split(',').map((guest, index) => ({
        id: index,
        name: guest.trim() // Remove leading/trailing spaces
      })),
    };

    // Save the newly created event to localStorage
    const existingEvents = JSON.parse(localStorage.getItem('createdEvents')) || [];
    const updatedEvents = [...existingEvents, newEvent];
    localStorage.setItem('createdEvents', JSON.stringify(updatedEvents));
    
    alert('Event created successfully!');
    navigate('/home'); // Redirect to home page or another page after event creation
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
        
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}
export const createEvent = /* GraphQL */ 
//export default CreateEvent;