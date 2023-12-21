import React from 'react';
import image from "../images/748 1.png";
import Header from "./header";
import MainPage from "./main page";
import PacientsInfo from "./pacients-info";
import Doctors from "./doctor-question/doctors";
import Recomendations from "./recomendations";
import Footer from "./footer";

function Home(props) {
    return (
        <>
            <div className="flex justify-center items-center  bg-regal-red">
                <img className="absolute bottom-0 right-0" src={image} alt="med tools"/>
                <div className="w-4/5">
                    <div className="relative h-screen">
                        <Header/>
                        <MainPage/>
                    </div>
                </div>
            </div>
            <PacientsInfo/>
            <Doctors/>
            <Recomendations/>
            <Footer/>
        </>
    );
}

export default Home;