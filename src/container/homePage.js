import React from 'react';
import Header from './Header';
import AdminProfile from './AdminProfile';
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { AiOutlineCloseSquare } from "react-icons/ai";
import {MdDelete } from "react-icons/md";
import { AiOutlineCheckSquare } from "react-icons/ai";
import './homePage.css'

function openProduct(){
    document.querySelector('.AdminPopUp').style.display = 'flex';
}
function closeProduct(){
    document.querySelector('.AdminPopUp').style.display = 'none';
}

function Admin(){
    return(
       <div>
           <Header/>
           <h2 className="heading">Dashboard...</h2>
           <div className="Aboutttt">
                <AdminProfile/>
           </div>  
           <div className="adminBox">
               <div className="adminNav">
                   <h6 className="adminProducts"><Link to="/Admin" style={{color:'#4D4D4D'}}>EMPLOYEE</Link></h6>
                   
               </div>
               <div className="productLine">
                    <hr id='adminLine2'/>
                    <hr id='adminLine'/>
               </div>
               <div className="categoryProductBtn">
                   <button className="productBtn" onClick={openProduct}>ADD EMPLOYEE</button>
               </div>
               <div className="AdminProductDetails">
                   <div className="AdminProductHeading">
                       <p id="adminCategories">Name</p>
                       <p id="adminProductID">E - ID</p>
                       <p id="adminQuantity">Reviews</p>
                       <p id="adminName">Parent Vendor</p>
                       <p id="adminStatus">Status</p>
                   </div>
                   <hr id="AdminLine"></hr>
                   <div className="productDetailsAdmin">
                       <div className="detailOne">
                           <p className="ename">Manoranjan</p>
                           <p className="productIdAdmin">LGD124</p>
                           <span className="quantityIncDec">
                               <p className="quantityNo">4</p>
                           </span>
                           <div className="dressName">Amazon</div>
                           <span className="productStatus">
                               <AiOutlineCloseSquare id="closeSquare"/>
                               <AiOutlineCheckSquare id="checkSquare"/>
                               <p className="StatusAva">Available</p>
                           </span>
                           <MdDelete id="deleteButton"/>
                       </div>
                   </div>
               </div>
           </div>
           <hr className='endLine'/>
           <div className = "AdminPopUp">
               <div className="SmallUp"  >
                   <div className="headingPopUp">
                       <div className="adminClose" onClick={closeProduct}>+</div>
                       <p className="adminPopHeading">Add Employee</p>
                   </div>
                   <div className="detailFill">
                      <div className="productDetailsCol"></div>
                   </div>
               </div>
           </div>
       </div>
    )
}
export default Admin