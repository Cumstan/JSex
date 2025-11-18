import { useState, useEffect } from 'react'
   import {useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './css/App.css'
import "./css/cartstyle.css"

import { Link } from 'react-router-dom';
import './css/header.css'
function Cart() {
const [load, setLoad] = useState(true);
 const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [rus, setRus] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [terms, setTerms] = useState(false)
const location = useLocation();


const prepareCartItems = (items) => {
  const itemMap = {};

  items.forEach((item) => {

    const key = item._id || item.name;

    if (itemMap[key]) {
      itemMap[key].quantity += 1;
    } else {
      itemMap[key] = { ...item, quantity: 1 };
    }
  });

  return Object.values(itemMap);
};


useEffect(() => {
  document.title = `Account`;

  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handleScroll);

  if (location.state?.rus) setRus(location.state.rus);

  if (location.state?.user) {
    setUser(location.state.user);

    const prepared = prepareCartItems(location.state.user.items || []);
    setCartItems(prepared);
  }

  setTimeout(() => setLoad(false), 600);

  return () => window.removeEventListener('scroll', handleScroll);
}, []);


const updateUserCartInDB = async (updatedItems) => {
  const userId = user?._id || user?.id;
  console.log(user)
  try {
    const response = await fetch(`https://serverex-xmpr.onrender.com/api/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: updatedItems }),
    });

    if (!response.ok) throw new Error("Ошибка обновления корзины");

    const updatedUser = await response.json();
    setUser(updatedUser);
  } catch (error) {
    console.error("Ошибка при обновлении корзины в БД:", error);
  }
};

const expandItemsForDB = (items) => {
  const expanded = [];
  items.forEach((item) => {
    for (let i = 0; i < item.quantity; i++) {
      expanded.push({
        _id: item._id,
        name: item.name,
        nameRu: item.nameRu,
        price: item.price,
        picture: item.picture,
      });
    }
  });
  return expanded;
};

const increaseQuantity = async (id) => {
  setCartItems((prev) => {
    const updated = prev.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateUserCartInDB(expandItemsForDB(updated));
    return updated;
  });
};

const decreaseQuantity = async (id) => {
  setCartItems((prev) => {
    const updated = prev.map((item) =>
      item._id === id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );
    updateUserCartInDB(expandItemsForDB(updated));
    return updated;
  });
};


const removeItem = async (id) => {
  setCartItems((prev) => {
    const updated = prev.filter((item) => item._id !== id);
    updateUserCartInDB(expandItemsForDB(updated));
    return updated;
  });
};

const buyAll = async () => {
  const userId = user?._id || user?.id;
  if (cartItems.length === 0 || terms == false) return;

  try {
    await fetch(`https://serverex-xmpr.onrender.com/api/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [] }),
    });
    setCartItems([]);
    alert(rus ? "Покупка успешно оформлена!" : "Purchase completed!");
  } catch (err) {
    console.error("Ошибка при покупке:", err);
  }
};


return (
<>


<header className={`header ${scrollY >= 0 || menuOpen == true ? 'scrolled' : ''}`}> 
        <div className="headerCont">
          <div className={`logoH ${scrollY >= 0  || menuOpen == true ? 'scrolledlg' : ''}`} onClick={() => {if(rus == true){navigate("/ru", {state:{rus: rus, user: user}})} else{navigate("/", {state:{rus: rus, user: user}})}}}></div>
          <div className="buttonsH">
            <Link className={`linkH ${scrollY >= 0  || menuOpen == true ? 'scrolledL' : ''}`}  onClick={() => setMenuOpen(!menuOpen)}>{rus ? "Транспорт" : "Vehicles"}</Link>
            <Link to={"/Energy"} state={{rus: rus, user: user}} className={`linkH ${scrollY >= 0  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Энергия" : "Energy"}</Link>
            <Link to={"/charging"} state={{rus: rus, user: user}}  className={`linkH ${scrollY >= 0  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Зарядки" : "Charging"}</Link>
            <Link to={ "/discover"} state={{rus: rus, user: user}} className={`linkH ${scrollY >= 0  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Исследуйте" : "Discover"}</Link>
            <Link  to={"/store"} state={{rus: rus, user: user}} className={`linkH ${scrollY >= 0  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Магазин" : "Shop"}</Link>
          </div>
          <div className="infosH" >
            <Link to={"/FaQ"} state={{rus: rus, user: user}} className={`faq infoR ${scrollY >=0 ? 'scrolledI' : 'NscrolledI'}`}></Link>
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


<div style={{ top: "0", backgroundColor: "white", left: 0, width: "100vw",minHeight: '100vh', height: 'auto', display: 'flex', justifyContent:"center"}}>
          
          <div className="cartblockACC">
            <div className="cartttlACC">{rus ? "Ваша корзина" : "Your cart"}</div>
            <div className="itemspartcartACC">
           <div className="cartsubttl">{(cartItems && cartItems.length > 0) ? (rus ? "Ваши предметы" : "Your items") : (rus ? "Корзина пуста" : "Cart is empty")}</div>
              {cartItems && cartItems.length > 0 ? 
              (<div className='cartfullACC'>
                  {cartItems.map((item, index) => (
                    <div key={index} className="cartitemACC">
                      <div
                      onClick={() => navigate(`/store/item/${item._id}`, {state: {rus: rus, user: user}})}
                        className="cartitempicACC"
                        style={{ backgroundImage: `url(${item.picture})` }}
                      ></div>
                      <div className="cartiteminfoACC">
                        <div className="itemnameblockACC">
                          <div className="cartitemnameACC">{rus ? item.nameRu : item.name}</div>
                        <div className="cartitempriceACC">
                          {rus ? "Цена: " : "Price: "}{item.price}
                        </div>
                        </div>
                        <div className="quntblockACC">
                          {rus ? "Количество: " : "Quantity: "}
                        <div className="plusquant" onClick={() => decreaseQuantity(item._id)}>-</div>
                        <div className="cartitemqtyACC">
                          {item.quantity}
                        </div>
                        <div className="plusquant"onClick={() => increaseQuantity(item._id)}>+</div>
                        </div>
                        <div className="deletebtn" onClick={() => removeItem(item._id)}></div>
                      </div>
                    </div>
                  ))}
              </div>)
              
              : 
              (<div className="additemscartACC">
                <Link className="plusiconACC" to={"/store"} state={{rus: rus, user: user}}></Link>
              </div>)}
            </div>
          </div>
          


          <div className="totalblockCRT">
            <div className="cartlineCRT"></div>
            <div className="carttotalCRT">{rus ? "Сумма заказа: " : "Cart total: "}${cartItems.reduce((total, item) =>total + item.quantity * parseFloat(item.price.replace(/[^0-9.-]+/g, "")),0).toFixed(2)}</div>
              <div className="termsnconCRT">
                <input type="checkbox" className='checkB' name="" id="" onClick={() => setTerms(!terms)}/>
                {rus ? "Я согласен с" : "I agree to"} <Link to={"/FaQ"} state={{rus: rus, user: user}} style={{marginLeft: '10px', color: 'black'}}> {rus ? "Условиями и положениями" : "Terms and conditions"}</Link>
              </div>
              <div className="checkoutbtn" onClick={buyAll}>{rus ? "Купить" : "Checkout"}</div>
          </div>


 <div style={load ? {display: 'flex'}: {display: "none"}} className="loadS">
 <div className="loader">

 </div>
 </div>


</div>
</>
)




} 

export default Cart
