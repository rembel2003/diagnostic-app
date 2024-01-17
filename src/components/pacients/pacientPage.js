import React, {useEffect, useState} from 'react';
import Header from "../header";
import medicfoto from "../../images/img_1.png";
import Footer from "../footer";
import {useParams} from "react-router-dom";
import Disease from "./disease";


function PacientPage() {
    const [activeIndex,setActiveIndex] =useState(0)
    const  patientId = useParams()
    const [patientData, setPatientData] = useState([]); // Состояние для данных о пациенте

    useEffect(() => {
        // Отправляем запрос на сервер для получения данных о пациенте по patientId
        fetch(`http://localhost:5000/patient/${patientId.PacientId}`,{

        })
            .then((response) => response.json())
            .then((data) => {
                {setPatientData(data)
                console.log(data)}; // Устанавливаем данные в состояние
            })
            .catch((error) => {
                console.error('Ошибка при загрузке данных о пациенте', error);
            });
    }, []);


    const handleClick = (index) =>{
        setActiveIndex(index===activeIndex?null:index)
    }
    return (
        <div>
            <div className="bg-gray-700 flex justify-center h-96 ">
                <div className="w-4/5 relative">
                    <Header/>
                    <h1 className="text-white font-sans text-5xl not-italic font-bold leading-px-68 uppercase absolute bottom-32 left-14">{patientData.first_name+" "+patientData.last_name}</h1>
                </div>
            </div>
            <div className="relative h-screen flex">
                <div className="bg-telefon  flex items-center w-1/2">
                    <img src={medicfoto} alt="foto of medics" className="w-full"/>
                </div>
                <div className="bg-backtotext  text-center w-1/2 flex flex-col justify-center">
                    <p className="font-sans text-sm not-italic font-bold leading-px-68 uppercase w-3/5 mb-8">Возраст: {patientData.age} лет</p>
                    <p className="font-sans text-sm not-italic font-bold leading-px-68 uppercase w-3/5 mb-8">Пол: {patientData.gender}</p>
                    <p className="font-sans text-sm not-italic font-bold leading-px-68 uppercase w-3/5 mb-8">Анамнез:
                        {patientData.anamnesis}</p>
                </div>
            </div>
            <div className="bg-gray-700 relative h-96">
                <h1 className="text-white font-sans text-5xl not-italic font-bold leading-px-68 uppercase absolute top-0 left-96 " id="questions">Болезни</h1>
                <div className="pt-12 pb-12 flex flex-col flex-wrap relative ">
                    {patientData.medical_history && patientData.medical_history.map((qa, index) => (
                        <Disease
                            key={index}
                            disease={qa.name}
                            date={qa.date.split(' ').slice(1, 4).join(' ')}
                            symptoms={qa.symptoms}
                            isOpen={index === activeIndex}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                    <h1 className="text-white font-sans font-bold leading-px-68 uppercase absolute right-1/4 top-0">Симптомы</h1>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default PacientPage;