import { useState, useEffect } from 'react'
   import {useLocation } from 'react-router-dom';
import './css/App.css'
import "./css/discstyle.css"
import { useNavigate } from 'react-router-dom';
import Header from './header';
import { Link } from 'react-router-dom';
import './css/header.css'
function Discover() {
const [load, setLoad] = useState(true);
 const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [rus, setRus] = useState(false);
  const [user, setUser] = useState(null);
  const [chooseWindow, setChooseWind] = useState(false);
  const [windowCount, setWindowCount] = useState(1);
  const [frstChosen, setfrstChosen] = useState(1);
  const [choise, setChoise] = useState(false)
const location = useLocation();
const navigate = useNavigate();

useEffect(() => {
document.title = `lab 1 JS`;
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
      setRus(location.state.rus)
    if (location.state?.user) {
      setUser(location.state.user);
    }
setTimeout(() => {
  setLoad(false)
}, 400);

}, [])




return (
<>


<header className={`header ${scrollY >= 10 || menuOpen == true ? 'scrolled' : ''}`}> 
        <div className="headerCont">
          <div className={`logoH ${scrollY >= 10  || menuOpen == true ? 'scrolledlg' : ''}`}  onClick={() => {if(rus == true){navigate("/ru", {state:{rus: rus, user: user}})} else{navigate("/", {state:{rus: rus, user: user}})}}}></div>
          <div className="buttonsH">
            <Link className={`linkH ${scrollY >= 10  || menuOpen == true ? 'scrolledL' : ''}`}  onClick={() => setMenuOpen(!menuOpen)}>{rus ? "Транспорт" : "Vehicles"}</Link>
            <Link to={ "/charging"} state={{rus: rus, user: user}} className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Зарядки" : "Charging"}</Link>
            <Link to={"/Energy"} state={{rus: rus, user: user}} className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Энергия" : "Energy"}</Link>
            <Link to={"/store"} state={{rus: rus, user: user}} className={`linkH ${scrollY >= 10  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Магазин" : "Shop"}</Link>
          </div>
          <div className="infosH" >
            <Link to={user ? "/cart":"/logIn"} state={{rus: rus, user: user}} className={`cartiC  ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></Link>
            <Link to={user ? "/account":"/logIn"}  state={{rus: rus, user: user}} className={`acc infoR ${scrollY >= 10 ? 'scrolledI' : 'NscrolledI'}`}></Link>
            <Link to={"/FaQ"} state={{rus: rus, user: user}} className={`faq infoR ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></Link>
            <div onClick={() => {setRus(!rus); setLoad(true); setTimeout(() =>{setLoad(false)}, 400)}} className={`lang infoR ${scrollY >= 10 ? 'scrolledI' : 'NscrolledI'}`}></div>
            </div>
        </div>
        <div className={`headMen ${menuOpen == true ? 'active' : 'nActive'}`}>
          { menuOpen ? (
            <div className='menuItems'>
              <div className="menuItem">
            <div className="menuPic mS"></div>
            <div className="menuText">{rus ? "Модель S" : "Model S"}</div>
          </div>
          <div className="menuItem">
            <div className="menuPic m3"></div>
            <div className="menuText">{rus ? "Модель 3" : "Model 3"}</div>
          </div>
          <div className="menuItem ">
            <div className="menuPic mY"></div>
            <div className="menuText">{rus ? "Модель Y" : "Model Y"}</div>
          </div>
            </div>
          ) :  null }
        </div>
      </header>


<div style={{position: 'fixed', left: 0, top: 0, zIndex: 100, flexDirection: 'column', backgroundColor: 'black', width: "100vw", height: 'auto', display: 'flex', alignItems: 'center', gap: '20px'}}>
      <div className="helpmelandDSC">
        <video autoPlay muted className='helpmevideoDSC'>
          <source src='/Help_Me_Choose_Landing_Desktop.webm'/>
        </video>
        <div className="infolandDSC">
          <div className="helpmettlDSC">{rus? "Помогите мне выбрать" : "Help Me Choose"}</div>
          <div className="helpmesubttlDSC">{rus? "Узнайте, какие модели Tesla соответствуют вашим потребностям, ответив на вопросы о вашем бюджете, привычках вождения и образе жизни." : "Discover which Tesla models meet your needs by answering questions about your budget, driving habits and lifestyle."}</div>
          <button className='helpmebtn' onClick={() => setChooseWind(true)}>{rus ? "Начать" : "Get Started"}</button>
        </div>
      </div>
      <div className="actualDSC" style={chooseWindow ? {display: 'flex'} : {display: "none"}}>
          <div className="rightslideOneDSC">
            <div className="right1partDSC">
              <div className="typesDSC" style={windowCount == 1 && frstChosen == 1 ? rus ? {display: 'flex', backgroundImage: `url(/models1Ru.png)`, backgroundSize: "90% 100%"} : {display: 'flex', backgroundImage: `url(/models1.png)`,  backgroundSize: "90% 100%"}: {}}></div>
              <div className="typesDSC" style={windowCount == 1 && frstChosen == 2 ? rus ? {display: 'flex', backgroundImage: `url(/models12Ru.png)`} : {display: 'flex', backgroundImage: `url(/models12.png)`}: {}}></div>
              <div className="typesDSC" style={windowCount == 1 && frstChosen == 3 ? {display: 'flex', backgroundImage: `url(/family1.avif)`}: {}}></div>
              <div className="typesDSC" style={windowCount == 2 ? rus ? {display: 'flex', backgroundImage: `url(/chargeRu.png)`, opacity: 0.8} : {display: 'flex', backgroundImage: `url(/chaege.png)`}: {}}></div>
              <div className="typesDSC" style={windowCount == 3 && frstChosen == 1 ? {display: 'flex', backgroundImage: `url(/range.avif)`}: {}}></div>
              <div className="typesDSC" style={windowCount == 3 && frstChosen == 2 ? {display: 'flex', backgroundImage: `url(/speed.avif)`}: {}}></div>
              <div className="typesDSC" style={windowCount == 3 && frstChosen == 3 ? {display: 'flex', backgroundImage: `url(/luxury.avif)`}: {}}></div>
              <div className="typesDSC" style={windowCount == 3 && frstChosen == 4 ? {display: 'flex', backgroundImage: `url(/utility.avif)`}: {}}></div>
              <div className="typesDSC" style={windowCount == 3 && frstChosen == 5 ? {display: 'flex', backgroundImage: `url(/affordability.avif)`}: {}}></div>
            </div>
          </div>
          <div className="leftslideDSC">
                <div className="loadingbarDSC">
                  <div className="loadblock" style={windowCount >= 2 ?{backgroundColor: "rgb(0, 106, 255)"} : {}}></div>
                  <div className="loadblock" style={windowCount >= 3 ?{backgroundColor: "rgb(0, 106, 255)"} : {}}></div>
                  <div className="loadblock" style={windowCount >= 4 ?{backgroundColor: "rgb(0, 106, 255)"} : {}}></div>
                </div>
                <div className="downleftslideDSC">
                  <div className="backbtnDSC" onClick={() => {if(windowCount == 1){setChooseWind(false)}else{setWindowCount(windowCount-1), setfrstChosen(1)}}}>
                    <div className="arrowleftDSC"></div>
                    {rus ? "Назад" : "Back"}
                  </div>
                  <div className="leftsidettlDSC">{windowCount == 1 ? rus ? "Какой стиль автомобиля вы ищете?" : "What style of vehicle are you looking for?" : ""} {windowCount == 2 ? rus ? "Какой стиль автомобиля вы ищете?" : "How far do you drive each day?" : ""}{windowCount == 3 ? rus ? "Чего вы больше всего хотите от своего следующего автомобиля?" : "What do you want most from your next vehicle?" : ""}{windowCount == 4 ? rus ? "Как вы будете использовать свой новый автомобиль?" : "How will you use your new vehicle?" : ""}</div>
                  <div className="firstpageDownDSC">
                    <div className="firstslideDSC" style={windowCount == 1 ? {display: 'flex'} : {display: "none"}}>
                      <div className={frstChosen != 1 ? "btnDSC" : "btnDSC chosenbtnDSC"} onClick={() => setfrstChosen(1)}>{rus ? "Седан" : "Sedan"}</div>
                       <div className={frstChosen != 2 ? "btnDSC" : "btnDSC chosenbtnDSC"}  onClick={() => setfrstChosen(2)}>{rus ? "Внедорожник или грузовик" : "SUV or Truck"}</div>
                        <div className={frstChosen != 3 ? "btnDSC" : "btnDSC chosenbtnDSC"}  onClick={() => setfrstChosen(3)}>{rus ? "Я гибкий" : "I'm flexible"}</div>
                    </div>
                    <div className="firstslideDSC" style={windowCount == 2 ? {display: 'flex'} : {display: "none"}}>
                      <div className={frstChosen != 1 ? "btnDSC" : "btnDSC chosenbtnDSC"} onClick={() => setfrstChosen(1)}>{rus ? "0-40 Миль" : "0-40 Miles"}</div>
                       <div className={frstChosen != 2 ? "btnDSC" : "btnDSC chosenbtnDSC"}  onClick={() => setfrstChosen(2)}>{rus ? "40-100 Миль" : "40-100 Miles"}</div>
                        <div className={frstChosen != 3 ? "btnDSC" : "btnDSC chosenbtnDSC"}  onClick={() => setfrstChosen(3)}>{rus ? "100+ Миль" : "100+ Miles"}</div>
                    </div>
                    <div className="firstslideDSC" style={windowCount == 3 ? {display: 'flex'} : {display: "none"}}>
                      <div className={frstChosen != 1 ? "btnDSC" : "btnDSC chosenbtnDSC"} onClick={() => setfrstChosen(1)}>{rus ? "Диапазон" : "Range"}</div>
                       <div className={frstChosen != 2 ? "btnDSC" : "btnDSC chosenbtnDSC"}  onClick={() => setfrstChosen(2)}>{rus ? "Скорость" : "Speed"}</div>
                        <div className={frstChosen != 3 ? "btnDSC" : "btnDSC chosenbtnDSC"}  onClick={() => setfrstChosen(3)}>{rus ? "Роскошь" : "Luxury"}</div>
                         <div className={frstChosen != 4 ? "btnDSC" : "btnDSC chosenbtnDSC"}  onClick={() => setfrstChosen(4)}>{rus ? "Выгодность" : "Utility"}</div>
                          <div className={frstChosen != 5 ? "btnDSC" : "btnDSC chosenbtnDSC"}  onClick={() => setfrstChosen(5)}>{rus ? "Доступность" : "Affordability"}</div>
                    </div>
                  </div>
                  <div className="btnDSC btnnextDSC" style={windowCount == 3 ? {display: 'none'} : {display: 'block'}}   onClick={() => setWindowCount(windowCount+1)}>{rus ? "Далее" : "Next"}</div>
                  <div className="btnDSC btnnextDSC" style={windowCount == 3 ? {display: 'block'} : {display: 'none'}} onClick={() => {setChoise(true), setChooseWind(false)}}>{rus ? "Подтвердить" : "Submit"}</div>
                </div>
            </div>
        </div>
          
          <div className="actual2DSC" style={choise ? {display: 'flex'} : {display: 'none'}}>
              <div className="picchoiseDSC" style={frstChosen > 2 ? {backgroundImage: `url('https://digitalassets.tesla.com/discovery-tesla-com/image/upload/f_auto,q_auto/HMC-Result-M3-US-010924.png')`} : {backgroundImage: `url('https://digitalassets.tesla.com/discovery-tesla-com/image/upload/f_auto,q_auto/HMC-Result-CT-Cyberbeast.png')`}}></div>
              <div className="leftsideDSC">
                 <div className="backbtnDSC" onClick={() => {setChoise(false), setChooseWind(true)}}>
                    <div className="arrowleftDSC"></div>
                    {rus ? "Назад" : "Back"}
                  </div>
                  {frstChosen > 2 ? <div><div className="leftsidettlDSC">{rus ? 'Model 3' : 'Model 3'}</div>
                  <div className="descriptionttlDSC">{rus ? 'Наш вариант' : 'Our option'}</div>
                  <div className="descDSC">{rus ? "Наш спортивный седан. Отличный вариант для семей и поездок на работу." : "Our sports sedan. Great for families and commuting"}</div>
                  <div className="priceDSC">{rus ? "Начальная цена" : "Starting price "}</div>
                  <div className="pricesubDSC">$42,490</div>
                  <div className="priceDSC">{rus ? "Длительность" : "Range"}</div>
                  <div className="pricesubDSC">325 {rus ? "миль" : "miles"}</div>
                   <div className="btnDSC2" onClick={() => navigate('/store/item/69173dfdbf7a0d81410fc6d9', {state :{rus: rus, user: user}})}>{rus ? "Перейти в магазин" : "Visit store"}</div></div> :
                   
                   <div><div className="leftsidettlDSC">{rus ? 'Cyberbeast' : 'Cyberbeast'}</div>
                  <div className="descriptionttlDSC">{rus ? 'Наш вариант' : 'Our option'}</div>
                  <div className="descDSC">{rus ? "Наш пикап. Отлично подходит для автопутешествий, кемпинга и буксировки. Прочный корпус, просторный салон и передовые технологии." : "Our pickup truck. Great for road trips, car camping and towing with a durable exterior, a spacious interior and advanced technology."}</div>
                  <div className="priceDSC">{rus ? "Начальная цена" : "Starting price "}</div>
                  <div className="pricesubDSC">$114,990</div>
                  <div className="priceDSC">{rus ? "Длительность" : "Range"}</div>
                  <div className="pricesubDSC">320 {rus ? "миль" : "miles"}</div>
                   <div className="btnDSC2" onClick={() => navigate('/store/item/69173e9abf7a0d81410fc6da', {state :{rus: rus, user: user}})}>{rus ? "Перейти в магазин" : "Visit store"}</div></div>
                   }
                  
              </div>
          </div>

 <div style={load ? {display: 'flex'}: {display: "none"}} className="loadS">
 <div className="loader">

 </div>
 </div>


</div>
</>
)




} 

export default Discover
