import React, {useState} from 'react';
import arow from "../../images/Component.svg";
import arownotactiv from "../../images/Componentnotactiv.svg"

function Disease({disease,date,symptoms,isOpen,onClick}) {
    return (
        <div className="flex justify-center mb-4">
            <div className="flex justify-between w-4/5">
                <div className="flex">
                    <p className="text-white font-sans font-bold leading-px-68 uppercase w-5/6 mr-8" onClick={onClick}>{disease}</p>
                    <p className="text-white font-sans font-bold leading-px-68 uppercase w-2/6 mr-8" onClick={onClick}>{date}</p>
                    {isOpen?<img src={arow} alt="arow" className="absolute right-2/4 w-5 h-5"/>:<img src={arownotactiv} alt="arow" className=" w-5 h-5 absolute right-2/4"/>}
                </div>
                <div>
                    {isOpen && <p className="text-white font-sans  leading-px-68 uppercase w-5/12 absolute left-2/4 top-20 ml-8">{symptoms}</p>}
                </div>
            </div>
        </div>
    );
}

export default Disease;