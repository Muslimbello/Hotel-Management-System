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
    <div className="Booking">
      <h3>Bookings</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Room Number</th>
            <th>Room Type</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.clientName}</td>
              <td>{booking.address}</td>
              <td>{booking.phone}</td>
              <td>{booking.roomNumber}</td>
              <td>{booking.roomType}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
