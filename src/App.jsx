import { useState, useEffect } from 'react'
import './css/App.css'
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import './css/header.css'
import Header from './header.jsx'



function App() {
const [load, setLoad] = useState(true);
const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [rus, setRus] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [MobileMenu, setMobileMenu] = useState(false)
const location = useLocation();
    useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);



 useEffect(() => {
  console.log(location.state);
  
  setTimeout(() => {

    if (location.state?.user) {
      setUser(location.state.user);
    }
  }, 100);

  document.title = "bebra";
}, []);
useEffect(() => {
  const timer = setTimeout(() => setLoad(false), 600);
  return () => clearTimeout(timer);
}, []); 









return (
<>
  <header className={`header ${scrollY > 50 || menuOpen == true ? 'scrolled' : ''}`}> 
        <div className="headerCont">
          <div className={`logoH ${scrollY > 50  || menuOpen == true ? 'scrolledlg' : ''}`}></div>
          <div className="buttonsH">
            <Link className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}  onClick={() => setMenuOpen(!menuOpen)}>{rus ? "Транспорт" : "Vehicles"}</Link>
            <Link to={"/Energy"} state={{rus: rus, user: user}} className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Энергия" : "Energy"}</Link>
            <Link to={ "/charging"} state={{rus: rus, user: user}} className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Зарядки" : "Charging"}</Link>
            <Link to={ "/discover"} state={{rus: rus, user: user}} className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Исследуйте" : "Discover"}</Link>
            <Link to={ "/store"} state={{rus: rus, user: user}}className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Магазин" : "Shop"}</Link>
          </div>
          <div className="infosH">
            <Link to={user ? "/cart":"/logIn"} state={{rus: rus, user: user}} className={`cartiC  ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></Link>
            <Link to={"/FaQ"} state={{rus: rus, user: user}} className={`faq infoR ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></Link>
            <Link to={user ? "/account":"/logIn"} state={{rus: rus, user: user}} className={`acc infoR ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></Link>
            <div onClick={() => navigate("/ru" , {state: {rus: rus, user: user}})} className={`lang infoR ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></div>
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
        <header className="MobileMenu">
          <div className="topMenMobile">
            <div className={`logoH scrolledlg`} onClick={() => {window.location.href = "/";}}></div>
          <div className="menuBtn" onClick={() => setMobileMenu(!MobileMenu)}>Menu</div>
         </div>
         <div className={`bottomMenMobile ${MobileMenu == true ? 'activeMoblMen' : ''}`}>
          { MobileMenu ? (

            <div className="bottomMobilecont">
              <div className="buttonsH" >
            <Link className={`linkH scrolledL`}  onClick={() => setMenuOpen(!menuOpen)}>{rus ? "Транспорт" : "Vehicles"}</Link>
            <Link to={ "/Energy"} state={{rus: rus, user: user}} className={`linkH scrolledL`}>{rus ? "Энергия" : "Energy"}</Link>
            <Link to={ "/charging"}  state={{rus: rus, user: user}} className={`linkH scrolledL`}>{rus ? "Зарядки" : "Charging"}</Link>
            <Link to={ "/discover"}  state={{rus: rus, user: user}} className={`linkH scrolledL`} >{rus ? "Исследуйте" : "Discover"}</Link>
            <Link to={ "/store"}  state={{rus: rus, user: user}} className={`linkH scrolledL`}>{rus ? "Магазин" : "Shop"}</Link>
          </div>
          <div className="infosH">
            <Link to={"/FaQ"}  state={{rus: rus, user: user}} className={`faq infoR scrolledI`}></Link>
            <Link to={ "/logIn"}  state={{rus: rus, user: user}} className={`acc infoR scrolledI`}></Link>
            <div onClick={() => navigate("/ru" , {state: {rus: rus, user: user}})}  className={`lang infoR scrolledI`}></div>
            </div>
            </div>
            ): null}
            </div>
      </header>
<div style={{width: "100vw", height: '300vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
<div
style={{
  backgroundSize: 'cover',
  transition: 'background-image 0.4s ease-in-out',
  backgroundPosition: 'center',
  width: '100vw',
}}
className="container1 bg1M"
>
<div className="infocont1">
  <div className="titleMod">Model 3</div>
  <div className="titleMod2">2.99% APR Available</div>
  <div className="buttons">
    <button className="btn order1" onClick={() => {window.location = "https://www.tesla.com/model3/design"}}>Order Now</button>
    <button className="btn order2" onClick={() => {window.location = "https://www.tesla.com/inventory/new/m3"}}>View Inventory</button>
  </div>
</div>
</div>

<div className="offers">
<div className="off">
  <div className="offCont">
    <div className="titleof">Current Offers</div>
    <div className="descof"><i>Limited inventory. Take delivery today.</i></div>
    <div className="learnMorebtn" onClick={() => {window.location = "https://www.tesla.com/current-offers"}}>Learn More</div>
  </div>
  <div className="offPic off1"></div>
</div>
<div className="off">
  <div className="offCont">
    <div className="titleof">1 Million Powerwalls Installed</div>
    <div className="descof"><b>Now keeping the lights on in 30 countries.</b></div>
    <div className="learnMorebtn" onClick={() => {window.location = "https://www.votetesla.com/"}}>Learn More</div>
  </div>
  <div className="offPic off2"></div>
</div>
</div>
  <div className="infosss">
    <div className="vid">
    <   iframe className='iframeVid' src="https://www.youtube.com/embed/i9Mq9GMi0QA" title="Watch The Tesla Plaid Go 0-160 MPH" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

    <audio className='audioMain' controls src="cb.mp3">
      Your browser does not support the audio element.
    </audio>
    </div>
    <div className="workList">
<div className="workertit">Workers</div>
<div className="list">
<ul className='listUL'><b>CEO</b><ol>
Elon Musk
</ol>

  <ol><b>CAST</b><ol>
  <dl>
  <dt><b>Vice-president</b></dt>
  <dd>Mark Bernes</dd>
  <dt><b>Other specialists</b></dt>
  <li className='ppls'>Andrew Soft</li>
  <li className='ppls'>Alex Toplin</li>
  <li className='ppls'>Victor Razinski</li>
  <li className='ppls'>Maria Sorokina</li>
  </dl>

  <ol><b>3D specialists</b><ol>
  <ul>
    <li>Andrew Soft</li>
  <li>Bob Soft
  <ul>
  <li>Derreck Toplin</li>
  <li>will Bernes     
  <ul>
  <li>Andrew Razinski</li>
  <li>Andrew Sorokin</li>
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
    <iframe width="85vw" height="50vh" style={{border: "0", borderRadius: "10px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/search?q=tesla's%60chargers&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=3.5&language=en"></iframe>
  </div>
  <a href="https://norsumediagroup.com/embed-google-map-website-free" loading="lazy" target="_blank" rel="noopener noreferrer" className="gme-generated-link">Embed Map on Website for Free</a>
  </div>
  <div className="infosmap">
    <div className="maptit">
    <div className="mapTitle">Find Your Charge</div>
    <div className="mapsubtitle">View the network of Tesla Superchargers and Destination Chargers available near you.</div>
    <div className="mapbuttons">
      <button className="btnmap btn order1" onClick={() => {window.location = "https://www.tesla.com/findus?bounds=51.7319945938987%2C-69.02751368125%2C23.006232494385678%2C-144.04216211875"}}>View Network</button>
      <button className="btnmap btn order2" onClick={() => {window.location = "https://www.tesla.com/charging"}}>Learn More</button>
    </div>
    </div>

    <div className="chargesnum">
      <div className="chargbox">
        <div className="chartit">
        11 655 <div className="iconchar"></div>
      </div>
      <div className="subchartit">Superchargers</div>
      </div>
      <div className="chargbox">
        <div className="chartit">
        1 921 <div className="iconchar2"></div>
      </div>
      <div className="subchartit">Destination Chargers</div>
      </div>
    </div>
  </div>
 </div>
 <div  style={load ? {display: 'flex'}: {display: "none"}} className="loadS">
 <div className="loader">

 </div>
 </div>

</div>
</>
)




}

export default App
