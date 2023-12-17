import logo from "./images/2584800822768.svg"
import image from "./images/748 1.png"
import mouse from "./images/uil_mouse-alt.svg"
import instagram from "./images/ant-design_instagram-outlined.svg"
import telefon from "./images/ic_round-call.svg"
import messenger from "./images/jam_write-f.svg"
import  whatsapp from  "./images/bx_bxl-whatsapp.svg"
import medicfoto from "./images/Rectangle 83.png"
import profilefoto from "./images/Rectangle 53.png"
import arow from "./images/Component.svg"
import companylogo1 from "./images/companies logo/image 2.png"
import companylogo2 from "./images/companies logo/image 3.png"
import companylogo3 from "./images/companies logo/image 4.png"
import companylogo4 from "./images/companies logo/image 5.png"
import companylogo5 from "./images/companies logo/image 6.png"
import './App.css';

function App() {
  return (
      <>
          <div className="flex justify-center items-center  bg-regal-red">
              <img className="absolute bottom-0 right-0" src={image} alt="med tools"/>
              <div className="w-4/5">
                  <div className="relative h-screen">
                      <header className="flex justify-between items-center">
                          <div className="flex items-center">
                              <img src={logo} alt="med logo" className=" pr-10"/>
                              <h1 className="text-white font-sans text-2xl not-italic leading-8 font-bold">DIAGNOSTIC
                                  CENTER</h1>
                          </div>
                          <nav>
                              <ul className="list-none flex">
                                  <li className="text-white font-sans text-lg not-italic font-bold leading-8 pr-4">Главная</li>
                                  <li className="text-white  font-sans text-lg not-italic font-bold leading-8 pr-4">Наши
                                      врачи
                                  </li>
                                  <li className="text-white  font-sans text-lg not-italic font-bold leading-8 pr-4">Наши
                                      пациенты
                                  </li>
                                  <li className="text-white  font-sans text-lg not-italic font-bold leading-8 pr-4">О
                                      нас
                                  </li>
                                  <li className="text-white  font-sans text-lg not-italic font-bold leading-8 ">Новости</li>
                              </ul>
                          </nav>
                      </header>
                      <main>
                          <section className="h-screen">
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
                                      className="w-14 h-14 bg-instagram rounded-full flex justify-center items-center mr-5 border-amber-50 border hover:w-16 hover:h-16 hover:opacity-75">
                                      <img src={instagram} alt="instagram link"/></div>
                                  <div
                                      className="w-14 h-14 bg-telefon rounded-full flex justify-center items-center mr-5 border-amber-50 border hover:w-16 hover:h-16 hover:opacity-75">
                                      <img src={telefon} alt="telefon link"/></div>
                                  <div
                                      className="w-14 h-14 bg-messanger rounded-full flex justify-center items-center mr-5 border-amber-50 border hover:w-16 hover:h-16 hover:opacity-75">
                                      <img src={messenger} alt="messanger link"/></div>
                                  <div
                                      className="w-14 h-14 bg-whatsapp rounded-full flex justify-center items-center border-amber-50 border hover:w-16 hover:h-16 hover:opacity-75">
                                      <img src={whatsapp} alt="whatsapp link"/></div>
                              </div>
                          </section>
                      </main>
                  </div>
              </div>
          </div>
          <div className="flex">
                <div className="relative h-screen flex">
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
                <h1 className="text-telefon font-sans text-5xl not-italic font-bold leading-px-68 uppercase absolute top-14">Наши пациенты</h1>
                <div className="absolute top-32 flex flex-wrap">
                    <div className="flex mb-8 ">
                        <p className="text-cyan-800 font-sans text-sm not-italic font-bold leading-px-68 uppercase pr-5">Турлаков
                            Юрий</p>
                        <p className="text-red-600 font-sans text-sm not-italic font-bold leading-px-68 uppercase pr-5">Грип</p>
                        <p className="text-cyan-800 font-sans text-sm not-italic font-bold leading-px-68 uppercase pr-5">02:03:2020</p>
                    </div>
                </div>
            </div>
          </div>
          <div>
              <div className="h-screen relative">
                  <div className="bg-telefon h-3/6">
                      <div className="relative">
                          <h1 className="text-white font-sans text-5xl not-italic font-bold leading-px-68 uppercase absolute top-14 left-14">Наши
                              Специалисты</h1>
                          <div className="flex absolute top-32 left-16 ">
                              <div className="text-center">
                                  <img src={profilefoto} alt="profile foto"/>
                                  <h1 className="text-white font-sans font-bold leading-px-68 uppercase mr-32">Геннадий
                                      горин-терапевт</h1>
                              </div>
                              <div className="text-center ">
                                  <img src={profilefoto} alt="profile foto"/>
                                  <h1 className="text-white font-sans font-bold leading-px-68 uppercase mr-32">Геннадий
                                      горин-терапевт</h1>
                              </div>
                              <div className="text-center">
                                  <img src={profilefoto} alt="profile foto"/>
                                  <h1 className="text-white font-sans font-bold leading-px-68 uppercase mr-32">Геннадий
                                      горин-терапевт</h1>
                              </div>
                              <div className="text-center">
                                  <img src={profilefoto} alt="profile foto"/>
                                  <h1 className="text-white font-sans font-bold leading-px-68 uppercase mr-32">Геннадий
                                      горин-терапевт</h1>
                              </div>
                              <div className="text-center">
                                  <img src={profilefoto} alt="profile foto"/>
                                  <h1 className="text-white font-sans font-bold leading-px-68 uppercase">Геннадий
                                      горин-терапевт</h1>
                              </div>
                          </div>

                      </div>
                  </div>
                  <div className="bg-backforquestion h-16">
                      <button className="w-40 h-12 text-white font-sans text-sm not-italic
                          font-bold leading-px-68 uppercase absolute left-2/4 bottom-2/4 bg-transparent rounded-3xl
                          border border-amber-50 text-center mb-4">Все специалисты
                      </button>
                      <h1 className="text-white font-sans text-5xl not-italic font-bold leading-px-68 uppercase absolute left-14 ">Вопрос-ответ</h1>
                  </div>
                  <div className="bg-telefon h-2/5 flex justify-around pt-12 pb-12">
                      <div className=" flex flex-col text-center justify-between">
                          <p className="text-white font-sans font-bold leading-px-68 uppercase  ">Вопрос 1</p>
                          <p className="text-white font-sans font-bold leading-px-68 uppercase ">Вопрос 1</p>
                          <p className="text-white font-sans font-bold leading-px-68 uppercase ">Вопрос 1</p>
                          <p className="text-white font-sans font-bold leading-px-68 uppercase ">Вопрос 1</p>
                          <p className="text-white font-sans font-bold leading-px-68 uppercase  ">Вопрос 1</p>
                          <p className="text-white font-sans font-bold leading-px-68 uppercase ">Вопрос 1</p>
                          <p className="text-white font-sans font-bold leading-px-68 uppercase ">Вопрос 1</p>
                          <p className="text-white font-sans font-bold leading-px-68 uppercase ">Вопрос 1</p>
                      </div>
                      <div className=" flex flex-col text-center justify-between ">
                          <img src={arow} alt="arow" className="w-5 h-5"/>
                          <img src={arow} alt="arow" className="w-5 h-5"/>
                          <img src={arow} alt="arow" className="w-5 h-5"/>
                          <img src={arow} alt="arow" className="w-5 h-5"/>
                          <img src={arow} alt="arow" className="w-5 h-5"/>
                          <img src={arow} alt="arow" className="w-5 h-5"/>
                          <img src={arow} alt="arow" className="w-5 h-5"/>
                          <img src={arow} alt="arow" className="w-5 h-5"/>

                      </div>
                      <div className="">
                          <h1 className="text-white font-sans font-bold leading-px-68 uppercase">Ответ</h1>
                          <p className="text-white font-sans  leading-px-68 uppercase w-4/6">SDGLDHGJKLSDJGKHGJKDSHJKDSHFJKDHSJKFJKDSFHJKSDFHJKDHFJKSDJKFDSJKFHSDJKFJDFHJKSDHFJKD
                            FHDSFSDFJKDSFHDJHFDSJKFHSDJKFHJDSHFJKSDFHDKS
                            SDFDSFHKSDJFJKDSHFJKDSJKDSHKFS</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="h-96 flex justify-center ">
              <div className="w-4/5">
                  <h1 className="text-telefon font-sans text-5xl not-italic font-bold leading-px-68 uppercase mb-20">Нас
                      Рекомендуют</h1>
                  <div className="flex justify-around items-center">
                      <img src={companylogo1} alt=""/>
                      <img src={companylogo2} alt=""/>
                      <img src={companylogo3} alt=""/>
                      <img src={companylogo4} alt=""/>
                      <img src={companylogo5} alt=""/>
                  </div>
              </div>
          </div>
          <footer className="h-96 flex justify-center bg-[#333]">
              <div className="w-4/5 flex items-center justify-between">
                  <img src={logo} alt="logo" className="w-20 h-20"/>
                  <h1 className="text-white font-sans text-2xl not-italic leading-8 font-bold">DIAGNOSTIC
                      CENTER</h1>
                  <div className="flex flex-col">
                      <h1 className="text-white font-sans text-lg not-italic  leading-8 font-bold">Карта сайта</h1>
                      <nav>
                          <ul className="list-none flex flex-col">
                              <li className="text-white font-sans text-lg not-italic  leading-8 pr-4">Главная</li>
                              <li className="text-white  font-sans text-lg not-italic  leading-8 pr-4">Наши
                                  врачи
                              </li>
                              <li className="text-white  font-sans text-lg not-italic  leading-8 pr-4">Наши
                                  пациенты
                              </li>
                              <li className="text-white  font-sans text-lg not-italic  leading-8 pr-4">О
                                  нас
                              </li>
                              <li className="text-white  font-sans text-lg not-italic  leading-8 ">Новости</li>
                          </ul>
                      </nav>
                  </div>
                  <div>
                      <h1 className="text-white font-sans text-lg not-italic  leading-8 font-bold">Связаться с нами</h1>
                      <div className="flex ">
                          <div
                              className="w-4 h-4 bg-instagram rounded-full flex justify-center items-center mr-5 border-amber-50 border hover:w-6 hover:h-6 hover:opacity-75">
                              <img src={instagram} alt="instagram link"/></div>
                          <div
                              className="w-4 h-4 bg-telefon rounded-full flex justify-center items-center mr-5 border-amber-50 border hover:w-6 hover:h-6 hover:opacity-75">
                              <img src={telefon} alt="telefon link"/></div>
                          <div
                              className="w-4 h-4 bg-messanger rounded-full flex justify-center items-center mr-5 border-amber-50 border hover:w-6 hover:h-6 hover:opacity-75">
                              <img src={messenger} alt="messanger link"/></div>
                          <div
                              className="w-4 h-4 bg-whatsapp rounded-full flex justify-center items-center border-amber-50 border hover:w-6 hover:h-6 hover:opacity-75">
                              <img src={whatsapp} alt="whatsapp link"/></div>
                      </div>
                  </div>
                  <div className="">
                      <button>
                          <img src={arow} alt="arow" className="w-5 h-5 -rotate-90 "/>
                          <p className="text-white  font-sans text-lg not-italic  leading-8 -rotate-90 ">На верх</p>
                      </button>
                  </div>
              </div>
          </footer>
      </>
  );
}

export default App;
