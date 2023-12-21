import React, {useState} from 'react';
import Header from "../header";
import medicfoto from "../../images/Rectangle 83.png";
import Questions from "../doctor-question/questions";
import Disease from "./disease";
import Footer from "../footer";

function PacientPage(props) {
    const [activeIndex,setActiveIndex] =useState(0)

    const questionsAnswers = [
        {
            disease: 'Хронический бронхит',
            date: '15.03.2021',
            symptoms: 'Пациент жалуется на кашель с мокротой, который усиливается утром. Наблюдается более 2 лет, особенно в холодное время года. Недавно увеличилась одышка при физической нагрузке.'
        },
        {
            disease: 'Гипертоническая болезнь',
            date: '20.06.2020',
            symptoms: 'Повышенное артериальное давление до 160/100 мм рт. ст., периодические головные боли, особенно в области затылка, головокружения. Были эпизоды гипертонических кризов в прошлом.'
        },
        {
            disease: 'Остеоартрит коленного сустава',
            date: '05.11.2019',
            symptoms: 'Боли в колене, усиливающиеся при ходьбе и спуске по лестнице. Отек и скованность в суставе утром. Износ хряща в коленном суставе, подтвержденный рентгенографией.'
        },
        {
            disease: 'Сахарный диабет 2 типа',
            date: '12.08.2018',
            symptoms: 'Постоянная жажда, частое мочеиспускание, усталость. Уровень глюкозы в крови выше нормы. Наблюдается семейная предрасположенность к диабету.'
        },
        {
            disease: 'Мигрень',
            date: '30.01.2017',
            symptoms: 'Периодические сильные пульсирующие головные боли, обычно сосредоточенные в одной части головы. Боли усиливаются при ярком свете или громких звуках. Наблюдаются ауры, такие как мерцание перед глазами.'
        }
    ];

    const handleClick = (index) =>{
        setActiveIndex(index===activeIndex?null:index)
    }
    return (
        <div>
            <div className="bg-gray-700 flex justify-center h-96 ">
                <div className="w-4/5 relative">
                    <Header/>
                    <h1 className="text-white font-sans text-5xl not-italic font-bold leading-px-68 uppercase absolute bottom-32 left-14">Джон Сноу</h1>
                </div>
            </div>
            <div className="relative h-screen flex">
                <div className="bg-telefon  flex items-center w-1/2">
                    <img src={medicfoto} alt="foto of medics" className="w-full"/>
                </div>
                <div className="bg-backtotext  text-center w-1/2 flex flex-col justify-center">
                    <p className="font-sans text-sm not-italic font-bold leading-px-68 uppercase w-3/5 mb-8">Возраст: 45 лет</p>
                    <p className="font-sans text-sm not-italic font-bold leading-px-68 uppercase w-3/5 mb-8">Пол: Мужской</p>
                    <p className="font-sans text-sm not-italic font-bold leading-px-68 uppercase w-3/5 mb-8">Анамнез:
                        Не курит, умеренно употребляет алкоголь.
                        Нет хронических заболеваний.
                        Аллергии: нет известных аллергий.
                        Семейный анамнез: отец умер от сердечного приступа в возрасте 50 лет, мать страдает гипертонией.</p>
                </div>
            </div>
            <div className="bg-gray-700 relative h-96">
                <h1 className="text-white font-sans text-5xl not-italic font-bold leading-px-68 uppercase absolute top-0 left-96 " id="questions">Болезни</h1>
                <div className="pt-12 pb-12 flex flex-col flex-wrap relative ">
                    {questionsAnswers.map((qa, index) => (
                        <Disease
                            key={index}
                            disease={qa.disease}
                            date={qa.date}
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