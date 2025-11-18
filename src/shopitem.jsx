import { useState, useEffect } from 'react'
   import {useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './css/App.css'
import "./css/itemstyle.css"

import { Link } from 'react-router-dom';
import './css/header.css'
function ShopItem() {
const [load, setLoad] = useState(true);
 const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [item, setItem] = useState({});
  const [rus, setRus] = useState(false);
  const [user, setUser] = useState(null);
  const [recitems, setRecitems] = useState([]);
  const randint = Math.floor(Math.random() * 10);
const location = useLocation();
const navigate = useNavigate();

const cartSet = async () => {
  if (!user) {
    navigate("/logIn", { state: { rus: rus } });
    return;
  }
  else{
    console.log(user);
  try {
    // 1. Получаем реального пользователя из БД по email
    const resGet = await fetch(`http://localhost:5000/api/users?email=${user.email}`);
    if (!resGet.ok) throw new Error("User not found");
    const foundUser = await resGet.json();

    // 2. Добавляем товар
    const userWithItem = { 
      ...foundUser, 
      items: [...(foundUser.items || []), item] 
    };

    // 3. Делаем PUT по настоящему _id
    const resPut = await fetch(`http://localhost:5000/api/users/${foundUser._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userWithItem),
    });

    if (!resPut.ok) throw new Error("Failed to update user");
    const updated = await resPut.json();
    setUser(updated); 
    console.log("User updated:", updated);
  } catch (err) {
    console.error("Error in cartSet:", err);
  }
}
};





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

useEffect(() => {
  setLoad(true)
   const id = location.pathname.split("/").pop();
        fetch("http://localhost:5000/api/items")
    .then(res => res.json())
    .then(data => {
      const found = data.find(i => i._id.toString() === id);
      setItem(found);
      setRecitems(data.slice(randint, randint + 3));
       setTimeout(() => setLoad(false), 200)
    })
    .catch(err => console.error(err));
  }, [location.pathname])

return (
<>


<header className={`header ${scrollY >= 0 || menuOpen == true ? 'scrolled' : ''}`}> 
        <div className="headerCont">
          <div className={`logoH ${scrollY >= 0  || menuOpen == true ? 'scrolledlg' : ''}`}  onClick={() => {if(rus == true){navigate("/ru", {state:{rus: rus, user: user}})} else{navigate("/", {state:{rus: rus, user: user}})}}}></div>
          <div className="buttonsH">
            <Link className={`linkH ${scrollY >= 0  || menuOpen == true ? 'scrolledL' : ''}`}  onClick={() => setMenuOpen(!menuOpen)}>{rus ? "Транспорт" : "Vehicles"}</Link>
            <Link to={"/Energy"} state={{rus: rus, user: user}} className={`linkH ${scrollY >= 0  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Энергия" : "Energy"}</Link>
            <Link to={"/charging"} state={{rus: rus, user: user}} className={`linkH ${scrollY >= 0  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Зарядки" : "Charging"}</Link>
            <Link  to={"/discover"} state={{rus: rus, user: user}}  className={`linkH ${scrollY >= 0  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Исследуйте" : "Discover"}</Link>
            <Link  to={"/store"} state={{rus: rus, user: user}} className={`linkH ${scrollY >= 0  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Магазин" : "Shop"}</Link>
          </div>
          <div className="infosH" >
             <Link to={user ? "/cart":"/logIn"} state={{rus: rus, user: user}} className={`cartiC  ${scrollY >=0 ? 'scrolledI' : 'NscrolledI'}`}></Link>
            <Link to="/FaQ"  state={{rus: rus, user: user}} className={`faq infoR ${scrollY >= 0 ? 'scrolledI' : 'NscrolledI'}`}></Link>
             <Link to={user ? "/account":"/logIn"} state={{rus: rus, user: user}} className={`acc infoR ${scrollY >= 0 ? 'scrolledI' : 'NscrolledI'}`}></Link>
            <div onClick={() => {setRus(!rus); setLoad(true); setTimeout(() =>{setLoad(false)}, 400)}} className={`lang infoR ${scrollY >= 0 ? 'scrolledI' : 'NscrolledI'}`}></div>
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


<div style={{ top: "0", backgroundColor: "white", left: 0, width: "100vw", height: '130vh', display: 'flex', justifyContent:"center", gap: '20px', paddingTop: '100px'}}>
          
        <div className="rightpartITM">
          <div className="itempicITM" style={{backgroundImage: `url(${item.picture})`}}></div>
          <div className="itemtitleITM">{rus ? "Рекомендуемые продукты: " : "Recommended Products: "}</div>
          <div className="recitemsITM">
            {recitems && recitems.map((el, i) => (
              <Link key={i} className="recitemITM" to={`/store/item/${el._id}`} state={{rus: rus, user: user}} >
                <div className="recitempicITM" style={{backgroundImage: `url(${el.picture})`}}></div>
                <div className="recitemtitleITM">{rus ? el.nameRu : el.name}</div>
                
                </Link>
            ))}
          </div>
        </div>

        <div className="leftpartITM">
          <div className="itemtitleITM">{rus ? item.nameRu : item.name}</div>
          <div className="itempriceITM">{rus ? "Цена: " : "Price: "}{item.price}</div>
          <button className="addtocartITM" onClick={() => cartSet()}>{rus ? "Добавить в корзину" : "Add to cart"}</button>
          <div className="startingITM">{!rus ? `Starting at $40/mo.`: `Начиная с $40 в месяц`}</div>
          <div className="descriptionttlITM">{rus ? "Описание" : "Description"}</div>
          <div className="itemdescITM">{rus ? item.descriptionRu : item.description}</div>
          <div className="descriptionttlITM">{rus ? "Свойства" : "Features"}</div>
          <div className="itemfeaturesITM">
            <ul className='itemfeatListITM'>
              <li className='itemfeatITM'>{rus ? "До 44 миль запаса хода в час при выходной мощности 11,5 кВт / 48 А" : "Up to 44 mi of range added per hour at 11.5 kW / 48 amp output"}</li>
              <li className='itemfeatITM'>{rus ? "Интегрированный адаптер J1772 для удобной зарядки любого электромобиля" : "Integrated J1772 adapter to conveniently charge any electric vehicle"}</li>
              <li className='itemfeatITM'>{rus ? "Автоматически распознающая ручка для открытия зарядного порта Tesla" : "Auto-sensing handle to open a Tesla charge port"}</li>
              <li className='itemfeatITM'>{rus ? "Отслеживайте и управляйте графиком зарядки и использованием через приложение Tesla" : "Monitor and manage your charging schedule and usage from the Tesla app"}</li>
              <li className='itemfeatITM'>{rus ? "Подключение по Wi-Fi для беспроводных обновлений, удаленной диагностики и управления доступом" : "Wi-Fi connectivity for over-the-air updates, remote diagnostics and access controls"}</li>
              <li className='itemfeatITM'>{rus ? "Обеспечьте электроснабжение вашего дома во время отключения электроэнергии в течение трех дней с помощью Tesla" : "Power your home during an outage for up to three days using Tesla"}</li>
              <li className='itemfeatITM'>{rus ? "Четырехлетняя гарантия для бытового использования" : "Four-year warranty for residential use"}</li>
            </ul>
          </div>
          <div className="descriptionttlITM">{rus ? "Руководство по установке и поддержка" : "Installation Guidance and Support "}</div>
          <div className="itemdescITM">{rus? "Универсальный настенный разъём должен устанавливаться квалифицированным электриком. Посетите страницу «Найти сертифицированного установщика», чтобы запросить расценки у одного из более чем 1000 сертифицированных установщиков Tesla." : "Universal Wall Connector must be installed by a qualified electrician. Visit our Find a Certified Installer page to request a quote from one of the 1,000+ Tesla Certified Installers"}</div>

        </div>





 <div style={load ? {display: 'flex'}: {display: "none"}} className="loadS">
 <div className="loader">

 </div>
 </div>


</div>
</>
)




} 

export default ShopItem
