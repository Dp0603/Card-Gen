import React, { useContext } from "react";
import { DetailsContext } from "./DetailsContext";
import { Link } from "react-router-dom";

function BusinessCardDetail() {
  const { details, setDetails } = useContext(DetailsContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #6a11cb, #2575fc)", 
    backgroundAttachment: "fixed",
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "#acb6e5",
    borderRadius: "15px",
    border: "1px solid #dee2e6",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
    padding: "20px",
    width: "100%",
    maxWidth: "500px",
    position: "relative",
    zIndex: 1,
  };

  const headerStyle = {
    fontSize: "1.75rem",
    color: "#343a40",
    textAlign: "center",
    marginBottom: "1.5rem",
  };

  const labelStyle = {
    fontWeight: "bold",
    color: "#495057",
    display: "block",
    marginBottom: "0.5rem",
  };

  const inputStyle = {
    borderRadius: "5px",
    border: "1px solid #ced4da",
    boxShadow: "none",
    padding: "0.375rem 0.75rem",
    width: "100%",
    transition: "border-color 0.3s, box-shadow 0.3s",
    marginBottom: "1rem",
  };

  const inputFocusStyle = {
    borderColor: "#80bdff",
    boxShadow: "0 0 0 0.2rem rgba(38, 143, 255, 0.25)",
  };

  const buttonStyle = {
    paddingTop: "10px",
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h3 style={headerStyle}>Business Card Details</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name" style={labelStyle}>
              Name
            </label>
            <input
              onChange={handleChange}
              className="form-control"
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              value={details.name || ''}
              required
              style={inputStyle}
              onFocus={(e) =>
                (e.target.style = { ...inputStyle, ...inputFocusStyle })
              }
              onBlur={(e) => (e.target.style = inputStyle)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="position" style={labelStyle}>
              Position
            </label>
            <input
              onChange={handleChange}
              className="form-control"
              type="text"
              id="position"
              name="position"
              placeholder="Enter your position at work"
              value={details.position || ''}
              required
              style={inputStyle}
              onFocus={(e) =>
                (e.target.style = { ...inputStyle, ...inputFocusStyle })
              }
              onBlur={(e) => (e.target.style = inputStyle)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="place" style={labelStyle}>
              Place
            </label>
            <input
              onChange={handleChange}
              className="form-control"
              type="text"
              id="place"
              name="place"
              placeholder="Enter your Address"
              value={details.place || ''}
              required
              style={inputStyle}
              onFocus={(e) =>
                (e.target.style = { ...inputStyle, ...inputFocusStyle })
              }
              onBlur={(e) => (e.target.style = inputStyle)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="number" style={labelStyle}>
              Phone Number
            </label>
            <input
              onChange={handleChange}
              className="form-control"
              type="text"
              id="number"
              name="number"
              placeholder="+1-555-555-5555"
              value={details.number || ''}
              required
              style={inputStyle}
              onFocus={(e) =>
                (e.target.style = { ...inputStyle, ...inputFocusStyle })
              }
              onBlur={(e) => (e.target.style = inputStyle)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" style={labelStyle}>
              Email Address
            </label>
            <input
              onChange={handleChange}
              className="form-control"
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              value={details.email || ''}
              required
              style={inputStyle}
              onFocus={(e) =>
                (e.target.style = { ...inputStyle, ...inputFocusStyle })
              }
              onBlur={(e) => (e.target.style = inputStyle)}
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100" style={buttonStyle}>
              <Link to={"/BCard"} className="text-white text-decoration-none">
                SUBMIT
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BusinessCardDetail;
