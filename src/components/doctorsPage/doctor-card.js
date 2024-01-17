import React from 'react';
import image from "../../images/img.png"

function DoctorCard(props) {
    return (
        <div className="w-60 h-56  mr-8 mb-8">
            <img className="w-24 h-24 rounded-full bg-green-100 mb-4" src={image} alt="doctors-foto"/>
            <h1 className="font-sans  font-bold text-base mb-1">{props.name}</h1>
            <p className="font-sans    text-sm">{props.description}</p>
        </div>
    );
}

export default DoctorCard;