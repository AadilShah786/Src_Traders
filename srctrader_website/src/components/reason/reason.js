import React from "react";
import '../../css/reason.css';
import data from "../data";
import REASONITEM from "./reasonitem";
import img1 from '../../assets/1.png';
import img2 from '../../assets/2 (1).png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';

const img=[img1,img2,img3,img4,img5,img6];

function REASON() {
    const reasonlist = data.reasons;
    var i = 0;
    var renderlist = reasonlist.map(item => {
            return (
                <REASONITEM  data={item} img={img[i]} parentname={"reason_item"} key={++i}/>
            )
        
    })

    return (
        <div className="REASON" id="about-section">
            <div className="reason_header">
                <h1>Why Choose SRC Traders</h1>
                <h4 className="subhead">Our Company work on investing your funds with full security and safety. We provide Max(ROI) Return on Investment which is 50% Monthly .</h4>
            </div>
            <div className="reasonline"></div>
            <div className="reasonline2"></div>
            <div className="reasonline3"></div>
            <div className="reason_list">
                {renderlist}
            </div>
        </div>
    )
}

export default REASON;