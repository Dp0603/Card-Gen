import React from "react";
import Footer from "./Footer";
import AboutUS_Style from "./AboutUS_Style";

const AboutUs = () => {
  return (
    <div className="about-container">
      <header className="hero-section text-center">
        <video autoPlay muted loop id="background-video">
          <source
            src="https://www.videvo.net/videvo_files/converted/2018_10/preview/181011_11_Graphic_03.mp419180.webm"
            type="video/webm"
          />
          Your browser does not support HTML5 video.
        </video>
        <div className="hero-content">
          <h1>About Us</h1>
        </div>
      </header>
      <main className="about-content-section text-center my-5">
        <div className="content">
          <section className="company-history">
            <h2>Our History</h2>
            <p>
              Founded in 2024, CardGen has been passionately dedicated to
              revolutionizing the card creation industry. Our journey began with
              a mission to simplify the card design process and has since
              evolved into a leading solution provider for various card types.
            </p>
          </section>
          <hr className="divider" />
          <section className="mission">
            <h2>Our Mission</h2>
            <p>
              At CardGen, our mission is to make card creation as effortless and
              efficient as possible. We aim to empower individuals and
              businesses with the tools they need to design stunning, customized
              cards for any occasion.
            </p>
          </section>
          <hr className="divider" />
          <section className="ceo-experience">
            <h2>CEO Experience</h2>
            <div className="experience-detail">
              <img
                src="/CEO.jpg"
                className="team-member-img"
                alt="CEO Devam Patel"
              />
              <h3>Devam Patel</h3>
              <p className="role">CEO & Founder</p>
              <p className="description">
                Devam Patel brings over 15 years of experience in the tech and
                design industries. As a visionary leader, he has spearheaded
                multiple successful startups, transforming ideas into innovative
                products. Under his remarkable leadership, CardGen has achieved
                extraordinary growth and established itself as a leader in the
                card creation industry.
              </p>
              <p className="experience-text">
                Devam’s journey began with a deep passion for technology and
                design, leading to a career marked by numerous accolades and
                successful ventures. His ability to foresee market trends and
                drive innovation has been pivotal in shaping CardGen’s mission
                and success.
              </p>
            </div>
          </section>
        </div>
      </main>
      <AboutUS_Style/>
      <Footer/>
    </div>
  );
};

export default AboutUs;
