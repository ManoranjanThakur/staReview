import React from 'react'
import './Aboutme.css';
import { GrMail} from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";


function AdminProfile() {
    let name="Ankur Singh";
    let des="Admin";
    let cno="9871386595";
    let email="ankit.nkit@gmail.com"
    let sorc = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80";
    return (
        <div className="headerr">
            <div className="myImage">
                <img src={sorc} alt=""></img>
            </div>
            <div className="MyDescription">
                <h2 style={{marginTop:"0vw" , marginLeft:"-19vw", opacity:"0.8"}}>{name}</h2>
                <p style={{marginTop:"0vw" , marginLeft:"-26vw", opacity:"0.8"}}>{des}</p>
                <div>
                    <FaPhoneAlt style={{marginTop:"0.256vw", opacity:"0.8"}}/><p style={{marginLeft:"1.249vw", marginTop:"0.1vw"}}>{cno}</p>
                </div>
                <div>
                    <GrMail style={{marginTop:"0.35vw" , opacity:"0.8"}}/><p style={{marginLeft:"1.249vw" , marginTop:"0.1vw"}}>{email}</p>
                </div>
            </div>

        </div>
    )
}

export default AdminProfile