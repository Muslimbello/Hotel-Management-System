import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./component/topbar";
import Sidebar from "./component/sidebar";
import Booking from "./component/booking";
import Delete from "./component/delete-client";
import List from "./component/list-client";
const Dashbord = ({ match }) => {
  return (
    <main>
      <Topbar />

      <Sidebar />
      <Routes>
        <Route path="Delete" element={<Delete />} />
        <Route path="list" element={<List />} />
        <Route index element={<Booking />} />
      </Routes>
    </main>
  );
};
export default Dashbord;
