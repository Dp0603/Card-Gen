import React from "react";
import { FaSchool, FaPhone, FaEnvelope, FaUserGraduate } from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function StudentIdCard(props) {
  const generateCard = () => {
    localStorage.setItem(props.name, JSON.stringify(props));

    const card = document.getElementById("StudentCard");
    html2canvas(card).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [88, 55],
      });
      pdf.addImage(imgData, "PNG", 0, 0, 88, 55);
      pdf.save("student_id_card.pdf");
    });
  };

  const { name, studentId, schoolName, grade, phone, email } = props;

  return (
    <div style={{ marginLeft: "200px" }}>
      <div id="StudentCard" className="container student-card">
        <div className="card-content">
          <h2>{name ? name : "Your Name"}</h2>
          <h4>{studentId ? `ID: ${studentId}` : "Student ID"}</h4>
          <div className="details">
            <b>
              <FaSchool /> &nbsp;&nbsp;{schoolName ? schoolName : "School Name"}
            </b>
            <br />
            <b>
              <FaUserGraduate />
              &nbsp;&nbsp;{grade ? grade : "Grade"}
            </b>
            <br />
            <b>
              <FaPhone />
              &nbsp;&nbsp;{phone ? phone : "Phone"}
            </b>
            <br />
            <b>
              <FaEnvelope /> &nbsp;{email ? email : "Email"}
            </b>
            <br />
          </div>
        </div>
      </div>
      <div className="downbtn">
        <button className="btn btn-dark btn-lg d-grid" onClick={generateCard}>
          Download
        </button>
      </div>
    </div>
  );
}

export default StudentIdCard;
