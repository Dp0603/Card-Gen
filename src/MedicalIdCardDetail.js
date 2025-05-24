import React, { useContext } from "react";
import { DetailsContext } from './DetailsContext';  
import { Link } from "react-router-dom";

function MedicalIdCardDetail() {
  const { details, setDetails } = useContext(DetailsContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails(prevDetails => ({ ...prevDetails, [name]: value }));
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
  };

  const inputStyle = {
    borderRadius: "5px",
    border: "1px solid #ced4da",
    boxShadow: "none",
    padding: "0.375rem 0.75rem",
    width: "100%",
    transition: "border-color 0.3s, box-shadow 0.3s",
  };

  const inputFocusStyle = {
    borderColor: "#80bdff",
    boxShadow: "0 0 0 0.2rem rgba(38, 143, 255, 0.25)",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h3 style={headerStyle}>Medical ID Details</h3>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="patientName" style={labelStyle}>
              Patient Name
            </label>
            <input
              onChange={handleChange}
              className="form-control"
              type="text"
              id="patientName"
              name="patientName"
              placeholder="Full Name"
              value={details.patientName}
              required
              style={inputStyle}
              onFocus={(e) =>
                (e.target.style = { ...inputStyle, ...inputFocusStyle })
              }
              onBlur={(e) => (e.target.style = inputStyle)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="patientId" style={labelStyle}>
              Patient ID
            </label>
            <input
              onChange={handleChange}
              className="form-control"
              type="text"
              id="patientId"
              name="patientId"
              placeholder="Enter Patient ID"
              value={details.patientId}
              required
              style={inputStyle}
              onFocus={(e) =>
                (e.target.style = { ...inputStyle, ...inputFocusStyle })
              }
              onBlur={(e) => (e.target.style = inputStyle)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="hospitalName" style={labelStyle}>
              Hospital Name
            </label>
            <input
              onChange={handleChange}
              className="form-control"
              type="text"
              id="hospitalName"
              name="hospitalName"
              placeholder="Enter Hospital Name"
              value={details.hospitalName}
              required
              style={inputStyle}
              onFocus={(e) =>
                (e.target.style = { ...inputStyle, ...inputFocusStyle })
              }
              onBlur={(e) => (e.target.style = inputStyle)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="bloodGroup" style={labelStyle}>
              Blood Group
            </label>
            <input
              onChange={handleChange}
              className="form-control"
              type="text"
              id="bloodGroup"
              name="bloodGroup"
              placeholder="Enter Blood Group"
              value={details.bloodGroup}
              required
              style={inputStyle}
              onFocus={(e) =>
                (e.target.style = { ...inputStyle, ...inputFocusStyle })
              }
              onBlur={(e) => (e.target.style = inputStyle)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="validUntil" style={labelStyle}>
              Valid Until
            </label>
            <input
              onChange={handleChange}
              className="form-control"
              type="date"
              id="validUntil"
              name="validUntil"
              value={details.validUntil}
              required
              style={inputStyle}
              onFocus={(e) =>
                (e.target.style = { ...inputStyle, ...inputFocusStyle })
              }
              onBlur={(e) => (e.target.style = inputStyle)}
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100">
              <Link to={'/MCard'} className="text-white text-decoration-none">
                SUBMIT
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MedicalIdCardDetail;
