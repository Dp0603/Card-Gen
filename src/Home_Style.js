import React from "react";

const Home_Style = () => {
  return (
    <div>
      <style jsx>{`
        .home-container {
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
        .video-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          top: 0;
          left: 0;
          z-index: -1;
        }
        .hero-section {
          position: relative;
          width: 90%;
          padding: 100px 20px;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .hero-content {
          animation: fadeIn 2.5s ease-in-out;
        }
        .hero-section h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        .hero-section p {
          font-size: 1.2rem;
        }
        .card-selection-section .btn-primary {
          background-color: #2575fc;
          border-color: #2575fc;
          width: 100%;
          padding: 15px;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s, transform 0.3s;
        }
        .card-selection-section .btn-primary:hover {
          background-color: #6a11cb;
          border-color: #6a11cb;
          transform: scale(1.05);
        }
        .card-selection-section .icon {
          margin-right: 10px;
          font-size: 1.5rem;
        }
        .card-link {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Home_Style;
