import React, {useEffect, useState} from 'react';
import Header from "../header";
import DoctorCard from "./doctor-card";
import Footer from "../footer";
import DoctorsList from "../doctor-question/doctorsList";
function DoctorsPage(props) {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        if (typeof window !== 'undefined') { // Проверка на клиентской стороне
            fetch('http://localhost:5000/doctors')
                .then(response => response.json())
                .then(data => {
                    setDoctors(data);
                    console.log(data);
                })
                .catch(error => console.error('Ошибка:', error));
        }
    }, []);
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
                    {doctors.map(doctor => (<DoctorCard key={doctor.id} name={doctor.name} description={doctor.description}/>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default DoctorsPage;