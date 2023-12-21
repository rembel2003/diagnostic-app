import React from 'react';

function DoctorCard(props) {
    return (
        <div className="w-60 h-56  mr-8 mb-8">
            <div className="w-24 h-24 rounded-full bg-green-100 mb-4">
            </div>
            <h1 className="font-sans  font-bold text-base mb-1">Доктор Аблай Туркесович</h1>
            <p className="font-sans    text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
        </div>
    );
}

export default DoctorCard;