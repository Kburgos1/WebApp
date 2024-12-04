import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function EventDetails() {
  const location = useLocation();
  const event = location.state?.event; // Get event details passed via state
  const navigate = useNavigate();

  if (!event) {
    return <p>No event data found.</p>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button> {/* Go back to previous page */}
      <h2>{event.eventName}</h2>
      <p><strong>Host:</strong> {event.hostname}</p>
      <p><strong>Address:</strong> {event.address}</p>
      <p><strong>Start Date:</strong> {event.startDateTime}</p>
      <p><strong>End Date:</strong> {event.endDateTime}</p>
      <h3>Guests:</h3>
      <ul>
        {event.guests.map(guest => (
          <li key={guest.id}>{guest.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventDetails;