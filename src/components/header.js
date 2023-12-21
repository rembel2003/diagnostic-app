import React from 'react';
import logo from "../images/2584800822768.svg";
import {Link} from "react-router-dom";
import ScrollLink from "./scrolllink";

function Header(props) {
    return (
        <>
            <header className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="med logo" className=" pr-10"/>
                    <h1 className="text-white font-sans text-2xl not-italic leading-8 font-bold">DIAGNOSTIC
                        CENTER</h1>
                </div>
                <nav>
                    <ul className="list-none flex">
                        <li className="text-white font-sans text-lg not-italic font-bold leading-8 pr-4"><Link to="/">Главная</Link></li>
                        <li className="text-white  font-sans text-lg not-italic font-bold leading-8 pr-4">
                            <ScrollLink to="doctors">Наши врачи</ScrollLink>
                        </li>
                        <li className="text-white  font-sans text-lg not-italic font-bold leading-8 pr-4"><ScrollLink to="pacients">Наши
                                пациенты</ScrollLink>
                        </li>
                        <li className="text-white  font-sans text-lg not-italic font-bold leading-8 pr-4"><ScrollLink to="about-us">О
                                нас</ScrollLink>
                        </li>
                        <li className="text-white  font-sans text-lg not-italic font-bold leading-8 "><ScrollLink to="questions">Вопросы</ScrollLink></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;