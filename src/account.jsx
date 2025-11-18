import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './css/App.css'
import "./css/accstyle.css"
import './css/header.css'
import Header from './header'
import { Link } from 'react-router-dom';

function Account() {

  const [load, setLoad] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [rus, setRus] = useState(false);
  const [user, setUser] = useState(null);

  const [updName, setUpdName] = useState("");
  const [updEmail, setUpdEmail] = useState("");
  const [updPassword, setUpdPassword] = useState("");
  const [MobileMenu, setMobileMenu] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = `Account`;

    window.addEventListener("scroll", () => setScrollY(window.scrollY));

    if (location.state?.rus) setRus(location.state.rus);

    if (location.state?.user) {
      const u = location.state.user;
      setUser(u);
      setUpdName(u.name);
      setUpdEmail(u.email);
    }

    setTimeout(() => setLoad(false), 600);
  }, []);

  
  const changeUser = async () => {
  if(updPassword == '' || updEmail.includes("@") == false || updPassword.length < 6 || updName == ""){
    if(rus == true){
      alert("Данные не подходят")
    }
    else{
      alert("Data is incorrect")
    }
    return;
  }
  const userId = user?._id || user?.id;
  if (!userId) {
    alert("Ошибка: нет ID пользователя");
    return;
  }

  const body = {
    _id: userId,
    name: updName,
    email: updEmail,
    passwordHash: updPassword || user.passwordHash
  };

  try {
    const res = await fetch(`https://serverex-xmpr.onrender.com/api/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error(data);
      alert(rus ? "Ошибка обновления!" : "Update error!");
      return;
    }

    alert(rus ? "Данные успешно изменены!" : "Data successfully changed!");

    setUser(data);
    console.log(data)
  } catch (err) {
    console.error("Ошибка при обновлении:", err);
  }
};

  return (
    <>
      <header className={`header scrolled`}>
        <div className="headerCont">
          <div className="logoH scrolledlg"
               onClick={() => {
                 navigate(rus ? "/ru" : "/", { state: { rus, user } });
               }}
          ></div>

          <div className="buttonsH">
            <Link className="linkH scrolledL" onClick={() => setMenuOpen(!menuOpen)}>{rus ? "Транспорт" : "Vehicles"}</Link>
            <Link to={"/Energy"} state={{ rus, user }} className="linkH scrolledL">{rus ? "Энергия" : "Energy"}</Link>
            <Link to={"/charging"} state={{ rus, user }} className="linkH scrolledL">{rus ? "Зарядки" : "Charging"}</Link>
            <Link to={"/discover"} state={{ rus, user }} className="linkH scrolledL">{rus ? "Исследуйте" : "Discover"}</Link>
            <Link to={"/store"} state={{ rus, user }} className="linkH scrolledL">{rus ? "Магазин" : "Shop"}</Link>
          </div>

          <div className="infosH">
            <Link to={user ? "/cart":"/logIn"} state={{rus: rus, user: user}} className={`cartiC  ${scrollY >= 0 ? 'scrolledI' : 'NscrolledI'}`}></Link>
            <Link to={"/FaQ"} state={{ rus, user }} className="faq infoR scrolledI"></Link>
            <div onClick={() => setRus(!rus)} className="lang infoR scrolledI"></div>
          </div>
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
        <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
           zIndex: 1000,
        width: "100vw",
        height: "100vh",
        backgroundSize: '100% 100%',
        backgroundImage: `url("/bgacc.jpg")`,
        filter: 'brightness(0.8) blur(10px)'
        }}></div>
      <div style={{
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        width: "100vw",
        minHeight: '100vh',
        backgroundSize: '100% 100%',
        paddingTop: '120px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "25px",
        color: 'white'
      }}>
       <div className="accttl">
          <img className="accpic" style={{filter: 'invert(1)'}} src="profile.png" alt="" />
          <div className="accttlsub" style={{color: 'white'}}>{rus ? "Ваш аккаунт" : "Your Account"}</div>
          <Link className="leaveBtn"  style={{filter: 'invert(1)'}} to={'/login'} state={{rus: rus, user: null}}></Link>
       </div>

        <div className="accContainer">

          <div className="accRow">
            <label>ID</label>
            <input className='accinp' type="text" value={user?.id || user?._id} readOnly />
          </div>


          <div className="accRow">
            <label>{rus ? "Имя" : "Name"}</label>
            <input
            className='accinp'
              type="text"
              value={updName}
              placeholder={user?.name}
              onChange={(e) => setUpdName(e.target.value)}
            />
          </div>

          <div className="accRow">
            <label>Email</label>
            <input
            className='accinp'
              type="email"
              value={updEmail}
              placeholder={user?.email}
              onChange={(e) => setUpdEmail(e.target.value)}
            />
          </div>

          <div className="accRow">
            <label>{rus ? "Пароль" : "Password"}</label>
            <input
            className='accinp'
              type="password"
              placeholder={user?.passwordHash}
              onChange={(e) => setUpdPassword(e.target.value)}
            />
          </div>

          <button className="accBtn" onClick={changeUser}>
            {rus ? "Подтвердить" : "Confirm"}
          </button>

        </div>


        {load && (
          <div className="loadS">
            <div className="loader"></div>
          </div>
        )}

      </div>
    </>
  );
}

export default Account;
