import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./login.css";
import axios from "axios";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userdata, setUserData] = useState([]);
  const navigate = useNavigate();

  // Function to fetch data from external API
  const fatchUserData = async () => {
    try {
      // Replace the URL with the actual API URL
      const response = await axios.get("http://localhost:8000/api/auth/login/");
      setUserData(response.data); //correctly set user data
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message); // Display the specific error message from the API
      } else if (err.request) {
        setError("Network error: Unable to reach the server."); // Handle network errors
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };
  // Fetch user data on component mount
  useEffect(() => {
    fatchUserData();
  }, []);

  //handeling the submmitiom form
  const submit = (e) => {
    e.preventDefault();
    // Ensure userdata is loaded before running .find()
    if (!userdata || userdata.length === 0) {
      setError("User data not loaded yet.");
      return;
    }
    // Find user with matching email and password
    const validUser = userdata.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      navigate("/Dashbord");
    } else {
      setError("Invalid email or password");
    }
  };

  // Return a loading spinner or message while fetching data
  return (
    <div className="App">
      <div className="background">
        <form className="form" onSubmit={submit}>
          <div className="admin_card">
            <div className="admin">Admine login </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="input-box">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="check-box">
              <input type="checkbox" />
              Remember me
            </div>
            <div className="submit-btn">
              <div>
                <input type="submit" />
              </div>
              <a href="#">Forget password</a>
            </div>
            <p>
              dont have an account <Link to="/Register"> sigin</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Loginpage;
