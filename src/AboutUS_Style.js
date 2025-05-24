import React from "react";

const AboutUS_Style = () => {
  return (
    <div>
      <style jsx>{`
        .about-container {
          background: linear-gradient(to right, #6a11cb, #2575fc);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          color: white;
          text-shadow: 1px 1px 2px #000;
          font-family: "Arial", sans-serif;
        }
        #background-video {
          position: absolute;
          width: 100%;
          left: 50%;
          top: 50%;
          height: 100%;
          object-fit: cover;
          transform: translate(-50%, -50%);
          z-index: -1;
        }
        .hero-section {
          position: relative;
          width: 100%;
          padding: 20px 20px;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .hero-content {
          animation: fadeIn 2s ease-in-out;
        }
        .hero-section h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        .about-content-section {
          padding: 20px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .content {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          max-width: 1200px;
          margin: 0 auto;
          color: #343a40;
          text-shadow: none;
        }
        section {
          margin-bottom: 40px;
        }
        hr.divider {
          border: none;
          border-top: 1px solid #e0e0e0;
          margin: 40px 0;
          width: 100%;
        }
        h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        h3 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        p {
          line-height: 1.6;
          margin: 10px 0;
        }
        .ceo-experience {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px;
        }
        .experience-detail {
          background: #f9f9f9;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
          max-width: 1100px;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .experience-detail:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }
        .team-member-img {
          border-radius: 50%;
          width: 180px;
          height: 180px;
          object-fit: cover;
          margin-bottom: 15px;
        }
        .role {
          font-weight: bold;
          color: white;
          margin-bottom: 10px;
          font-size: 1.2rem;
        }
        .description {
          font-size: 1.1rem;
          font-style: italic;
          margin-bottom: 20px;
          color: white;
        }
        .experience-text {
          font-style: italic;
          margin-bottom: 20px;
          color: #e0e0e0;
        }
          .content {
            background: rgba(255, 255, 255, 0.1);
            color: #e0e0e0;
          }
          .ceo-experience .experience-detail {
            background: rgba(255, 255, 255, 0.1);
            color: #e0e0e0;
          }
          .divider {
            border-top: 1px solid #555;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUS_Style;
