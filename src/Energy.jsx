import { useState, useEffect } from 'react'
   import {useLocation } from 'react-router-dom';
import './css/App.css'
import "./css/Energy.css"
import { useNavigate } from 'react-router-dom';
import Header from './header';
import { Link } from 'react-router-dom';
import './css/header.css'
function Energy() {
const [load, setLoad] = useState(true);
 const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [rus, setRus] = useState(false);
  const [user, setUser] = useState(null);
  const[sliderIndex, setSliderIndex] = useState(0);
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
}, 600);

}, [])




return (
<>


<header className={`header ${scrollY >= 10 || menuOpen == true ? 'scrolled' : ''}`}> 
        <div className="headerCont">
          <div className={`logoH ${scrollY >= 10  || menuOpen == true ? 'scrolledlg' : ''}`}  onClick={() => {if(rus == true){navigate("/ru", {state:{rus: rus, user: user}})} else{navigate("/", {state:{rus: rus, user: user}})}}}></div>
          <div className="buttonsH">
            <Link className={`linkH ${scrollY >= 10  || menuOpen == true ? 'scrolledL' : ''}`}  onClick={() => setMenuOpen(!menuOpen)}>{rus ? "Транспорт" : "Vehicles"}</Link>
            <Link to={ "/charging"} state={{rus: rus, user: user}} className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Зарядки" : "Charging"}</Link>
            <Link to={"/discover"} state={{rus: rus, user: user}}   className={`linkH ${scrollY >= 10  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Исследуйте" : "Discover"}</Link>
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


<div style={{ top: "0", flexDirection: 'column', backgroundColor: 'black', left: 0, width: "100vw", height: 'auto', display: 'flex', alignItems: 'center', gap: '20px'}}>
        <div className="powerwallNRG">
         <div className="textvidNRG">
           <div className="vidcontNRGttl">{!rus ? 'Powerwall' : 'Powerwall'}</div>
          <div className="vidcontNRGsubttl">{!rus ? 'Over 1 Million Installed Globally' : 'Более 1 миллиона установлено по всему миру'}</div>
         </div>
         <div className="linkspowerNRG">
          <Link to={rus ? "/ru": "/"} state={{rus: rus, user: user}} className='btn order1 finNRG'>{rus ? "Найдите нас" : "Find Us"}</Link>
              <Link to={"/FaQ"} state={{rus: rus, user: user}}  className='learnCRG'>{rus ? "Узнать больше" : "Learn More"}</Link>
         </div>
        </div>

          <div className="infosubblockNRG">
            <div className="boxblockNRG">
              <div className="ttlboxNRG">6.7 GW</div>
              <div className="subttlNRG">{rus? "Мощность аккумуляторной батареи авто" : "Fleet Battery Power"}</div>
            </div>
            <div className="boxblockNRG"  style={{borderLeft: "1px solid white",borderRight: '1px solid white', paddingRight: '2vw',paddingLeft: '2vw'}}>
              <div className="ttlboxNRG">17.3 TWh</div>
              <div className="subttlNRG">{rus? "Доставка энергии для авто" : "Fleet Energy Delivered"}</div>
            </div>
            <div className="boxblockNRG">
              <div className="ttlboxNRG">{rus? "16,317 Лет" : "16,317 Years"}</div>
              <div className="subttlNRG">{rus? "Поддержка при сбоях в работе автопарка" : "Fleet Outage Support"}</div>
            </div>
          </div>

        <div className="phoneblockNRG">
          <div className="phonepicNRG"></div>
          <div className="phoneinfoNRG">
            <div className="phoneinfottlNRG">{rus? "Максимальная эффективность, меньшие затраты" : "Maximum Efficiency, Lower Cost"}</div>
            <div className="subttlphoneNRG">{rus? "Powerwall может обеспечить питанием весь ваш дом с помощью одного устройства, делая резервную защиту всего дома более доступной. Каждый блок автономен и оснащен встроенным солнечным инвертором для повышения эффективности, что позволяет уменьшить количество деталей и ускорить установку. Это делает многоблочные системы более доступными, а расширение системы в будущем — более простым." : "Powerwall can power your entire home with one unit, making whole-home backup protection more affordable. Each unit is self-contained with an integrated solar inverter for added efficiency, resulting in fewer parts and faster installation. This helps make multi-unit systems more affordable and system expansions easier in the future"}</div>
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

export default Energy
