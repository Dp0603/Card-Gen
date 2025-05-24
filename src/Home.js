import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home_Style from "./Home_Style";
import Footer from "./Footer";
import {
  FaBusinessTime,
  FaDumbbell,
  FaIdCard,
  FaUser,
  FaTicketAlt,
  FaHospital,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section text-center">
        <video autoPlay muted loop id="background-video">
          <source
            src="https://www.videvo.net/videvo_files/converted/2018_10/preview/181011_11_Graphic_03.mp419180.webm"
            type="video/webm"
          />
          Your browser does not support HTML5 video.
        </video>
        <div className="video-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to CardGen</h1>
          <p>
            Effortlessly create professional and personalized cards for any
            occasion.
          </p>
        </div>
      </header>
      <main className="card-selection-section text-center my-5">
        <p>Select the type of card you want to create and generate:</p>
        <div className="row justify-content-center mt-4">
          <div className="col-md-4 mb-3">
            <Link to="/Business Card" className="card-link">
              <button type="button" className="btn btn-primary btn-block">
                <FaBusinessTime className="icon" /> Business Card
              </button>
            </Link>
          </div>
          <div className="col-md-4 mb-3">
            <Link to="/Gym Membership Card" className="card-link">
              <button type="button" className="btn btn-primary btn-block">
                <FaDumbbell className="icon" /> Gym Membership Card
              </button>
            </Link>
          </div>
          <div className="col-md-4 mb-3">
            <Link to="/Student Id Card" className="card-link">
              <button type="button" className="btn btn-primary btn-block">
                <FaIdCard className="icon" /> Student Id Card
              </button>
            </Link>
          </div>
          <div className="col-md-4 mb-3">
            <Link to="/Employee ID Card" className="card-link">
              <button type="button" className="btn btn-primary btn-block">
                <FaUser className="icon" /> Employee ID Card
              </button>
            </Link>
          </div>
          <div className="col-md-4 mb-3">
            <Link to="/Event Pass Card" className="card-link">
              <button type="button" className="btn btn-primary btn-block">
                <FaTicketAlt className="icon" /> Event Pass Card
              </button>
            </Link>
          </div>
          <div className="col-md-4 mb-3">
            <Link to="/Medical ID Card" className="card-link">
              <button type="button" className="btn btn-primary btn-block">
                <FaHospital className="icon" /> Medical ID Card
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Home_Style />
      <Footer />
    </div>
  );
};

export default Home;
