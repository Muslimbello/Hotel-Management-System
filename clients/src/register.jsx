import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import React from "react";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  //refrash the page after submition

  // Function to validate the username length
  const validateUsername = (username) => {
    // Username must be between 2 and 20 characters long
    return username.length >= 2 && username.length <= 20;
  };
  // Function to handle form submission
  const submit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate the username length
    if (!validateUsername(username)) {
      setError("Username must be between 2 and 20 characters"); // Set error message if validation fails
      return; // Exit the function if validation fails
    }
    if (email === "") {
      setError("You Email is Empty"); // Set error message if validation fails
      return;
    }
    // Validate password and confirm password match
    if (password !== confirmpassword) {
      setError("Passwords do not match"); // Set error message if passwords do not match
      return; // Exit the function if passwords do not match
    }
    if (password === "") {
      setError("Passwords is empty"); // Set error message if passwords do not match
      return; // Exit the function if passwords do not match
    }
    console.log(username, email);
    alert("successfull");

    // Make a POST request to the server with user data
    try {
      await axios.post("http://localhost:8000/api/auth/register/", {
        username: username,
        email: email,
        password: password,
      });
      // Handle successful submission (e.g., redirect or show success message)
      alert("successfull");
      navigate("/Dashbord");
    } catch (err) {
      // Display only the error message instead of the entire object
      if (err.response && err.response.data) {
        setError(err.response.data.message); // Display the specific error message
      } else {
        setError("Registration failed. Please try again later.");
      }
    }
  };
  return (
    <div className="App">
      <div className="background">
        <form onSubmit={submit} className="form">
          <div className="admin_card">
            <div className="admin">Admine login </div>
            <div className="input-box">
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Username"
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                value={confirmpassword}
                onChange={(e) => {
                  setConfirmpassword(e.target.value);
                }}
                placeholder="confirm-Password"
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="submit-btn">
              <div>
                <input type="submit" value="Register" />
              </div>
            </div>
            <p>
              i have an account <Link to="/login"> Sigup</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
