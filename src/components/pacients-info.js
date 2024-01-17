import React, {useEffect, useState} from 'react';
import medicfoto from "../images/Rectangle 83.png";
import Pacient from "./pacients/pacient";
import ModalPacient from "./modalPacient";

function PacientsInfo(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pacients,setPacients] =useState([])

    useEffect(() => {
        fetch('http://localhost:5000/patients')  // Замените на URL вашего Flask-сервера
            .then(response => response.json())
            .then(data => {
                setPacients(data);  // Предположим, что у вас есть состояние patients для хранения данных
                console.log(data);
            })
            .catch(error => console.error('Ошибка:', error));
    }, []);

    const handleDelete = (patientId) => {
        fetch(`http://localhost:5000/patient/${patientId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    // Удаление успешно
                    // Задержка перед выполнением второго запроса
                    setTimeout(() => {
                        fetch('http://localhost:5000/patients') // Замените на URL вашего Flask-сервера
                            .then(response => response.json())
                            .then(data => {
                                setPacients(data); // Предположим, что у вас есть состояние patients для хранения данных
                                console.log(data);
                            })
                            .catch(error => console.error('Ошибка:', error));
                    }, 500); // Задержка 1000 миллисекунд (1 секунда)
                } else {
                    console.error('Не удалось удалить пациента');
                }
            })
            .catch((error) => {
                console.error('Ошибка при удалении пациента', error);
            });
    };


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
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
                            {pacients.map(pacient=>(
                                <div key={pacient.id}>
                                   <Pacient  firstName={pacient.first_name}
                                                                                 lastName={pacient.last_name} age={pacient.age} diseasesNumber={pacient.medical_history.length}
                                                                                 id={pacient.id}                   delete={handleDelete}
                                    />
                                </div>))}
                        </div>

                    </div>
                    <div className="absolute bottom-20 right-8">
                    <button onClick={openModal} className="bg-regal-red text-white py-2 px-4 rounded-full">Добавить пациента</button>
                    <ModalPacient isOpen={isModalOpen} onClose={closeModal} />
                </div>
                </div>
            </div>
        </div>
    );
}

export default PacientsInfo;