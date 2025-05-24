import React from "react";
import Services_Style from "./Services_Style";
import Footer from "./Footer";

const Services = () => {
  return (
    <div className="services-container">
      <header className="hero-section text-center">
        <video autoPlay muted loop id="background-video">
          <source
            src="https://www.videvo.net/videvo_files/converted/2018_10/preview/181011_11_Graphic_03.mp419180.webm"
            type="video/webm"
          />
          Your browser does not support HTML5 video.
        </video>
        <div className="hero-content">
          <h1>Our Services</h1>
        </div>
      </header>
      <main className="services-content-section text-center my-5">
        <div className="content">
          <p>
            We offer a wide range of services to cater to your card generation
            needs:
          </p>
          <ul>
            {[
              {
                title: "Business Card Generation",
                description:
                  "Create professional business cards with customizable templates.",
              },
              {
                title: "Gym Membership Cards",
                description:
                  "Generate membership cards for your gym members quickly and easily.",
              },
              {
                title: "Student ID Cards",
                description:
                  "Design and print student ID cards with personalized details.",
              },
              {
                title: "Employee ID Cards",
                description:
                  "Create employee ID cards for your organization with ease.",
              },
              {
                title: "Event Passes",
                description:
                  "Generate event passes for your attendees with all the necessary details.",
              },
              {
                title: "Medical ID Cards",
                description:
                  "Design and print medical ID cards with essential information.",
              },
            ].map((service, index) => (
              <li key={index} className="service-item">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Services_Style />
      <Footer />
    </div>
  );
};

export default Services;
