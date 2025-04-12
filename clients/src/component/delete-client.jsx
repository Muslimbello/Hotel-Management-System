import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const hardCodedBookings = [
  {
    id: 1,
    clientName: "John Doe",
    address: "123 Main St",
    phone: "+123456789",
    roomNumber: "101",
    roomType: "Single",
    checkInDate: "2024-09-15",
    checkOutDate: "2024-09-20",
  },
  {
    id: 2,
    clientName: "Jane Smith",
    address: "456 Oak Ave",
    phone: "+987654321",
    roomNumber: "102",
    roomType: "Double",
    checkInDate: "2024-09-16",
    checkOutDate: "2024-09-21",
  },
];

const Delete = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  // Function to fetch all bookings from the API
  //const fetchBookings = async () => {
  //try {
  //const response = await axios.get("http://localhost:8000/booking/");
  //setBookings(response.data); // Set the fetched data into the bookings state
  //} catch (err) {
  //setError("Failed to load Client information.");
  //}
  //};

  // Fetch bookings on component mount
  useEffect(() => {
    //fetchBookings();
    setBookings(hardCodedBookings);
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (bookings.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="List">
      <h3>Deleting OR Updating client information</h3>
      <table border="1" className="list-table">
        <thead className="list-table-head">
          <tr>
            <th className="list-table-row">Client Name</th>
            <th className="list-table-row">Address</th>
            <th className="list-table-row">Phone</th>
            <th className="list-table-row">Room Number</th>
            <th className="list-table-row">Room Type</th>
            <th></th>
            <th></th>
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
              <td className="list-table-bnt">
                <button>Delete</button>
              </td>
              <td className="list-table-bnt">
                <button>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Delete;
