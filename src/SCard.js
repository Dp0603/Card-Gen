import React, { useContext } from "react";
import { DetailsContext } from "./DetailsContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function SCard() {
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
      pdf.save("school_id_card.pdf");
    });
  };

  return (
    <div className="Bcard">
      <div
        id="Card1"
        className="C1 my-5"
        onClick={() => GenerateCard("Card1")}
        style={{ cursor: "pointer" }}
      >
        <div className="C1C">
          <h1>{details.studentName}</h1>
          <h3>{details.studentId}</h3>
        </div>
        <div className="my-4 C1C">
          <span>{details.schoolName}</span>
          <span>{details.grade}</span>
          <span>{details.validUntil}</span>
        </div>
      </div>
      <div
        id="Card2"
        className="C2 my-5"
        onClick={() => GenerateCard("Card2")}
        style={{ cursor: "pointer" }}
      >
        <div className="C1C">
          <h1>{details.studentName}</h1>
          <h3>{details.studentId}</h3>
        </div>
        <div className="my-4 C1C">
          <span>{details.schoolName}</span>
          <span>{details.grade}</span>
          <span>{details.validUntil}</span>
        </div>
      </div>
      <div
        id="Card3"
        className="C3 my-5"
        onClick={() => GenerateCard("Card3")}
        style={{ cursor: "pointer" }}
      >
        <div className="C1C">
          <h1>{details.studentName}</h1>
          <h3>{details.studentId}</h3>
        </div>
        <div className="my-4 C1C">
          <span>{details.schoolName}</span>
          <span>{details.grade}</span>
          <span>{details.validUntil}</span>
        </div>
      </div>
      <div
        id="Card4"
        className="C4 my-5"
        onClick={() => GenerateCard("Card4")}
        style={{ cursor: "pointer" }}
      >
        <div className="C1C">
          <h1>{details.studentName}</h1>
          <h3>{details.studentId}</h3>
        </div>
        <div className="my-4 C1C">
          <span>{details.schoolName}</span>
          <span>{details.grade}</span>
          <span>{details.validUntil}</span>
        </div>
      </div>
      <div
        id="Card5"
        className="C5 my-5"
        onClick={() => GenerateCard("Card5")}
        style={{ cursor: "pointer" }}
      >
        <div className="C1C">
          <h1>{details.studentName}</h1>
          <h3>{details.studentId}</h3>
        </div>
        <div className="my-4 C1C">
          <span>{details.schoolName}</span>
          <span>{details.grade}</span>
          <span>{details.validUntil}</span>
        </div>
      </div>
      <div
        id="Card6"
        className="C6 my-5"
        onClick={() => GenerateCard("Card6")}
        style={{ cursor: "pointer" }}
      >
        <div className="C1C">
          <h1>{details.studentName}</h1>
          <h3>{details.studentId}</h3>
        </div>
        <div className="my-4 C1C">
          <span>{details.schoolName}</span>
          <span>{details.grade}</span>
          <span>{details.validUntil}</span>
        </div>
      </div>
      <div
        id="Card7"
        className="C7 my-5"
        onClick={() => GenerateCard("Card7")}
        style={{ cursor: "pointer" }}
      >
        <div className="C1C">
          <h1>{details.studentName}</h1>
          <h3>{details.studentId}</h3>
        </div>
        <div className="my-4 C1C">
          <span>{details.schoolName}</span>
          <span>{details.grade}</span>
          <span>{details.validUntil}</span>
        </div>
      </div>
      <div
        id="Card8"
        className="C8 my-5"
        onClick={() => GenerateCard("Card8")}
        style={{ cursor: "pointer" }}
      >
        <div className="C1C">
          <h1>{details.studentName}</h1>
          <h3>{details.studentId}</h3>
        </div>
        <div className="my-4 C1C">
          <span>{details.schoolName}</span>
          <span>{details.grade}</span>
          <span>{details.validUntil}</span>
        </div>
      </div>
      <div
        id="Card9"
        className="C9 my-5"
        onClick={() => GenerateCard("Card9")}
        style={{ cursor: "pointer" }}
      >
        <div className="C1C">
          <h1>{details.studentName}</h1>
          <h3>{details.studentId}</h3>
        </div>
        <div className="my-4 C1C">
          <span>{details.schoolName}</span>
          <span>{details.grade}</span>
          <span>{details.validUntil}</span>
        </div>
      </div>
      <div
        id="Card10"
        className="C10 my-5"
        onClick={() => GenerateCard("Card10")}
        style={{ cursor: "pointer" }}
      >
        <div className="C1C">
          <h1>{details.studentName}</h1>
          <h3>{details.studentId}</h3>
        </div>
        <div className="my-4 C1C">
          <span>{details.schoolName}</span>
          <span>{details.grade}</span>
          <span>{details.validUntil}</span>
        </div>
      </div>
    </div>
  );
}

export default SCard;
