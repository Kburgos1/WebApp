import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp, confirmSignUp} from 'aws-amplify/auth';
import { CreateUser } from '../Utility/queries';

function formatPhoneNumber(value) {
  const phoneNumber = value.replace(/\D/g, ""); // Remove non-numeric characters
  return phoneNumber.length === 10 ? `+1${phoneNumber}` : phoneNumber; // Convert to +15555555555
}

function Register() {
  const [username, setUsername] = useState(""); // Preferred username
  const [email, setEmail] = useState(""); // Email address
  const [phoneNumber, setPhoneNumber] = useState(""); // Phone number
  const [confirmationCode, setConfirmationCode] = useState(""); // Verification code
  const [isCodeSent, setIsCodeSent] = useState(false); // Track SMS sent state
  const navigate = useNavigate();

  // Step 1: Sign-Up
  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
      alert(email+" "+formattedPhoneNumber+" "+ username)
      const user = {
        username: username,
        email: email,
        phone: formattedPhoneNumber,
        language: "en",
        concatName: username
      }

      const result = await signUp({
        username: formattedPhoneNumber, // Use phone number as username
        password: "Password1!", // Dummy password
        options: { userAttributes: {
          email: email,
          phone_number: formattedPhoneNumber,
          preferred_username: username,
        }}
  
      });

      const newUser = await CreateUser(user)

      alert("Sign-up result: " + JSON.stringify(result));
      if (!result.userConfirmed) {
        setIsCodeSent(true); // Proceed to code confirmation
        alert("A confirmation code has been sent to your phone.");
      } else {
        alert("Registration successful! You can now log in.");
        navigate("/auth");
      }
    } catch (error) {
      alert("Error registering: " + error.message);
    }
  };

   // Step 2: Confirm Sign-Up
   const handleConfirmSignUp = async (event) => {
    event.preventDefault();
    try {
      const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username: formattedPhoneNumber,
        confirmationCode: confirmationCode
      });
      alert("Registration confirmed! You can now log in.");
      navigate("/auth");
    } catch (error) {
      alert("Error confirming sign up: " + error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        {!isCodeSent ? (
          <form onSubmit={handleSignUp}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Phone Number:</label>
              <input
                type="tel"
                placeholder="(123) 456-7890"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
        ) : (
          <form onSubmit={handleConfirmSignUp}>
            <div>
              <label>Confirmation Code:</label>
              <input
                type="text"
                placeholder="Enter confirmation code"
                value={confirmationCode}
                onChange={(e) => setConfirmationCode(e.target.value)}
                required
              />
            </div>
            <button type="submit">Confirm Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;