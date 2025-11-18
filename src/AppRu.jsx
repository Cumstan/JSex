import { useState, useEffect } from 'react'
import './css/App.css'
import Header from './header';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import './css/header.css'
function AppRu() {
const [bg, setBg] = useState(0);
const [load, setLoad] = useState(true);
  const [user, setUser] = useState(null);
const bgImages = [
'url("/bg2.avif")',  
'url("/Promo 1.avif")',
];

 const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [rus, setRus] = useState(false);
  const navigate = useNavigate();
const location = useLocation();



 useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const isRu = window.location.pathname.includes("ru");
    setRus(isRu);
    if (location.state?.user) {
      setUser(location.state.user);
    }
    document.title = "bebra";
  }, []);



return (
<>


<div className={`header ${scrollY > 50 || menuOpen == true ? 'scrolled' : ''}`}> 
        <div className="headerCont">
          <div className={`logoH ${scrollY > 50  || menuOpen == true ? 'scrolledlg' : ''}`}></div>
          <div className="buttonsH">
            <Link className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}  onClick={() => setMenuOpen(!menuOpen)}>{rus ? "Транспорт" : "Vehicles"}</Link>
            <Link to={"/Energy"} state={{rus: rus, user: user}} className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Энергия" : "Energy"}</Link>
            <Link to="/charging"  state={{rus: rus, user: user}} className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Зарядки" : "Charging"}</Link>
            <Link to={"/discover"} state={{rus: rus, user: user}}   className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Исследуйте" : "Discover"}</Link>
            <Link to="/store"  state={{rus: rus, user: user}} className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Магазин" : "Shop"}</Link>
          </div>
          <div className="infosH">
            <Link to={user ? "/cart":"/logIn"} state={{rus: rus, user: user}} className={`cartiC  ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></Link>
            <Link  to="/FaQ"  state={{rus: rus, user: user}} className={`faq infoR ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></Link>
             <Link to={user ? "/account":"/logIn"} state={{rus: rus, user: user}} className={`acc infoR ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></Link>
            <div onClick={() => navigate("/", {state: {rus: rus, user: user}})} className={`lang infoR ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></div>
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
      </div>


<div style={{width: "100vw", height: '300vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
<div
style={{
  backgroundImage: bgImages[bg % bgImages.length],
  backgroundSize: 'cover',
  transition: 'background-image 0.4s ease-in-out',
  backgroundPosition: 'center',
  width: '100vw',
}}
className="container1"
>
<div className="infocont1">
  <div className="titleMod">Модель 3</div>
  <div className="titleMod2">2.99% Процентная ставка</div>
  <div className="buttons">
    <button className="btn order1">Закажите сейчас</button>
    <button className="btn order2">Просмотр инвентаря</button>
  </div>
</div>
</div>

<div className="offers">
<div className="off">
  <div className="offCont">
    <div className="titleof">Предложения</div>
    <div className="descof"><i>Ограниченное предложение</i></div>
    <div className="learnMorebtn">Узнать больше</div>
  </div>
  <div className="offPic off1"></div>
</div>
<div className="off">
  <div className="offCont">
    <div className="titleof">Установлено 1 мил. Powerwall</div>
    <div className="descof"><b>Теперь свет горит в 30 странах.</b></div>
    <div className="learnMorebtn">Узнать больше</div>
  </div>
  <div className="offPic off2"></div>
</div>
</div>
  <div className="infosss">
    <div className="vid">
    <   iframe  style={{borderRadius: '10px', height: '50vh', width: "40vw"}} src="https://www.youtube.com/embed/i9Mq9GMi0QA" title="Watch The Tesla Plaid Go 0-160 MPH" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

    <audio controls src="cb.mp3">
      Your browser does not support the audio element.
    </audio>
    </div>
    <div className="workList">
<div className="workertit">Работники</div>
<div className="list">
<ul className='listUL'><b>CEO</b><ol>
Илон Маск
</ol>

  <ol><b>рабочие</b><ol>
  <dl>
  <dt><b>Вице-президент</b></dt>
  <dd>Марк Бернес</dd>
  <dt><b>Другие специалисты</b></dt>
  <li className='ppls'>Эндрю Софт</li>
  <li className='ppls'>Алекс Топлин</li>
  <li className='ppls'>Виктор Разински</li>
  <li className='ppls'>Мария Сорокина</li>
  </dl>

  <ol><b>3D специалисты</b><ol>
  <ul>
    <li>Эндрю Софт</li>
  <li>боб Софт
  <ul>
  <li>Деррек Топлин</li>
  <li>Уилл Бернес     
  <ul>
  <li>Эндрю Софт</li>
  <li>Андрей Сорокин</li>
  </ul>
  </li>   
   </ul>   
  </li>     
  </ul>
  </ol>
  </ol>
  </ol>
  </ol>
  </ul>
</div>
</div>
  </div>

 <div className="mapTes">
  <div className="mapouter" style={{position: "relative", textAlign: "right", width:"85vw", height:"50vh"}}>  
  <div className="gmap_canvas" style={{overflow: "hidden", background: "none!important", width:"85vw", height:"50vh"}}>
    <iframe width="85vw" height="50vh" style={{border: "0", borderRadius: "10px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/search?q=tesla's%60chargers&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=3.5"></iframe>
  </div>
  <a href="https://norsumediagroup.com/embed-google-map-website-free" target="_blank" rel="noopener noreferrer" className="gme-generated-link">Embed Map on Website for Free</a>
  </div>
  <div className="infosmap">
    <div className="maptit">
    <div className="mapTitle">Найдите свой заряд</div>
    <div className="mapsubtitle">Ознакомьтесь с сетью зарядных станций Tesla Supercharger и Destination Chargers.</div>
    <div className="mapbuttons">
      <button onClick={() => {window.location = "https://www.tesla.com/findus?bounds=51.7319945938987%2C-69.02751368125%2C23.006232494385678%2C-144.04216211875"}} className="btnmap btn order1">
Просмотр сети</button>
      <button className="btnmap btn order2" onClick={() => {window.location = "https://www.tesla.com/charging"}}>Узнать больше</button>
    </div>
    </div>

    <div className="chargesnum">
      <div className="chargbox">
        <div className="chartit">
        11 655 <div className="iconchar"></div>
      </div>
      <div className="subchartit">Нагнетателей</div>
      </div>
      <div className="chargbox">
        <div className="chartit">
        1 921 <div className="iconchar2"></div>
      </div>
      <div className="subchartit">Зарядок в пункте назначения</div>
      </div>
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

export default AppRu
