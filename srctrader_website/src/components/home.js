import React from "react";
import '../css/home.css';
import leftbg from '../assets/Lefthome.jpg';
import leftbg2 from '../assets/laptop.png';
function HOME() {
    return (
        <div className="front" id="home-section">
        <div className="left_home">
            <img className="leftimage" src={leftbg2} alt="bg"></img>
        </div>
        <div className="HOME">
            <div className="title">
INVESTMENT
            </div>
            <div className="subtitle">
FINANCIAL ADVISORY
            </div>
            <div className="intro">
           <p> Access SEBI registered expertise for savvy trading moves. Our platform offers free trial access to exclusive strategies crafted by industry experts. Elevate your trading game with premium subscriptions tailored to optimize gains and minimize risks.</p><br/>
Join a thriving community of informed traders and take charge of your financial future. Get started now to unlock the power of smart trading with SRC Traders!
            </div>
            {/* <div className="buttons">
            <button className="detail" >more details</button>
            <button className="demo">demo</button>
        </div> */}
        </div>
        
        </div>
    )
}

export default HOME;