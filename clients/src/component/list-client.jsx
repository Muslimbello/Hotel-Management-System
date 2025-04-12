import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const List = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  // Function to fetch all bookings from the API
  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:8000/booking/");
      setBookings(response.data); // Set the fetched data into the bookings state
    } catch (err) {
      setError("Failed to load Client information.");
    }
  };

  // Fetch bookings on component mount
  useEffect(() => {
    fetchBookings();
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (bookings.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="List">
      <h3>Bookings</h3>
      <table border="1" className="list-table">
        <thead className="list-table-head">
          <tr>
            <th className="list-table-row">Client Name</th>
            <th className="list-table-row">Address</th>
            <th className="list-table-row">Phone</th>
            <th className="list-table-row">Room Number</th>
            <th className="list-table-row">Room Type</th>
            <th className="list-table-row">Check-in Date</th>
            <th className="list-table-row">Check-out Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="list-table-body">{booking.clientName}</td>
              <td className="list-table-body">{booking.address}</td>
              <td className="list-table-body">{booking.phone}</td>
              <td className="list-table-body">{booking.roomNumber}</td>
              <td className="list-table-body">{booking.roomType}</td>
              <td className="list-table-body">{booking.checkInDate}</td>
              <td className="list-table-body">{booking.checkOutDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
