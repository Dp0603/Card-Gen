import React from "react";
import { FaHospital, FaUserMd, FaIdBadge, FaPhone, FaMailBulk } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function MedicalIdCard(props) {

    const GenerateCard = () => {
        localStorage.setItem(props.name, JSON.stringify(props));

        const card = document.getElementById('MedicalIDCard');
        html2canvas(card).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: [88, 55],
            });
            pdf.addImage(imgData, 'PNG', 0, 0, 88, 55);
            pdf.save('medical_id_card.pdf');
        });
    }

    const { name, medicalId, hospitalName, medicalCondition, phone, email } = props;

    return (
        <div style={{ marginLeft: '200px' }}>
            <div id="MedicalIDCard" className="container">
                <div style={{ paddingInline: '10px' }}>
                    <h2>{name ? name : 'Patient Name'}</h2>
                    <h4>{medicalId ? `ID: ${medicalId}` : 'Medical ID'}</h4>
                </div>
                <div className="cont" style={{ paddingInline: '10px', paddingTop: '20px', fontSize: '13px' }}>
                    <b><FaHospital style={{ color: '' }} /> &nbsp;&nbsp;{hospitalName ? hospitalName : 'Hospital Name'}</b><br />
                    <b><FaUserMd style={{ color: '' }} />&nbsp;&nbsp;{medicalCondition ? medicalCondition : 'Medical Condition'}</b><br />
                    <b><FaPhone style={{ color: '' }} />&nbsp;&nbsp;{phone ? phone : 'Phone'}</b><br />
                    <b><FaMailBulk style={{ color: '' }} /> &nbsp;{email ? email : 'Email'}</b><br />
                </div>
            </div>
            <div className="downbtn">
                <button className="btn btn-dark btn-lg d-grid" onClick={GenerateCard}>Download</button>
            </div>
        </div>
    );
}

export default MedicalIdCard;
