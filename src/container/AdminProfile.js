import React from 'react'
import './Aboutme.css';
import { GrMail} from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";


function AdminProfile() {
    let name="Vasudeva Krishna";
    let des="Admin";
    let cno="0000000001";
    let email="Vasudeva@Krishna.com"
    let sorc = "https://ii1.pepperfry.com/media/catalog/product/g/o/1100x1210/golden-aluminium-radha-krishna-statue-religious-idol-by-handicrafts-paradise-golden-aluminium-radha--46ymxk.jpg";
    return (
        <div className="headerr">
            <div className="myImage">
                <img src={sorc} alt=""></img>
            </div>
            <div className="MyDescription">
                <h2>{name}</h2>
                <p>{des}</p>
                <div>
                    <FaPhoneAlt style={{marginTop:"0.256vw", opacity:"0.8"}}/><p style={{marginLeft:"1.249vw"}}>{cno}</p>
                </div>
                <div>
                    <GrMail style={{marginTop:"0.35vw" , opacity:"0.8"}}/><p style={{marginLeft:"1.249vw"}}>{email}</p>
                </div>
            </div>
            <button style={{marginTop:"0", marginLeft:"0", height:"1.537vw", cursor:"pointer"}}>Edit</button>

        </div>
    )
}

export default AdminProfile