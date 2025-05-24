import React from "react";
import { FaDumbbell, FaPhone, FaMailBulk, FaCalendarAlt } from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function GymMembershipCard(props) {
  const GenerateCard = () => {
    localStorage.setItem(props.name, JSON.stringify(props));

    const card = document.getElementById("GymCard");
    html2canvas(card).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [88, 55],
      });
      pdf.addImage(imgData, "PNG", 0, 0, 88, 55);
      pdf.save("gym_membership_card.pdf");
    });
  };

  const { name, membershipId, gymName, membershipType, phone, email } = props;

  return (
    <div
      style={{
        marginLeft: "200px",
      }}
    >
      <div id="GymCard" className="container">
        <div
          style={{
            paddingInline: "10px",
          }}
        >
          <h2> {name ? name : "Your Name"} </h2>
          <h4> {membershipId ? `ID: ${membershipId}` : "Membership ID"} </h4>
        </div>
        <div
          className="cont"
          style={{
            paddingInline: "10px",
            paddingTop: "20px",
            fontSize: "13px",
          }}
        >
          <b>
            <FaDumbbell style={{ color: "" }} /> &nbsp;&nbsp;
            {gymName ? gymName : "Gym Name"}
          </b>
          <br />

          <b>
            <FaCalendarAlt style={{ color: "" }} />
            &nbsp;&nbsp;
            {membershipType ? membershipType : "Membership Type"}
          </b>
          <br />

          <b>
            <FaPhone style={{ color: "" }} />
            &nbsp;&nbsp;
            {phone ? phone : "Phone"}
          </b>
          <br />

          <b>
            {" "}
            <FaMailBulk style={{ color: "", boxSizing: "10px" }} /> &nbsp;
            {email ? email : "Email"}
          </b>
          <br />
        </div>
      </div>
      <div className="downbtn">
        <button className="btn btn-dark btn-lg d-grid" onClick={GenerateCard}>
          {" "}
          Download{" "}
        </button>
      </div>
    </div>
  );
}

export default GymMembershipCard;
