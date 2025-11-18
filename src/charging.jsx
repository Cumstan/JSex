import { useState, useEffect } from 'react'
   import {useLocation } from 'react-router-dom';
import './css/App.css'
import "./css/charging.css"
import { useNavigate } from 'react-router-dom';
import Header from './header';
import { Link } from 'react-router-dom';
import './css/header.css'
function Charge() {
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
      console.log(user);
    }
setTimeout(() => {
  setLoad(false)
}, 600);

}, [])




return (
<>


<header className={`header ${scrollY >= 10 || menuOpen == true ? 'scrolled' : ''}`}> 
        <div className="headerCont">
          <div className={`logoH ${scrollY >= 10  || menuOpen == true ? 'scrolledlg' : ''}`} onClick={() => {if(rus == true){navigate("/ru", {state:{rus: rus, user: user}})} else{navigate("/", {state:{rus: rus, user: user}})}}}></div>
          <div className="buttonsH">
            <Link className={`linkH ${scrollY >= 10  || menuOpen == true ? 'scrolledL' : ''}`}  onClick={() => setMenuOpen(!menuOpen)}>{rus ? "Транспорт" : "Vehicles"}</Link>
            <Link to={"/Energy"} state={{rus: rus, user: user}} className={`linkH ${scrollY >= 10  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Энергия" : "Energy"}</Link>
            <Link  to={"/discover"} state={{rus: rus, user: user}} className={`linkH ${scrollY >= 10  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Исследуйте" : "Discover"}</Link>
            <Link to={"/store"} state={{rus: rus, user: user}} className={`linkH ${scrollY >= 10  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Магазин" : "Shop"}</Link>
          </div>
          <div className="infosH" >
            <Link to={user ? "/cart":"/logIn"} state={{rus: rus, user: user}} className={`cartiC  ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></Link>
            <Link to={"/FaQ"} state={{rus: rus, user: user}} className={`faq infoR ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></Link>
           <Link to={user ? "/account":"/logIn"} state={{rus: rus, user: user}} className={`acc infoR ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></Link>
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


<div style={{ top: "0", flexDirection: 'column', backgroundColor: "white", left: 0, width: "100vw", height: 'auto', display: 'flex', alignItems: 'center', gap: '20px'}}>
        <div className="vidcontCRG">
         <video className='vidCRG' autoPlay muted loop>
            <source src="Charging-Hero-Desktop.webm" type="video/mp4"></source>
         </video>
         <div className="textvidCRG">
           <div className="vidcontCRGttl">{!rus ? 'Charging' : 'Зарядка'}</div>
          <div className="vidcontCRGsubttl">{!rus ? 'Go Anywhere, Charge Everywhere' : 'Отправляйтесь куда угодно, заряжайтесь везде'}</div>
         </div>
        </div>

          <div className="findusBlockCRG">
            <div className="leftsidefindusCRG">
              <div className="leftsideTTLCRG">{!rus ? 'Locations' : 'Места'}</div>
               <div className="leftsideTTL2CRG">{!rus ? 'Go Anywhere' : 'Куда угодно'}</div>
               <div className="descleftsideCRG">{!rus ? "With 70,000+ Superchargers, Tesla owns and operates the largest global, fast charging network in the world. Located on major routes near convenient amenities, Superchargers keep you charged when you're away from home. Simply plug in, charge and go." : 'Tesla владеет и управляет крупнейшей в мире сетью быстрых зарядных станций Supercharger, насчитывающей более 70 000. Расположенные на основных магистралях рядом с удобными объектами инфраструктуры, станции Supercharger обеспечат вашу зарядку, когда вы вдали от дома. Просто подключите, зарядите и поезжайте.'}</div>
                <Link to={"/"} state={rus}  className='findusCRG'>{!rus ? 'Find Us' : 'Найти нас'}</Link>
            </div>
            <div className="rightsidePicCRG"></div>
          </div>

        <div className="destinationCRG">
          <div className="destinationTTLCRG">{rus ? "Просто введите пункт назначения" : "Just Enter Your Destination"}</div>
          <div className="destinationSubttlCRG">{rus ? "Ваш Tesla автоматически находит оптимальный маршрут и предлагает зарядные станции по пути." : "Your Tesla automatically finds the best route and suggests charging stations along the way."}</div>
          <div className={`destinPicCRG ${sliderIndex==0 ? "pic1CRG" : sliderIndex == 1 ? "pic2CRG" : "pic3CRG"}`}></div>
          <div className="destinBlockCRG">
            <div className={`destinSubBlockCRG ${sliderIndex==0 ? "": "unactiveblockCRG"}`} onClick={() => setSliderIndex(0)}>
              <div className="subblockttlCRG">{rus ? "Оптимизирует маршрут" : "Optimizes Route"}</div>
              <div className="subblockinfoCRG">{rus ? "Находит оптимальный маршрут, позволяющий избежать пробок, и при необходимости взимает плату." : "Finds the best route to avoid traffic and charge if needed."}</div>
            </div>
            <div className={`destinSubBlockCRG ${sliderIndex==1 ? "": "unactiveblockCRG"}`} onClick={() => setSliderIndex(1)}>
              <div className="subblockttlCRG">{rus ? "Меры батареи" : "Measures Battery"}</div>
              <div className="subblockinfoCRG">{rus ? "Дает оценку заряда аккумулятора в режиме реального времени на основе вашего стиля вождения." : "Gives real-time battery estimates based on your driving style."}</div>
            </div>
            <div className={`destinSubBlockCRG ${sliderIndex==2 ? "": "unactiveblockCRG"}`} onClick={() => setSliderIndex(2)}>
              <div className="subblockttlCRG">{rus ? "Рекомендует зарядные устройства" : "Recommends Chargers"}</div>
              <div className="subblockinfoCRG">{rus ? "Предлагает рекомендации по местам зарядки по вашему маршруту." : "Offers charging location recommendations along your route."}</div>
            </div>
          </div>
        </div>

        <div className="goanywhereCRG">
          <div className="ttlblockanyCRG">
              <div className="goanywhereTTLCRG">{rus ? "Свобода идти куда угодно" : "Freedom to Go Anywhere"}</div>
          <div className="goanywheresubTTLCRG">{rus ? "Заряжайтесь с помощью крупнейшей в мире сети станций быстрой зарядки. Наша сеть Supercharger обширна, сверхбыстра и надежна." : "Recharge with the world’s largest fast-charging network. Our Supercharger network is expansive, ultra-fast and reliable."}</div>
            <div className="linksgoanyCRG">
              <Link to={rus? "ru" : "/"} state={{rus: rus, user: user}} className='findus2CRG'>{rus ? "Найдите нас" : "Find Us"}</Link>
              <Link to={"/FaQ"} state={{rus: rus, user: user}}  className='learnCRG'>{rus ? "Узнать больше" : "Learn More"}</Link>
            </div>
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

export default Charge
