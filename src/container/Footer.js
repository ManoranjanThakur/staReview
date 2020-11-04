import React from 'react'
import './Footer.css';
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail} from "react-icons/gr";
import { GoLocation} from "react-icons/go";
import { BiCopyright} from 'react-icons/bi';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className='footer'>
        <div className='f1'>Want latest updates? Just subscribe
            <div className="emaildiv">
            <input type='text' placeholder='Email' className='email'></input><button className='ok' style={{cursor:"pointer"}}>OK</button>
            </div>
        </div>
        
        <div className='f2'>
            <span>Contact - <br/> <FaPhoneAlt /> &nbsp;&nbsp;  9876543210 <br/>
                <br/>
                Email Address - <br/>
                <GrMail/> &nbsp;&nbsp;  Examplewebsite@gmail.com <br/>
                <br/>
                Address - <br/> <GoLocation/> &nbsp;&nbsp; 123 A Random Address, Random City, PIN CODE</span>
        </div>
        <div className='f3'>
            <span className='f3a'><Link to='/about' style={{color:'#4D4D4D'}}>About Us</Link></span><br/>
            <span className='f3b'>Refund Policy</span><br/>
            <span className='f3c'>Privacy Policy</span><br/>
            <span className='f3d'>Track your Order</span><br/>
            <span className='f3e'>Return your Order</span><br/>
        </div>
        <div className='f4'>Tilak Shringar | <BiCopyright /> All rights reserved 2020</div>

    </div>
    )
}

export default Footer
