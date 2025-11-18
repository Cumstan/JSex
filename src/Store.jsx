import { useState, useEffect } from 'react'
import './css/App.css'
import { useGSAP } from '@gsap/react/dist/index.js';
import { Draggable } from 'gsap/all';
import InertiaPlugin from 'gsap/InertiaPlugin';
import MorphSVGPlugin from 'gsap/MorphSVGPlugin';
import Physics2DPlugin from 'gsap/Physics2DPlugin';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './css/header.css'
import "./css/store.css"
import { gsap } from "gsap/dist/gsap";
   import {useLocation } from 'react-router-dom';

function Store() {
const [load, setLoad] = useState(true);
const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
const [user, setUser] = useState(null);
const [drag, setDrag] = useState(false )
const [rus, setRus] = useState(false);
const [sliderX, setSliderX] = useState("0");
const location = useLocation();
 const [shopItems, setShopItems] = useState([]);
useEffect(() => {
document.title = `Store`;
    gsap.registerPlugin(useGSAP,Draggable,InertiaPlugin, MorphSVGPlugin, Physics2DPlugin);
    if(location.state?.rus){
        setRus(location.state.rus)
    }
     if (location.state?.user) {
    setUser(location.state.user);
   }
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

      fetch("https://serverex-xmpr.onrender.com/api/items")
    .then(res => res.json())
    .then(data => {
      setShopItems(data);
    })
    .catch(err => console.error(err));




 Draggable.create(".actSlider2SHOP", {
  type: 'x',
  bounds: '.slider2blockSHOP',
   inertia: true,
  onDragEnd: function () {
    gsap
      .timeline({defaults:{
        duration: this.tween.duration() / 2,
                cursor: 'pointer',
        ease: "power1",
        yoyoEase: "sine.inOut",
        zIndex: -4,
        repeat: 1,}
 })}})



setTimeout(() => {
  setLoad(false)
}, 600);
}, [])













return (
<>
  <header className={`header ${scrollY > 50 || menuOpen == true ? 'scrolled' : ''}`}> 
        <div className="headerCont">
          <div className={`logoH ${scrollY > 50  || menuOpen == true ? 'scrolledlg' : ''}`}  onClick={() => {if(rus == true){navigate("/ru", {state:{rus: rus, user: user}})} else{navigate("/", {state:{rus: rus, user: user}})}}}></div>
          <div className="buttonsH" style={{marginLeft: "4vw"}}>
            <Link className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}  onClick={() => setMenuOpen(!menuOpen)}>{rus ? "Транспорт" : "Vehicles"}</Link>
            <Link to={"/Energy"} state={{rus: rus, user: user}} className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Энергия" : "Energy"}</Link>
            <Link to={ "/charging"} state={{rus: rus, user: user}} className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Зарядки" : "Charging"}</Link>
            <Link  to={"/discover"} state={{rus: rus, user: user}}  className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Исследуйте" : "Discover"}</Link>
          </div>
          <div className="infosH">
             <Link to={user ? "/cart":"/logIn"} state={{rus: rus, user: user}} className={`cartiC  ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></Link>
            <Link to="/FaQ"  state={{rus: rus, user: user}} className={`faq infoR ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></Link>
           <Link to={user ? "/account":"/logIn"} state={{rus: rus, user: user}} className={`acc infoR ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></Link>
            <div  onClick={() => {setRus(!rus); setLoad(true); setTimeout(() =>{setLoad(false)}, 400)}} className={`lang infoR ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></div>
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

      <div className="mainProd" style={{width: "100vw", height: '460vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
       <div className="firstprodcontSHOP">
          <div style={drag ?{display: "flex",  backgroundImage: "url(left-arrow.png)"}:{display: "none", backgroundImage: "url(left-arrow.png)"}} className="arrowleftSHOP"  onClick={() => {setDrag(false); gsap.fromTo(".firstprod", {x: sliderX, ease: "power3.out"}, {x: 0}), setSliderX("0")}}></div>
          <div style={drag ?{display: "none", backgroundImage: "url(left-arrow.png)"}:{display: "flex", backgroundImage: "url(left-arrow.png)"}} className="arrowrightSHOP" onClick={() => {setDrag(true); gsap.fromTo(".firstprod", {x: sliderX, ease: "power3.out"}, {x: "-100vw"}), setSliderX("-100vw")}}></div>
        <div className="firstprod">
          <div className="firstprodttlSHOP" style={{backgroundImage: `url(modelYbg.png)`}}>
        <div className="btnprodcontSHOP" >
          <div className="titlebtnSHOP">{rus ? "Багажник на крышу модели Y" : "Model Y roof rack"}</div>
          <div className="btn order1 btnprodSHOP" onClick={() => navigate(`/store/item/${shopItems[1]._id}`, {state: {rus: rus, user: user}})}>{rus ? "Купить сейчас" : "Shop now"}</div>
        </div>
      </div>
      <div className="firstprodttlSHOP2"  style={{backgroundImage: `url(modelYAir.avif)`}}>
        <div className="btnprodcontSHOP">
          <div className="titlebtnSHOP">{rus ? "Надувной матрас модели Y" : "Model Y Air mattress"}</div>
          <div className="btn order1 btnprodSHOP"  onClick={() => navigate(`/store/item/${shopItems[4]._id}`, {state: {rus: rus, user: user}})}>{rus ? "Купить сейчас" : "Shop now"}</div>
        </div>
      </div>
        </div>
        </div> 

          <div className="secondprodSliderSHOP">
            <div className="secondprodTTLSHOP">{rus ? "Бестселлеры" : "Best Sellers"}</div>
            <div className="slider2blockSHOP">
              <div className="actSlider2SHOP">
                {shopItems && shopItems.map((el, i) =>{
                  return(
                    <Link to={`/store/item/${el._id}`} state={{rus: rus, user: user}} key={i} style={{color: 'black'}}>
                    <div className="itemSlider2" key={i}>
                      <div className="ItemPic" style={{backgroundImage: `url(${el.picture})`}}></div>
                      <div className="itemtitle">{rus? el.nameRu : el.name}</div>
                    </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        <div className="shopadvSHOP" style={{backgroundImage: "url(https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/tesla-shop-marketing-imagery/hero-carousel/DSCF8694-1_2800x1300.png)"}}>
          <div className="shopadvttlSHOP">{rus ? "Аксессуары для модели Y" : "Model Y Accessories"}</div>
          <div onClick={() => navigate(`/store/item/${shopItems[7]._id}`, {state: {rus: rus, user: user}})} className="shopadvbtnSHOP">{rus ? "Купить сейчас" : "Shop Now"}</div>
        </div>
        <div className="shopadvSHOP" style={{marginTop: '0', backgroundImage: "url(https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaapp/homepage/M3H_desktop-2800x1300.jpg)"}}>
          <div className="shopadvttlSHOP" style={{color: 'black'}}>{rus ? "Аксессуары для модели 3" : "Model 3 Accessories"}</div>
          <div  onClick={() => navigate(`/store/item/${shopItems[15]._id}`, {state: {rus: rus, user: user}})} className="shopadvbtnSHOP">{rus ? "Купить сейчас" : "Shop Now"}</div>
        </div>
        <div className="shopadvSHOP" style={{marginTop: '0', backgroundImage: "url(https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MS_web.jpg)"}}>
          <div className="shopadvttlSHOP">{rus ? "Аксессуары для модели S" : "Model S Accessories"}</div>
          <div  onClick={() => navigate(`/store/item/${shopItems[11]._id}`, {state: {rus: rus, user: user}})} className="shopadvbtnSHOP">{rus ? "Купить сейчас" : "Shop Now"}</div>
        </div>






 <div  style={load ? {display: 'flex'}: {display: "none"}} className="loadS">
 <div className="loader">

 </div>
 </div>

</div>
</>
)




}

export default Store
