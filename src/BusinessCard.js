import React from "react";
import { FaLandmark, FaPhone, FaMailBulk, FaMoneyBillAlt } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FaMailchimp } from "react-icons/fa6";

function BusinessCard(props) {

    const GenerateCard = () => {
        localStorage.setItem(props.name, JSON.stringify(props));
        
        const card = document.getElementById('Card');
        html2canvas(card).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation:'landscape',
                unit: 'mm',
                format: [88, 55],
            });
            pdf.addImage(imgData, 'PNG', 0, 0, 88, 55);
            pdf.save('card.pdf');
        });
    }

    const { name } = props;
    const { position } = props;
    const { Place } = props;
    const { number } = props;
    const { email } = props;


    return (
        <div style={{
            marginLeft:'200px',
            
        }}>
            <div id="Card" className="container">
                <div style={{
                    paddingInline:'10px'
                }}>
               
                    <h2> {name ? name : 'Your Name'} </h2>
                    <h4>  {position ? position : 'Job Position'} </h4>
                </div>
                <div  className="cont" style={{
                    paddingInline:'10px',
                    paddingTop:'20px',
                    fontSize:'13px',
                    
                }}>
                    <b><FaLandmark style={{ color: '' }} /> &nbsp;&nbsp;
                        {Place ? Place : 'Place'}</b><br />

                    <b><FaPhone style={{ color: '' }} />&nbsp;&nbsp;
                        {number ? number : 'Phone'}</b><br />

                    <b> <FaMailBulk style={{ color: '', boxSizing: '10px' }} /> &nbsp;
                    {email ? email : 'Email'}</b><br />
                </div>
            </div>
            <div className="downbtn">
                <button  className="btn btn-dark btn-lg d-grid " onClick={GenerateCard}> Download </button>
            </div>
        </div>
    );
}

export default BusinessCard;