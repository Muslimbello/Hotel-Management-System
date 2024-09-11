import image from "../Images/defult.png";
import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div>
        <img className="sidebar_img" src={image} />
      </div>
      <h4>meskana</h4>
      <div className="sidebar_bnt">
        <Link to="/Dashbord">
          <button className="btn1"> Add Client</button>
        </Link>
        <br />
        <Link to="/Dashbord/Delete">
          <button className="btn2"> Remove client</button>
        </Link>
        <br />
        <Link to="/Dashbord/List">
          <button className="btn">Update Client</button>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
