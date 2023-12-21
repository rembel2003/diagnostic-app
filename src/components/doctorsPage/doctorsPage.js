import React from 'react';
import Header from "../header";
import DoctorCard from "./doctor-card";
import Footer from "../footer";
function DoctorsPage(props) {
    return (
        <div >
            <div className="bg-gray-700 flex justify-center h-96 ">
                <div className="w-4/5 relative">
                    <Header/>
                    <h1 className="text-white font-sans text-5xl not-italic font-bold leading-px-68 uppercase absolute bottom-32 left-14">Наши
                        Специалисты</h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-4/5 relative flex flex-wrap justify-center">
                    <DoctorCard/>
                    <DoctorCard/>
                    <DoctorCard/>
                    <DoctorCard/>
                    <DoctorCard/>
                    <DoctorCard/>
                    <DoctorCard/>
                    <DoctorCard/>
                    <DoctorCard/>
                    <DoctorCard/>
                    <DoctorCard/>

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default DoctorsPage;