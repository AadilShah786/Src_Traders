import React from "react";
import '../../css/process.css';
import REASONITEM from "../reason/reasonitem";
import data from "../data";
import icon1 from '../../assets/icons/1.png';
import icon2 from '../../assets/icons/2.png';
import icon3 from '../../assets/icons/3.png';

const icons = [icon1, icon2, icon3];

function PROCESS() {
    const processlist = data.process;
    var i = 0;
    // let style={
    //     // backgroundColor:"blue"
    // }
    var renderlist = processlist.map(item => {
        return (
            <REASONITEM data={item} img={icons[i]} parentname={"process_item"} key={++i} />
        )
    })

    return (
        <div className="PROCESS">
            <div className="process_header">
                <h1>How it works</h1>
            </div>
            <div className="reasonline"></div>
            <div className="reasonline2"></div>
            <div className="reasonline3"></div>
            <div className="process_list">
                {renderlist}
            </div>
        </div>
    )
}

export default PROCESS;