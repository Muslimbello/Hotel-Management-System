// src/component/CustomModal.js
import axios from "axios";
import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CustomModal = ({ show, handleClose }) => {
  const [clientName, setClientName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [roomType, setRoomType] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [error, setError] = useState("");

  // Function to validate the clientname length
  const validateUsername = (clientName) => {
    // Username must be between 2 and 20 characters long
    return clientName.length >= 2 && clientName.length <= 50;
  };

  const submit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate the username length
    if (!validateUsername(clientName)) {
      setError("Username must be between 2 and 50 characters"); // Set error message if validation fails
      return; // Exit the function if validation fails
    }
    // Make a POST request to the server with user data
    try {
      await axios.post("https://localhost:8000/modal/", {
        clientName,
        address,
        phone,
        roomNumber,
        roomType,
        checkInDate,
        checkOutDate,
      });
      // Handle successful submission (e.g., redirect or show success message)
      alert("successfull");
    } catch (err) {
      // Display only the error message instead of the entire object
      if (err.response && err.response.data) {
        setError(err.response.data.message); // Display the specific error message
      } else {
        setError("Booking failed. Please try again later.");
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose} className="modal">
      <Modal.Header closeButton>
        <Modal.Title>Book Your Reservation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form className="modal_form" onSubmit={submit}>
          <div className="modal_input1">
            <p>Name of Customer</p>
            <input
              type="text"
              placeholder="Full Name"
              value={clientName}
              onChange={(e) => {
                setClientName(e.target.value);
              }}
            />
          </div>
          <div className="modal_input1">
            <p>Customers Address</p>
            <input
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              placeholder="Address"
            />
          </div>
          <div className="modal_input1">
            <p>Customers phone number</p>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="phone Number"
            />
          </div>
          <div className="modal_input3">
            <p>Select Room Type</p>
            <select
              value={roomType}
              onChange={(e) => {
                setRoomType(e.target.value);
              }}
            >
              <option value="">Select Room</option>
              <option value="FamilyRoom">Family room</option>
              <option value="SingleRoom">Single room</option>
            </select>
          </div>
          <div className="modal_input3">
            <p>Select Room number</p>
            <select
              value={roomNumber}
              onChange={(e) => {
                setRoomNumber(e.target.value);
              }}
            >
              <option value="">Select Room number</option>
              <option value=" Room1"> Room1 Family size</option>
              <option value=" Room2"> Room2 Family size</option>
              <option value=" Room3"> Room3 Single</option>
              <option value=" Room4"> Room4 Single</option>
              <option value=" Room5"> Room5 Single</option>
              <option value=" Room6"> Room6 Single</option>
              <option value=" Room7"> Room7 Single</option>
              <option value=" Room8"> Room8 Single</option>
              <option value=" Room9"> Room9 Single</option>
              <option value=" Room10"> Room10 Single</option>
            </select>
          </div>
          <div className="modal_input4">
            <p>Check in</p>
            <input
              type="date"
              onChange={(e) => {
                setCheckInDate(e.target.value);
              }}
            />
          </div>
          <div className="modal_input4">
            <p>Check out</p>
            <input
              type="date"
              onChange={(e) => {
                setCheckOutDate(e.target.value);
              }}
            />
          </div>
          <div className="btnm">
            <input type="submit" />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
