import React from 'react';
import logo from "../images/2584800822768.svg";
import instagram from "../images/ant-design_instagram-outlined.svg";
import telefon from "../images/ic_round-call.svg";
import messenger from "../images/jam_write-f.svg";
import whatsapp from "../images/bx_bxl-whatsapp.svg";
import arow from "../images/Component.svg";
import Scrolllink from "./scrolllink";
import ScrollLink from "./scrolllink";

function Footer(props) {
    return (
        <>
            <footer className="h-96 flex justify-center bg-[#333]">
                <div className="w-4/5 flex items-center justify-between">
                    <img src={logo} alt="logo" className="w-20 h-20"/>
                    <h1 className="text-white font-sans text-2xl not-italic leading-8 font-bold">DIAGNOSTIC
                        CENTER</h1>
                    <div className="flex flex-col">
                        <h1 className="text-white font-sans text-lg not-italic  leading-8 font-bold">Карта сайта</h1>
                        <nav>
                            <ul className="list-none flex flex-col">
                                <li className="text-white font-sans text-lg not-italic font-bold leading-8 pr-4"><ScrollLink to="main-page">Главная</ScrollLink></li>
                                <li className="text-white  font-sans text-lg not-italic font-bold leading-8 pr-4">
                                    <ScrollLink to="doctors">Наши врачи</ScrollLink>
                                </li>
                                <li className="text-white  font-sans text-lg not-italic font-bold leading-8 pr-4"><ScrollLink to="pacients">Наши
                                    пациенты</ScrollLink>
                                </li>
                                <li className="text-white  font-sans text-lg not-italic font-bold leading-8 pr-4"><ScrollLink to="#about-us">О
                                    нас</ScrollLink>
                                </li>
                                <li className="text-white  font-sans text-lg not-italic font-bold leading-8 "><ScrollLink to="questions">Вопросы</ScrollLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h1 className="text-white font-sans text-lg not-italic  leading-8 font-bold">Связаться с нами</h1>
                        <div className="flex ">
                            <div
                                className="w-4 h-4 bg-instagram rounded-full flex justify-center items-center mr-5 border-amber-50 border hover:w-6 hover:h-6 hover:opacity-75">
                                <a href="https://www.instagram.com/_yura_2281337/"><img src={instagram} alt="instagram link"/></a></div>
                            <div
                                className="w-4 h-4 bg-telefon rounded-full flex justify-center items-center mr-5 border-amber-50 border hover:w-6 hover:h-6 hover:opacity-75">
                                <a href="https://www.instagram.com/_yura_2281337/"><img src={telefon} alt="telefon link"/></a></div>
                            <div
                                className="w-4 h-4 bg-messanger rounded-full flex justify-center items-center mr-5 border-amber-50 border hover:w-6 hover:h-6 hover:opacity-75">
                                <a href="https://www.instagram.com/_yura_2281337/"><img src={messenger} alt="messanger link"/></a></div>
                            <div
                                className="w-4 h-4 bg-whatsapp rounded-full flex justify-center items-center border-amber-50 border hover:w-6 hover:h-6 hover:opacity-75">
                                <a href="https://www.instagram.com/_yura_2281337/"><img src={whatsapp} alt="whatsapp link"/></a></div>
                        </div>
                    </div>
                    <div className="">
                        <button>
                            <img src={arow} alt="arow" className="w-5 h-5 -rotate-90 "/>
                            <Scrolllink to="main-page">
                                <p className="text-white  font-sans text-lg not-italic  leading-8 -rotate-90 ">На верх</p>
                            </Scrolllink>
                        </button>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;