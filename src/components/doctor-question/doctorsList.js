import React from 'react';
import profilefoto from "../../images/img.png";

function DoctorsList(props) {
    return (
        <div className="mr-10">
            <img src={profilefoto} alt="profile foto"/>
            <h1  className="text-white font-sans font-bold leading-px-68 uppercase mr-32">{props.name}</h1>
        </div>
    );
}

export default DoctorsList;