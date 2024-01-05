import React from "react";
import profile from '../../assets/profile.png'

function TESTICARD({ data }) {
    return (
      <div className="testicard">
        <img src={profile} alt="profile" />
        <div className="quote">{data.qoute}</div>
        <div className="test_name">{data.name}</div>
        <div className="test_pos">{data.position}</div>
      </div>
    );
  }
  
export default TESTICARD;