import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <p>© 2024 CardGen. All rights reserved.</p>
      <p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>{" "}
        |
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>{" "}
        |
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </p>
      <style jsx>{`
        .footer {
          background-color: #000; /* Default background color for dark mode */
          color: white;
          padding: 20px;
          width: 100%;
          text-align: center;
        }
        .footer a {
          color: white;
          margin: 0 10px;
          text-decoration: none;
          font-size: 1.5rem;
        }
        .footer a:hover {
          text-decoration: underline;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @media (prefers-color-scheme: light) {
          .footer {
            background-color: rgba(0, 0, 0, 0.3); /* Light mode background color */
            color: white;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
