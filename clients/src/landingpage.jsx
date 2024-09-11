import React, { useState } from "react";
import "./landingpage.css";
import { Modal } from "./component/modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./component/gallery";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import About from "./component/about";
import Footer from "./component/footer";

const Landingpage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="slider">
        <div className="load"></div>
        <div className="content">
          <div className="header">
            <Navbar key="lg" expand="lg" className="bgi mb-3">
              <Container fluid>
                <Navbar.Brand href="#">BG & C Hotel</Navbar.Brand>
                {/* Toggle button for mobile view */}
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                <Navbar.Offcanvas
                  id="offcanvasNavbar-expand-lg"
                  aria-labelledby="offcanvasNavbarLabel-expand-lg"
                  placement="end"
                >
                  <Offcanvas.Header closeButton className="bgi">
                    <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg"></Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className="bgi">
                    {/* Navigation Links */}
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#gallery">Gallery</Nav.Link>
                      <Nav.Link href="#gallery">About us</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
            <div className="landingpage_head">
              <div className="landingpage_center">
                <h3>WELCOME TO </h3>
                <h1>BG & C HOTEL PORTFOLIO PROJECT</h1>
                <h6>
                  The Best Hotel Reservation Project in ALX That Done By
                  Bella,Godswell And Chukwudi
                </h6>
                <h6>Sigin To Boook Your Reservation</h6>

                <button
                  className="button-nav"
                  onClick={() => {
                    console.log("clicked");
                    setShowModal(true);
                  }}
                >
                  Sigupmmmm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <Modal closeModal={setShowModal} />}
      <About />
      <Gallery />
      <Footer />
    </div>
  );
};
export default Landingpage;
