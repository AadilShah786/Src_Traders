import React, { useState,useCallback } from "react";
import '../../css/pricing.css';
import ITEM from "./item";
import data from "../data";

function PRICING() {

    const triggerrender2 = useCallback(() => {
        setter();
        // setrender2(prevState => !prevState); // Toggle state
      }, []);
    
      function genitem(data) {
        const plan=data.plans;

        var lister = [];
        let i=0
       var lister=plan.map(item=> {
          let style = {
            backgroundColor:"blueviolet",//white
            border: "1pt solid black",
            height: '100%',
            // width: '33%',
            fontSize:'1em',
            color:"white",//bluviolet
            transition: `height 0.3s ease-out, width 0.3s ease-out, backgroundColor 1s ease-in-out`,
          }
          let plan_info=data.plans[i];
          if (data.Selected_item === i) {
            style.backgroundColor = "blueviolet";
            style.color="white";
            style.height = '100%';
            // style.width = '33%';
          }
          i++;
         return (<ITEM key={i} id={i} style={style} trigger={triggerrender2} plans={plan_info} />)
        }
       )
        return lister;
      }
      
      const [listed, setList] = useState(() => genitem(data));
      
      function setter() {
        setList(prevList => {
          return genitem(data); // Ensure 'data' is accessible here
        });
      }
      
      return (
        <div className="PRICING" id="pricing-section">
            <h1 id="pricing" >Our Pricing</h1>
            <div className="reasonline"></div>
            <div className="reasonline2"></div>
            <div className="reasonline3" style={{marginBottom:"5vh"}}></div>
          <div className="price_list">
            <ITEM />
          </div>
        </div>
      );
      
}

export default PRICING;