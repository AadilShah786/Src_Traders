import React, { useState } from "react";
import '../../css/testimonial.css';
import data from "../data";
import TESTICARD from "./testimonial_card";
import next_icon from '../../assets/next_icon.png'
import prev_icon from '../../assets/prev_icon.png'

function TESTIMONIALS() {
    const reasonlist = data.testimonials;
    var i = 0;
    var renderlist = reasonlist.map(item => {
        return (
            <TESTICARD key={++i} data={item} />
        )
    })
 
    const[selected,setselected]=useState(2)
function prev(){
    if(selected===0){
        setselected(renderlist.length -1)
    }else{
        setselected(selected -1 )
    }
}
function next(){
    if(selected===(renderlist.length -1)){
        setselected(0)
    }else{
        setselected(selected +1)
    }
}
    return (
        <div className="TESTI">
            <div className="testi_header">
<h1>Our Testimonials</h1>
            </div>
            <div className="reasonline"></div>
            <div className="reasonline2"></div>
            <div className="reasonline3" style={{marginBottom:"5vh"}}></div>
            <div className="testi_list">
                <img className="testibut" id="tb1" onClick={prev} src={prev_icon}></img>
                {renderlist[selected]}
                <img className="testibut"id="tb2" onClick={next} src={next_icon}></img>
            </div>
        </div>
    )
}

export default TESTIMONIALS;