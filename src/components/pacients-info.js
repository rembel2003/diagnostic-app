import React from 'react';
import medicfoto from "../images/Rectangle 83.png";
import Pacient from "./pacients/pacient";

function PacientsInfo(props) {
    return (
        <div>
            <div className="flex">
                <div className="relative h-screen flex" id="about-us">
                    <div className="bg-telefon  flex items-center w-1/2">
                        <img src={medicfoto} alt="foto of medics" className="w-full"/>
                    </div>
                    <div className="bg-backtotext  flex justify-center items-center w-1/2">
                        <p className="font-sans text-sm not-italic font-bold leading-px-68 uppercase w-3/5">Наш веб-сервис предоставляет уникальную возможность получить предварительную диагностику заболеваний и состояний здоровья на основе передовых технологий искусственного интеллекта. Просто заполните простую форму, описывающую ваши симптомы, и наши алгоритмы проведут анализ, предоставив информацию о возможных причинах и рекомендации.

                            Мы гарантируем скорость и точность диагностики, опираясь на большой объем медицинских данных. Полученные результаты будут сопровождены персонализированными рекомендациями, помогающими определить дальнейшие шаги по улучшению вашего здоровья.

                            Наши алгоритмы обеспечивают конфиденциальность ваших данных, а удобный интерфейс делает весь процесс максимально простым и понятным. Независимо от вашего уровня медицинских знаний, вы сможете получить предварительные выводы о своем здоровье.

                            Присоединяйтесь к нам для удобной и информативной онлайн-диагностики, основанной на передовых технологиях искусственного интеллекта.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center ">
                <div className="w-4/5 h-screen relative flex">
                    <h1 className="text-telefon font-sans text-5xl not-italic font-bold leading-px-68 uppercase absolute top-14" id="pacients">Наши пациенты</h1>
                    <div className="absolute top-32 flex flex-wrap">
                        <div className="flex mb-8 ">
                            <Pacient/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PacientsInfo;