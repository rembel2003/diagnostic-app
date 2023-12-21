import React from 'react';
import companylogo1 from "../images/companies logo/image 2.png";
import companylogo2 from "../images/companies logo/image 3.png";
import companylogo3 from "../images/companies logo/image 4.png";
import companylogo4 from "../images/companies logo/image 5.png";
import companylogo5 from "../images/companies logo/image 6.png";

function Recomendations(props) {
    return (
        <div>
            <div className="h-96 flex justify-center ">
                <div className="w-4/5">
                    <h1 className="text-telefon font-sans text-5xl not-italic font-bold leading-px-68 uppercase mb-20">Нас
                        Рекомендуют</h1>
                    <div className="flex justify-around items-center">
                        <img src={companylogo1} alt=""/>
                        <img src={companylogo2} alt=""/>
                        <img src={companylogo3} alt=""/>
                        <img src={companylogo4} alt=""/>
                        <img src={companylogo5} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recomendations;