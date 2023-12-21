import React from 'react';
import mouse from "../images/uil_mouse-alt.svg";
import instagram from "../images/ant-design_instagram-outlined.svg";
import telefon from "../images/ic_round-call.svg";
import messenger from "../images/jam_write-f.svg";
import whatsapp from "../images/bx_bxl-whatsapp.svg";

function MainPage(props) {
    return (
        <div>
            <main>
                <section className="h-screen" id="main-page">
                    <h1 className="text-white font-sans text-5xl not-italic font-bold leading-px-68 uppercase absolute top-44">Диагностика
                        с помощью <br/> <span>AI</span></h1>
                    <p className="text-white font-sans text-sm not-italic font-bold leading-px-68 uppercase absolute top-96 w-2/5">
                        Наш сервис предоставляет уникальные возможности диагностики различных состояний
                        и проблем с использованием передовых технологий искусственного интеллекта.
                        Мы стремимся улучшить ваш опыт заботы о здоровье, делая диагностику более доступной,
                        быстрой
                        и точной.
                    </p>
                    <button className="w-60 h-12 text-white font-sans text-sm not-italic
                          font-bold leading-px-68 uppercase absolute bottom-36 bg-transparent rounded-3xl
                          border border-amber-50 text-center">Позвони нам
                    </button>

                    <div
                        className="w-16 h-16 bg-regal-yellow rounded-full absolute left-1/2 bottom-16 animate-bounce  flex justify-center items-center ">
                        <img className="mouse-img" src={mouse} alt="mouse image"/>
                    </div>
                    <div className="flex absolute bottom-32 right-0">
                        <div
                            className="w-14 h-14 bg-instagram rounded-full flex justify-center items-center mr-5 border-amber-50 border hover:w-16 hover:h-16 ">
                            <a href="https://www.instagram.com/_yura_2281337/"><img src={instagram} alt="instagram link"/></a></div>
                        <div
                            className="w-14 h-14 bg-telefon rounded-full flex justify-center items-center mr-5 border-amber-50 border hover:w-16 hover:h-16 ">
                            <a href="https://www.instagram.com/_yura_2281337/"><img src={telefon} alt="telefon link"/></a></div>
                        <div
                            className="w-14 h-14 bg-messanger rounded-full flex justify-center items-center mr-5 border-amber-50 border hover:w-16 hover:h-16 ">
                            <a href="https://www.instagram.com/_yura_2281337/"><img src={messenger} alt="messanger link"/></a></div>
                        <div
                            className="w-14 h-14 bg-whatsapp rounded-full flex justify-center items-center border-amber-50 border hover:w-16 hover:h-16">
                            <a href="https://www.instagram.com/_yura_2281337/"><img src={whatsapp} alt="whatsapp link"/></a></div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default MainPage;