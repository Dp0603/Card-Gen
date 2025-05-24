import React from "react";

const Services_Style = () => {
  return (
    <div>
      <style jsx>{`
        .services-container {
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
        .services-content-section {
          padding: 20px;
          width: 1200%;
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
        .service-item {
          margin-bottom: 0px;
        }
        .service-item h3 {
          font-size: 2rem;
          margin-bottom: 10px;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .service-item p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #e6e6e6;
        }
        .footer {
          background-color: #00aaff;
          color: white;
          padding: 20px;
          width: 100%;
          text-align: center;
        }
        .content {
          background: rgba(255, 255, 255, 0.1);
          color: #e0e0e0;
        }
      `}</style>
    </div>
  );
};

export default Services_Style;
