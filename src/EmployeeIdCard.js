import React from "react";
import { FaUserTie, FaIdBadge, FaPhone, FaMailBulk, FaBuilding } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function EmployeeIdCard(props) {

    const GenerateCard = () => {
        localStorage.setItem(props.name, JSON.stringify(props));
        
        const card = document.getElementById('EmployeeIDCard');
        html2canvas(card).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: [88, 55],
            });
            pdf.addImage(imgData, 'PNG', 0, 0, 88, 55);
            pdf.save('employee_id_card.pdf');
        });
    }

    const { name, employeeId, companyName, jobTitle, phone, email } = props;

    return (
        <div style={{ marginLeft: '200px' }}>
            <div id="EmployeeIDCard" className="container">
                <div style={{ paddingInline: '10px' }}>
                    <h2>{name ? name : 'Employee Name'}</h2>
                    <h4>{employeeId ? `ID: ${employeeId}` : 'Employee ID'}</h4>
                </div>
                <div className="cont" style={{ paddingInline: '10px', paddingTop: '20px', fontSize: '13px' }}>
                    <b><FaBuilding style={{ color: '' }} /> &nbsp;&nbsp;{companyName ? companyName : 'Company Name'}</b><br />
                    <b><FaUserTie style={{ color: '' }} />&nbsp;&nbsp;{jobTitle ? jobTitle : 'Job Title'}</b><br />
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

export default EmployeeIdCard;
