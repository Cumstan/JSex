import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './css/header.css'

function Header() {

  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [rus, setRus] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
  
    setTimeout(() => {
      if (window.location.pathname.split('/').includes('ru')) {
        setRus(true);
      } else {
        setRus(false);
      }
    }, 100);

  
  })


  let navLang = () => {
    if (window.location.pathname == "/") {
      window.scrollTo({ top: 0});
      navigate('/ru');  
      }
    else {
       window.scrollTo({ top: 0});
      navigate('/');
    }
  }


  return (
    <>
      <div className={`header ${scrollY > 50 || menuOpen == true ? 'scrolled' : ''}`}> 
        <div className="headerCont">
          <div className={`logoH ${scrollY > 50  || menuOpen == true ? 'scrolledlg' : ''}`} onClick={() => {window.location.href = "https://www.tesla.com/cybertruck/design?financeModalTab=finance_options&financeProduct=finplat.AUTO_LEASE%3AOPERATIONAL_LEASE%3ACT_PRIVATE#overview";}}></div>
          <div className="buttonsH">
            <Link className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}  onClick={() => setMenuOpen(!menuOpen)}>{rus ? "Транспорт" : "Vehicles"}</Link>
            <Link className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}  onClick={() => setMenuOpen(!menuOpen)}>{rus ? "Энергия" : "Energy"}</Link>
            <Link className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}  onClick={() => setMenuOpen(!menuOpen)}>{rus ? "Зарядки" : "Charging"}</Link>
            <Link className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}  onClick={() => setMenuOpen(!menuOpen)}>{rus ? "Исследуйте" : "Discover"}</Link>
            <Link className={`linkH ${scrollY > 50  || menuOpen == true ? 'scrolledL' : ''}`}  onClick={() => setMenuOpen(!menuOpen)}>{rus ? "Магазин" : "Shop"}</Link>
          </div>
          <div className="infosH">
            <Link className={`faq infoR ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></Link>
            <Link to="/logIn" state={rus} className={`acc infoR ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></Link>
            <div onClick={() => navLang()} className={`lang infoR ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></div>
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
    </>
  )
}

export default Header
