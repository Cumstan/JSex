import { useState, useEffect } from 'react'
import './css/App.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './css/header.css'
import './css/page404.css'
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";
import { useLocation } from "react-router-dom";
import { Draggable } from "gsap/dist/Draggable";
import { InertiaPlugin } from "gsap/dist/InertiaPlugin";
import { MorphSVGPlugin } from 'gsap/all';
import { Physics2DPlugin } from 'gsap/all';
import Header from './header.jsx'



function ErrorPage() {
  gsap.registerPlugin(useGSAP,Draggable,InertiaPlugin, MorphSVGPlugin, Physics2DPlugin);
  const [load, setLoad] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [rus, setRus] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const[arr, setArr] = useState(true);
  const[colors, setColors] = useState(["white"]);
  const location = useLocation();

  const handleClick = (event) => {
    
    const dotCount = gsap.utils.random(3, 20, 1);

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      const cont = document.querySelectorAll(".contERROR")
      cont[0].appendChild(dot);

      gsap.set(dot, {
        backgroundColor: `black`,
        top: event.clientY,
        left: event.clientX,
        scale: 0
      });

      gsap
        .timeline({
          onComplete: () => dot.remove()
        })
        .to(dot, {
          scale: gsap.utils.random(0.3, 1),
          duration: 0.3,
          ease: "power3.out"
        })
        .to(
          dot,
          {
            duration: 2,
            physics2D: {
              velocity: gsap.utils.random(100, 1500),
              angle: gsap.utils.random(0, 360),
              gravity: 1400
            },
            autoAlpha: 1,
            ease: "none"
          },
          "<"
        );
    }
  };

  useEffect(() => {
    window.addEventListener('pointerdown', handleClick);
    setTimeout(() => {
  setLoad(false)
}, 600);

  setRus(location.state.rus)
    if (location.state?.user) {
      setUser(location.state.user);
    }


gsap.config({ trialWarn: false });

gsap.set(".needle", {
  transformOrigin: "99% 50%"
});

Draggable.create(".ball", {
  bounds: ".demo",
  type: "x,y",
  inertia: true,
  onDragEnd: function () {
    gsap
      .timeline({defaults:{
        duration: this.tween.duration() / 2,
                cursor: 'pointer',
        ease: "power1",
        yoyoEase: "sine.inOut",
        repeat: 1,
      }})
      .fromTo(".needle-x", {
        rotate: 0
      }, {
        rotate: gsap.utils.clamp(
          0,
          180,
          Math.abs(InertiaPlugin.getVelocity(this.target, "x")) / 20
        )
      })
      .fromTo(".needle-y", {
        rotate: 0
      }, {
        rotate: gsap.utils.clamp(
          0,
          180,
          Math.abs(InertiaPlugin.getVelocity(this.target, "y")) / 20
        )
      }, 0);
  }
});

  }, [])







return (
<div style={{overflow: 'hidden'}}>
  <header className={`header  ${scrollY > 50 || menuOpen == true ? 'scrolled' : ''}`}> 
        <div className="headerCont">
          <div className={`logoH scrolledlg`} onClick={() => {if(rus == true){navigate("/ru", {state:{rus: rus, user: user}})} else{navigate("/", {state:{rus: rus, user: user}})}}}></div>
          <div className="buttonsH">
            <Link className={`linkH scrolledL`}  onClick={() => setMenuOpen(!menuOpen)}>{rus ? "Транспорт" : "Vehicles"}</Link>
            <Link className={`linkH scrolledL`}>{rus ? "Энергия" : "Energy"}</Link>
            <Link to={ "/charging"}state={{rus: rus, user: user}}  className={`linkH scrolledL`}>{rus ? "Зарядки" : "Charging"}</Link>
            <Link  to={"/discover"} state={{rus: rus, user: user}}  className={`linkH scrolledL`}>{rus ? "Исследуйте" : "Discover"}</Link>
            <Link to={ "/store"} state={{rus: rus, user: user}} className={`linkH scrolledL`}>{rus ? "Магазин" : "Shop"}</Link>
          </div>
          <div className="infosH">
            <div style={{width: '100px'}}></div>
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
<div style={{width: "100vw", height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}} className='contERROR'>
          <main>
  <div className="demo">
    <div className="ball" onPointerDown={() => setArr(false)}>
      <br />
      ERROR 404 
      <br />
      {rus ? "СТРАНИЦА НЕ НАЙДЕНА" : "PAGE NOT FOUND"}
    </div>
    <div className="meters">
      <svg viewBox="0 0 100 50" fill="none">
        <circle cx="50" cy="50" r="25" stroke="#fff" strokeDasharray="1 7" strokeWidth="3" strokeDashoffset="-1.2" />
        <path className="needle needle-x" stroke="#fff" strokeWidth="1.2" d="M33 47 L50 47" />
        <circle cx="50" cy="47" r="1.5" fill="#fff" />
        <text fill="#fff" fontSize="5" x="50" y="18" textAnchor="middle">{rus? "сила по X" : "X Velocity"}</text>
      </svg>
      <svg viewBox="0 0 100 50" fill="none">
        <circle cx="50" cy="50" r="25" stroke="#fff" strokeDasharray="1 7" strokeWidth="3" strokeDashoffset="-1.2" />
        <path className="needle needle-y" stroke="#fff" strokeWidth="1.2" d="M33 47 L50 47" />
        <circle cx="50" cy="47" r="1.5" fill="#fff" />
        <text fill="#fff" fontSize="5" x="50" y="18" textAnchor="middle">{rus? "Сила по Y" : "Y Velocity"}</text>
      </svg>
    </div>
    <div className="contERRORinfo">
      <div className="backERROR" onClick={() => {navigate(-1, {state: {rus: rus, user: user}})}}>{rus? "НАЗАД?" : "GO BACK?"}</div>
      <div className="arrowdownERROR" style={arr? {display: 'flex'} : {display: 'none'}}></div>
    </div>
  </div>
</main>
</div>
 <div style={load ? {display: 'flex', position: 'absolute', top: '0'}: {display: "none"}} className="loadS" >
 <div className="loader">

 </div>
 </div>
</div>
)




}

export default ErrorPage
