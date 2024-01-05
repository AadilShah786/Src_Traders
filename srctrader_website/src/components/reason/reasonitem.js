import React from "react";

function REASONITEM({data, img ,parentname}){
// console.log(data)
    return(
        <div className={parentname} >
            <img src={img} className={parentname+"_icon"}></img>
            <h1>{data.title}</h1>
            <p>{data.detail}</p>
        </div>
    )
}

export default REASONITEM;