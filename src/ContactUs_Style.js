import React from "react";

const ContactUs_Style = () => {
  return (
    <div>
      <style jsx>{`
        .page-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .content-wrap {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            to right,
            #6a11cb,
            #2575fc
          ); /* Gradient background */
          color: white;
          text-shadow: 1px 1px 2px #000;
          padding: 20px;
          box-sizing: border-box;
        }
        .contact-form {
          max-width: 600px;
          width: 100%;
          background: rgba(
            255,
            255,
            255,
            0.1
          ); /* Slightly transparent background for form */
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        .form-group {
          margin-bottom: 15px;
        }
        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-size: 1rem;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 4px;
          margin-top: 5px;
        }
        .form-group input {
          background: #fff;
          color: #333;
        }
        .form-group textarea {
          background: #fff;
          color: #333;
        }
        .btn-primary {
          background-color: #2575fc; /* Primary button color */
          border-color: #2575fc;
          padding: 10px 20px;
          font-size: 1rem;
          border: none;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s, border-color 0.3s;
          border-radius: 4px;
        }
        .btn-primary:hover {
          background-color: #6a11cb; /* Button color on hover */
          border-color: #6a11cb;
        }
      `}</style>
    </div>
  );
};

export default ContactUs_Style;
