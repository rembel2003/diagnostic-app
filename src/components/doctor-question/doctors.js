import React, {useEffect, useState} from 'react';
import profilefoto from "../../images/Rectangle 53.png";
import Questions from "./questions";
import {Link} from "react-router-dom";
import DoctorsList from "./doctorsList";

function Doctors(props) {
    const [activeIndex,setActiveIndex] =useState(0)
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

    const questionsAnswers =[
        {question:'Как точны диагнозы, предоставляемые приложением?',answer:' Наше приложение использует передовые алгоритмы искусственного интеллекта для анализа ваших симптомов и предоставления возможных диагнозов. Однако следует понимать, что диагнозы, предоставляемые приложением, являются лишь предварительными и не могут заменить профессиональную медицинскую консультацию. Мы рекомендуем обращаться к врачу для получения точного диагноза и назначения лечения.'},
        {question:'Какие симптомы я могу вводить в приложение',answer:'Вы можете вводить различные симптомы, такие как головная боль, тошнота, лихорадка, боль в суставах, усталость и многие другие. Приложение анализирует введенные вами симптомы и на их основе предлагает возможные диагнозы. Для улучшения точности результата рекомендуем указывать как можно больше подробностей о ваших симптомах.'},
        {question:'Что делать, если диагноз,  вызывает у меня беспокойство?',answer:' Если предложенный нашим приложением диагноз вызывает у вас беспокойство или сомнения, настоятельно рекомендуем обратиться за профессиональной медицинской помощью. Помните, что приложение предоставляет только предварительные диагнозы и не может учитывать все аспекты вашего здоровья и истории болезни. Важно проконсультироваться с врачом для полной диагностики и назначения лечения.'},
        {question:'Могу ли я использовать это приложение для экстренной медицинской помощи?',answer:'Наше приложение предназначено для предоставления предварительных диагнозов и не является инструментом для экстренной медицинской помощи. В случае серьёзных или угрожающих жизни состояний, таких как сильная боль, затрудненное дыхание, потеря сознания или подозрение на серьёзное заболевание, немедленно обращайтесь за экстренной медицинской помощью или звоните в скорую помощь. Приложение предназначено для использования в неэкстренных ситуациях и не должно заменять профессиональную медицинскую помощь.'},
        {question:'Как обрабатывается моя личная медицинская информация в этом приложении?',answer:'Мы придаем большое значение конфиденциальности и безопасности ваших персональных данных. Все введённые вами симптомы и любая личная информация обрабатываются с соблюдением строгих стандартов конфиденциальности. Мы используем зашифрованные системы хранения данных и не передаем вашу личную информацию третьим сторонам без вашего явного согласия. Для более подробной информации ознакомьтесь с нашей политикой конфиденциальности.'}
    ]

    const handleClick = (index) =>{
        setActiveIndex(index===activeIndex?null:index)
    }

    return (
        <div>
            <div>
                <div className="h-screen relative">
                    <div className="bg-telefon h-3/6">
                        <div className="relative" id="doctors">
                            <h1 className="text-white font-sans text-5xl not-italic font-bold leading-px-68 uppercase absolute top-14 left-14">Наши
                                Специалисты</h1>
                            <div className="flex absolute top-32 left-16 ">
                                {doctors.map(doctor => (<DoctorsList key={doctor.id} name={doctor.name}/>
                                ))}
                            </div>

                        </div>
                    </div>
                    <div className="bg-backforquestion h-16">
                        <button className="w-40 h-12 text-white font-sans text-sm not-italic
                          font-bold leading-px-68 uppercase absolute left-2/4 bottom-2/4 bg-transparent rounded-3xl
                          border border-amber-50 text-center mb-4">
                            <Link to='/doctors'>Все специалисты</Link>
                        </button>
                        <h1 className="text-white font-sans text-5xl not-italic font-bold leading-px-68 uppercase absolute left-14 " id="questions">Вопрос-ответ</h1>
                    </div>
                    <div className="bg-telefon h-2/5  pt-12 pb-12 flex flex-col justify-around relative">
                        {questionsAnswers.map((qa, index) => (
                            <Questions
                                key={index}
                                question={qa.question}
                                answer={qa.answer}
                                isOpen={index === activeIndex}
                                onClick={() => handleClick(index)}
                            />
                        ))}
                        <h1 className="text-white font-sans font-bold leading-px-68 uppercase absolute right-1/4 top-0">Ответ</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Doctors;