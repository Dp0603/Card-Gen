import React, { useContext } from "react";
import { DetailsContext } from "./DetailsContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ECard() {
  const { details } = useContext(DetailsContext);

  const GenerateCard = (id) => {
    const card = document.getElementById(id);
    html2canvas(card).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [130, 70],
      });
      pdf.addImage(imgData, "PNG", 0, 0, 130, 70);
      pdf.save("employee_id_card.pdf");
    });
  };

  return (
    <div className="Bcard">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          id={`Card${i + 1}`}
          className={`C${i + 1} my-5`}
          onClick={() => GenerateCard(`Card${i + 1}`)}
          style={{ cursor: "pointer" }}
        >
          <div className="C1C">
            <h1>{details.employeeName}</h1>
            <h3>{details.employeeId}</h3>
          </div>
          <div className="my-4 C1C">
            <span>{details.companyName}</span>
            <span>{details.position}</span>
            <span>{details.validUntil}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ECard;
