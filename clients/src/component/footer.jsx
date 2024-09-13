import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer_box">
        <div className="footer_box_card1">
          <h2>BG&C HOTEL</h2>
          <p>
            At our hotel resort, relaxation isn’t just a promise—it’s a
            lifestyle.
          </p>
        </div>
        <div className="footer_box_card">
          <h4>Contact Godswill</h4>
          <p>
            {" "}
            <i class="bi bi-telephone-forward"></i>+2348167828238
          </p>
          <a href="#">
            <i class="bi bi-envelope-fill"></i>
          </a>
          <a href="#">
            <i class="bi bi-twitter-x"></i>
          </a>
          <a href="#">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="#">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
        <div className="footer_box_card">
          <h4>Contact Bella</h4>
          <p>
            <i class="bi bi-telephone-forward"></i>+2349031292535
          </p>
          <a href="#">
            <i class="bi bi-envelope-fill"></i>
          </a>
          <a href="#">
            <i class="bi bi-twitter-x"></i>
          </a>
          <a href="#">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="#">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
        <div className="footer_box_card">
          <h4>Contact Chukwudi</h4>
          <p>
            <i class="bi bi-telephone-forward"></i>+2348168945213
          </p>
          <a href="#">
            <i class="bi bi-envelope-fill"></i>
          </a>
          <a href="#">
            <i class="bi bi-twitter-x"></i>
          </a>
          <a href="https://facebook.com/chukwudi.ilonuba/">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/ilonuba-chukwudi-a14868191/">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="last"> Copyright &copy; 2024 BG&C All Right Reserved</div>
    </div>
  );
};

export default Footer;
