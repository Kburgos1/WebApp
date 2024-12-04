import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, confirmSignIn } from "aws-amplify/auth"

function formatPhoneNumber(value) {
  const phoneNumber = value.replace(/\D/g, ""); // Remove non-numeric characters
  return phoneNumber.length === 10 ? `+1${phoneNumber}` : phoneNumber; // Convert to +15555555555
}

function Login() {
  const [phoneNumber, setPhoneNumber] = useState(""); // Phone number for Cognito
  const [smsCode, setSmsCode] = useState(""); // SMS verification code
  const [isCodeSent, setIsCodeSent] = useState(false); // Flag to track SMS code sent
  const navigate = useNavigate();

  // Step 1: Initiate Sign-In
  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
      const user = await signIn({ username: formattedPhoneNumber, password: 'Password1!', options: { authFlowType: "USER_PASSWORD_AUTH" } }) ;
      //if (user.challengeName === "SMS_MFA") {
        setIsCodeSent(true);
        alert("A confirmation code has been sent to your phone.");
      //}
    } catch (error) {
      alert("Error signing in: " + error.message);
    }
  };

  // Step 2: Confirm Sign-In
  const handleConfirmSignIn = async (event) => {
    event.preventDefault();
    try {
      const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
      const result = await confirmSignIn({
        challengeResponse: smsCode,
      });
      if (result) {
        // Save authentication state
        localStorage.setItem("authenticated", "true");
        localStorage.setItem("username", formattedPhoneNumber);
        alert("Sign in successful!");
        
        // Redirect to home
        navigate("/home"); 
      }
    } catch (error) {
      alert("Error confirming sign in: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {!isCodeSent ? (
          <form onSubmit={handleSignIn}>
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
            <button type="submit">Send SMS Code</button>
          </form>
        ) : (
          <form onSubmit={handleConfirmSignIn}>
            <div>
              <label>SMS Code:</label>
              <input
                type="text"
                placeholder="Enter SMS code"
                value={smsCode}
                onChange={(e) => setSmsCode(e.target.value)}
                required
              />
            </div>
            <button type="submit">Confirm Sign In</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
