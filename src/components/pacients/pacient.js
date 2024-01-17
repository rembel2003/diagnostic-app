import React from 'react';
import {Link} from "react-router-dom";

function Pacient(props) {
    return (
        <>
            <Link to={`/pacient/${props.id}`}>
            <p className="text-cyan-800 font-sans text-sm not-italic font-bold leading-px-68 uppercase pr-5">{props.firstName+" "+props.lastName
            }</p>
            <p className="text-red-600 font-sans text-sm not-italic font-bold leading-px-68 uppercase pr-5">{props.age}</p>
            <p className="text-cyan-800 font-sans text-sm not-italic font-bold leading-px-68 uppercase pr-5">{props.diseasesNumber} болезней</p>
            </Link>
            <button className="bg-regal-red text-white  px-2 rounded-2xl mr-10" onClick={()=>props.delete(props.id)}>
                Delete
            </button>
        </>
    );
}

export default Pacient;