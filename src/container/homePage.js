import React from 'react';
import Header from './Header';
import Footer from './Footer';
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
           <h2 className="heading">my profile...</h2>
           <div className="Aboutttt">
                <AdminProfile/>
           </div>  
           <div className="adminBox">
               <div className="adminNav">
                   <h6 className="adminProducts"><Link to="/Admin" style={{color:'#4D4D4D'}}>PRODUCTS</Link></h6>
                   <h6 className="adminBilling"><Link to="/AdminBilling" style={{color:'#4D4D4D'}}>BILLING</Link></h6>
                   <h6 className="adminReseller"><Link to="/AdminReseller" style={{color:'#4D4D4D'}}>RESELLERS</Link></h6>
               </div>
               <div className="productLine">
                    <hr id='adminLine2'/>
                    <hr id='adminLine'/>
               </div>
               <div className="categoryProductBtn">
                   <button className="categoryBtn">ADD CATEOGRY</button>
                   <button className="productBtn" onClick={openProduct}>ADD PRODUCT</button>
                   <p className="productNumber">43,240 products in total</p>
               </div>
               <div className="SearchDrop"></div>
               <div className="AdminProductDetails">
                   <div className="AdminProductHeading">
                       <p id="adminCategories">Categories</p>
                       <p id="adminProductID">Product ID</p>
                       <p id="adminQuantity">Quantity</p>
                       <p id="adminName">Name</p>
                       <p id="adminStatus">Status</p>
                   </div>
                   <hr id="AdminLine"></hr>
                   <div className="productDetailsAdmin">
                       <div className="detailOne">
                           <p className="productDresses">Dresses</p>
                           <p className="productIdAdmin">LGD124</p>
                           <span className="quantityIncDec">
                               <FiMinusCircle id="minusIcon"/>
                               <p className="quantityNo">15</p>
                               <FiPlusCircle id="plusIcon"/>
                           </span>
                           <div className="dressName">Laddu Gopal dress</div>
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
           <Footer/>
           <div className = "AdminPopUp">
               <div className="SmallUp"  >
                   <div className="headingPopUp">
                       <div className="adminClose" onClick={closeProduct}>+</div>
                       <p className="adminPopHeading">Add Product</p>
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