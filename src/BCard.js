import React, { useContext } from 'react';
import { DetailsContext } from './DetailsContext';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const BCard = () => {
  const { details } = useContext(DetailsContext);

  const generateCard = (id) => {
    const card = document.getElementById(id);
    html2canvas(card).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [130, 70],
      });
      pdf.addImage(imgData, 'PNG', 0, 0, 130, 70);
      pdf.save('card.pdf');
    });
  };

  const cardStyle = {
    cursor: 'pointer',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'right',
    marginBottom: '20px',
  };

  const nameStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const infoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };

  return (
    <div className="Bcard">
      {[...Array(10).keys()].map((i) => (
        <div
          key={`Card${i + 1}`}
          id={`Card${i + 1}`}
          className={`C${i + 1} my-5`}
          onClick={() => generateCard(`Card${i + 1}`)}
          style={cardStyle}
        >
          <div className="C1C" style={nameStyle}>
            <h2>{details.name}</h2>
            <p>{details.position}</p>
          </div>
          <div className="my-4 C4C" style={infoStyle}>
            <span>{details.place}</span>
            <span>{details.number}</span>
            <span>{details.email}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BCard;
