import React, { useEffect, useState } from "react";
import data from "../data";
import PopupContent from "./popup";
import '../../css/item.css';
import buy from '../../assets/icons/buy.png';

function ITEM({ style, id, trigger, plans }) {
    
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      // console.log("popup called")
      setShowModal(true);
    };
  
    const closeModal = () => {
      // console.log("popup called 2")

      setShowModal(false);
    };
    return (
        <div className="cards">
        <div className="card">
          <ul>
            <li className="pack">Standard</li>
            <li id="basic" className="price bottom-bar">Rs 199.99</li>
            <li className="bottom-bar">500 GB Storage</li>
            <li className="bottom-bar">2 Users Allowed</li>
            <li className="bottom-bar">Send up to 3 GB</li>
            <li className="bottom-bar">50 Email Accounts</li>
            <li><button className="btn" onClick={openModal}>Order Now <img src={buy} style={{width:"11%",marginLeft:"4%"}}></img></button></li>
          </ul>
         
        </div>
        <div className="card">
          <ul>
            <li className="pack">Professional</li>
            <li id="professional" className="price bottom-bar">Rs 249.99</li>
            <li className="bottom-bar">1 TB Storage</li>
            <li className="bottom-bar">5 Users Allowed</li>
            <li className="bottom-bar">Send up to 10 GB</li>
            <li className="bottom-bar">Unlimited Email Accounts</li>
            <li><button className="btn" onClick={openModal}>Order Now <img src={buy} style={{width:"11%",marginLeft:"4%"}}></img></button></li>
          </ul>
        </div>
        <div className="card">
          <ul>
            <li className="pack">Master</li>
            <li id="master" className="price bottom-bar">Rs 399.99</li>
            <li className="bottom-bar">2 TB Storage</li>
            <li className="bottom-bar">10 Users Allowed</li>
            <li className="bottom-bar">Send up to 20 GB</li>
            <li className="bottom-bar">Unlimited Email Accounts</li>
            <li><button className="btn" onClick={openModal}>Order Now <img src={buy} style={{width:"11%",marginLeft:"4%"}}></img></button></li>
          </ul>
        </div>
        {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={closeModal}>&times;</span>
            <PopupContent/>
          </div>
        </div>
      )}
      </div>
    )
}

export default ITEM;

