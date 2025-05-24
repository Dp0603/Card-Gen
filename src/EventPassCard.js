import React from "react";
import { FaCalendarAlt, FaUser, FaIdBadge, FaPhone, FaMailBulk } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function EventPassCard(props) {

    const GenerateCard = () => {
        localStorage.setItem(props.name, JSON.stringify(props));

        const card = document.getElementById('EventPass');
        html2canvas(card).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: [88, 55],
            });
            pdf.addImage(imgData, 'PNG', 0, 0, 88, 55);
            pdf.save('event_pass.pdf');
        });
    }

    const { name, eventId, eventName, eventDate, phone, email } = props;

    return (
        <div style={{ marginLeft: '200px' }}>
            <div id="EventPass" className="container">
                <div style={{ paddingInline: '10px' }}>
                    <h2>{name ? name : 'Attendee Name'}</h2>
                    <h4>{eventId ? `ID: ${eventId}` : 'Event ID'}</h4>
                </div>
                <div className="cont" style={{ paddingInline: '10px', paddingTop: '20px', fontSize: '13px' }}>
                    <b><FaCalendarAlt style={{ color: '' }} /> &nbsp;&nbsp;{eventName ? eventName : 'Event Name'}</b><br />
                    <b><FaCalendarAlt style={{ color: '' }} />&nbsp;&nbsp;{eventDate ? eventDate : 'Event Date'}</b><br />
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

export default EventPassCard;
