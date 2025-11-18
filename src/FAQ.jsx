import { useState, useEffect } from 'react'
   import {useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './css/App.css'
import "./css/faqstyle.css"

import { Link } from 'react-router-dom';
import './css/header.css'
function FAQ() {
const [load, setLoad] = useState(true);
 const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [rus, setRus] = useState(false);
  const [user, setUser] = useState(null);
  const [opened, setOpened] = useState(0)
  const navigate = useNavigate();
const location = useLocation();

useEffect(() => {
document.title = `fack`;
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


<header className={`header ${scrollY >= 0 || menuOpen == true ? 'scrolled' : ''}`}> 
        <div className="headerCont">
          <div className={`logoH ${scrollY >= 0  || menuOpen == true ? 'scrolledlg' : ''}`} onClick={() => {if(rus == true){navigate("/ru", {state:{rus: rus, user: user}})} else{navigate("/", {state:{rus: rus, user: user}})}}}></div>
          <div className="buttonsH">
            <Link className={`linkH ${scrollY >= 0  || menuOpen == true ? 'scrolledL' : ''}`}  onClick={() => setMenuOpen(!menuOpen)}>{rus ? "Транспорт" : "Vehicles"}</Link>
            <Link to={"/Energy"} state={{rus: rus, user: user}} className={`linkH ${scrollY >= 0  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Энергия" : "Energy"}</Link>
            <Link to={"/charging"} state={{rus: rus, user: user}} className={`linkH ${scrollY >= 0  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Зарядки" : "Charging"}</Link>
            <Link  to={"/discover"} state={{rus: rus, user: user}}  className={`linkH ${scrollY >= 0  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Исследуйте" : "Discover"}</Link>
            <Link  to={"/store"} state={{rus: rus, user: user}} className={`linkH ${scrollY >= 0  || menuOpen == true ? 'scrolledL' : ''}`}>{rus ? "Магазин" : "Shop"}</Link>
          </div>
          <div className="infosH" >
            <Link to={user ? "/cart":"/logIn"} state={{rus: rus, user: user}} className={`cartiC  ${scrollY >= 0 ? 'scrolledI' : 'NscrolledI'}`}></Link>
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


<div style={{ top: "0", backgroundColor: "white", left: 0, width: "100vw", height: '250vh', display: 'flex', justifyContent:"center", gap: '20px', paddingTop: '100px'}}>
          <div className="inArtFAQ">
            <div className="ttlinArtFAQ">{rus ? "В этой статье" : "In This Article"}</div>
            <div className="linksFAQ">
              <div className="linkFAQ" onClick={() => {window.scrollTo({top: 150, behavior: "smooth"});  setOpened(0)}}>{rus ? "Заказ" : "Order"}</div>
              <div className="linkFAQ" onClick={() => {window.scrollTo({top: 500, behavior: "smooth"});  setOpened(0)}}>{rus ? "Стимулы" : "Incentives"}</div>
              <div className="linkFAQ" onClick={() => {window.scrollTo({top: 670, behavior: "smooth"});  setOpened(0)}}>{rus ? "Аккаунт Теслы" : "Tesla Account"}</div>
              <div className="linkFAQ" onClick={() => {window.scrollTo({top: 810, behavior: "smooth"});  setOpened(0)}}>{rus ? "Подготовка к доставке" : "Preparing for Delivery"}</div>
              <div className="linkFAQ" onClick={() => {window.scrollTo({top: 1060, behavior: "smooth"});  setOpened(0)}}>{rus ? "Финансирование" : "Financing"}</div>
              <div className="linkFAQ" onClick={() => {window.scrollTo({top: 1200, behavior: "smooth"});  setOpened(0)}}>{rus ? "Страхование" : "Insurance"}</div>
              <div className="linkFAQ" onClick={() => {window.scrollTo({top: 1370, behavior: "smooth"});  setOpened(0)}}>{rus ? "Решения для зарядки" : "Charging Solutions"}</div>
            </div>
          </div>
          <div className="rightinfoFAQ">
            <div className="rightTtlFAQ">{rus? "Часто задаваемые вопросы" : "Frequently Asked Questions"}</div>
              <div className="boxinfoFAQ">
              <div className="boxTtblockFAQ">
                <div className="boxttlFAQ">{rus? "Заказ" : "Order"}</div>
                
                <div className="showallFAQ" onClick={() => {if(opened != 10){setOpened(10)} else{setOpened(0);}}}>{opened != 10 ? rus ? "Показать все"  : "Show All" : rus ? "Убрать все" : "Hide All"}</div>
              </div>
              <div className={opened == 1 || opened == 10 ? "contFAQ contFAQACT" : "contFAQ"}>
                <div className="conttlFAQbox" onClick={() =>{if(opened == 1 || opened == 10){setOpened(0)} else{setOpened(1)}}}>
                  <div className={opened == 1 || opened == 10 ? "arrowicon arrowiconACT" : "arrowicon"}></div>
                  <div className="contttlFAQ">{rus? "Как заказать автомобиль Tesla?" : "How do I order a Tesla vehicle?"}</div>
                  </div>
                  <div className="contFAQtxt" style={opened == 1 || opened == 10 ? {display: 'flex'} : {display: 'none'}}>{rus? "Посетите нашу дизайн-студию, чтобы ознакомиться с нашими новинками и оформить заказ. Стоимость покупки и предполагаемая дата доставки будут меняться в зависимости от дизайна вашего автомобиля." : "Visit our Design Studio to explore our latest options and place your order. The purchase price and estimated delivery date will change based on your vehicle design."}</div>
                
              </div>
              <div className={opened == 2 || opened == 10 ? "contFAQ contFAQACT" : "contFAQ"}>
                <div className="conttlFAQbox" onClick={() =>{if(opened == 2 || opened == 10){setOpened(0)} else{setOpened(2)}}}>
                  <div className={opened == 2 || opened == 10 ? "arrowicon arrowiconACT" : "arrowicon"}></div>
                  <div className="contttlFAQ" >{rus? "Могу ли я запросить тест-драйв?" : "Can I request a test drive?"}</div>
                  </div>
                  <div className="contFAQtxt" style={opened == 2 || opened == 10 ? {display: 'flex'} : {display: 'none'}}>{rus? "Тест-драйв скоро будет доступен. Подпишитесь, чтобы получать последние новости, информацию о мероприятиях и обновлениях Tesla." : "Test drive will be available soon."}</div>
                
              </div>
              <div className={opened == 3 || opened == 10 ? "contFAQ contFAQACT" : "contFAQ"}>
                <div className="conttlFAQbox" onClick={() =>{if(opened == 3 || opened == 10){setOpened(0)} else{setOpened(3)}}}>
                  <div className={opened == 3 || opened == 10 ? "arrowicon arrowiconACT" : "arrowicon"}></div>
                  <div className="contttlFAQ">{rus? "Я только что оформил заказ на Tesla и отправил его. Каковы мои дальнейшие действия?" : "I just designed my Tesla vehicle and submitted my order. What are the next steps?"}</div>
                  </div>
                  <div className="contFAQtxt" style={opened == 3 || opened == 10 ? {display: 'flex'} : {display: 'none'}}>{rus? "По мере приближения даты доставки мы свяжемся с вами для подтверждения регистрации, способа оплаты и других сопутствующих вопросов." : "As your delivery date approaches, we'll contact you to confirm your registration, payment method and other related matters."}</div>
                
              </div>
              <div className={opened == 4 || opened == 10 ? "contFAQ contFAQACT" : "contFAQ"}>
                <div className="conttlFAQbox" onClick={() =>{if(opened == 4 || opened == 10){setOpened(0)} else{setOpened(4)}}}>
                  <div className={opened == 4 || opened == 10 ? "arrowicon arrowiconACT" : "arrowicon"}></div>
                  <div className="contttlFAQ">{rus? "Могу ли я редактировать свой дизайн после оформления заказа?" : "Can I edit my design after placing my order?"}</div>
                  </div>
                  <div className="contFAQtxt" style={opened == 4 || opened == 10 ? {display: 'flex'} : {display: 'none'}}>{rus? "Мы рекомендуем вам размещать заказ только после того, как вы окончательно определитесь с дизайном вашего транспортного средства." : "We recommend you place your order only after you have finalized your vehicle design."}</div>
                
              </div>
              <div className={opened == 5 || opened == 10 ? "contFAQ contFAQACT" : "contFAQ"}>
                <div className="conttlFAQbox" onClick={() =>{if(opened == 5 || opened == 10){setOpened(0)} else{setOpened(5)}}}>
                  <div className={opened == 5 || opened == 10 ? "arrowicon arrowiconACT" : "arrowicon"}></div>
                  <div className="contttlFAQ">{rus? "Если я сделаю заказ сегодня, когда я смогу получить доставку?" : "If I place my order today, when can I expect to take delivery?"}</div>
                  </div>
                  <div className="contFAQtxt" style={opened == 5 || opened == 10 ? {display: 'flex'} : {display: 'none'}}>{rus? "Вы можете узнать предполагаемую дату доставки в нашей дизайн-студии. Предполагаемая дата доставки зависит от дизайна вашего автомобиля и является приблизительной. Более точные сроки будут сообщены ближе к дате доставки." : "You can view your estimated delivery date in our Design Studio. The estimated delivery date depends on your vehicle design and is only an estimate. We will provide more specific timing closer to delivery."}</div>
                
              </div>
              <div className={opened == 6 || opened == 10 ? "contFAQ contFAQACT" : "contFAQ"} style={{marginBottom: '5vh'}}>
                <div className="conttlFAQbox" onClick={() =>{if(opened == 6 || opened == 10){setOpened(0)} else{setOpened(6)}}}>
                  <div className={opened == 6 || opened == 10 ? "arrowicon arrowiconACT" : "arrowicon"}></div>
                  <div className="contttlFAQ">{rus? "У меня есть вопрос по моему заказу. Как мне получить помощь?" : "I have a question regarding my order. How do I get assistance?"}</div>
                  </div>
                  <div className="contFAQtxt" style={opened == 6 || opened == 10 ? {display: 'flex'} : {display: 'none'}}>{rus? "Вы можете связаться с нами по телефону 1800810655." : "You can contact us at 1800810655."}
                  </div>
                
              </div>



              <div className="boxTtblockFAQ" style={{marginTop: '30px'}}>
                <div className="boxttlFAQ">{rus ? "Стимулы" : "Incentives"}</div>
                
                <div className="showallFAQ" onClick={() => {if(opened != 11){setOpened(11)} else{setOpened(21);}}}>{opened != 11 ? rus ? "Показать все"  : "Show All" : rus ? "Убрать все" : "Hide All"}</div>
              </div>

              <div className={opened == 11 || opened == 20 ? "contFAQ contFAQACT" : "contFAQ"} style={{marginBottom: '5vh'}}>
                <div className="conttlFAQbox" onClick={() =>{if(opened == 11 || opened == 20){setOpened(0)} else{setOpened(11)}}}>
                  <div className={opened == 11 || opened == 20 ? "arrowicon arrowiconACT" : "arrowicon"}></div>
                  <div className="contttlFAQ">{rus ? "Какие льготы предоставляются при покупке автомобиля Tesla?" : "What incentives are available when purchasing a Tesla vehicle?"}</div>
                  </div>
                  <div className="contFAQtxt" style={opened == 11 || opened == 20 ? {display: 'block'} : {display: 'none'}}>
                  {rus ? "Для содействия внедрению низкоуглеродной мобильности и поддержки развития электромобилей в Малайзии правительство предоставляет следующие стимулы: Все автомобили Tesla классифицируются как импортные полностью собранные электромобили (CBU). Покупатели, приобретающие импортные электромобили CBU, могут рассчитывать на следующие стимулы:" : "To promote the adoption of low carbon mobility and to support the development of the electric vehicle (EV) industry in Malaysia, the government is providing the following incentives: All Tesla vehicles are classified as imported Completely Built-Up (CBU) electric vehicles. Customers who purchase imported CBU electric vehicles may be eligible for the following incentives:"}
                  <br />
                  <ul>
                    <li>{rus ? "Полное освобождение от импортных и акцизных пошлин для вновь зарегистрированных электромобилей CBU до 31 декабря 2025 года" : "Full import and excise duties exemption for newly registered CBU electric vehicles, until 31 December 2025"}</li>
                    <li>{rus ? "100% освобождение от уплаты дорожного налога для владельцев электромобилей до 31 декабря 2025 года" : "100% road tax exemption to electric vehicle owners, until 31 December 2025"}</li>
                    </ul>
      {rus ? "Владельцы электромобилей также могут претендовать на налоговые льготы по индивидуальному подоходному налогу в размере до 2500 ринггитов на расходы, связанные с установкой, арендой, приобретением, включая аренду оборудования с правом выкупа, или абонентской платой за зарядные станции для электромобилей, до налогового года 2027 года." : "Owners of electric vehicle may also claim individual income tax relief up to RM2,500 on expenses related to cost of installation, rental, purchasing including hire-purchase equipment or subscription fees for EV charging facilities, until assessment year of 2027."}

{rus ? "Компании, сдающие в аренду некоммерческие электромобили, могут претендовать на налоговый вычет по сумме аренды до 300 000 ринггитов с налогового года 2023 по 2027 год." : "Companies that rent non-commercial EV may claim tax deduction on the rental amount up to RM300,000 from the year of assessment 2023 until 2027."}
                  </div>
                
              </div>


                <div className="boxTtblockFAQ" style={{marginTop: '30px'}}>
                <div className="boxttlFAQ">{rus ? "Аккаунт Теслы" : "Tesla Account"}</div>
                
                <div className="showallFAQ" onClick={() => {if(opened != 31){setOpened(31)} else{setOpened(32);}}}>{opened != 31 ? rus ? "Показать все"  : "Show All" : rus ? "Убрать все" : "Hide All"}</div>
              </div>

              <div className={opened == 31 || opened == 30 ? "contFAQ contFAQACT" : "contFAQ"}  style={{marginBottom: '5vh'}}>
                <div className="conttlFAQbox" onClick={() =>{if(opened == 31 || opened == 30){setOpened(0)} else{setOpened(31)}}}>
                  <div className={opened == 31 || opened == 30 ? "arrowicon arrowiconACT" : "arrowicon"}></div>
                  <div className="contttlFAQ">{rus ? "Что такое аккаунт Tesla?" : "What is a Tesla Account?"}</div>
                  </div>
                  <div className="contFAQtxt" style={opened == 30 || opened == 31 ? {display: 'block'} : {display: 'none'}}>
                  {rus ? "Ваша учётная запись Tesla — это дом для всех ваших продуктов Tesla. Она включает в себя ресурсы для владельцев, предполагаемые сроки доставки, информацию о регистрации, руководства и важные обновления. Дополнительная информация будет доступна в вашей учётной записи Tesla по мере приближения даты доставки. Узнайте больше о вашей учётной записи Tesla." : "Your Tesla Account is the home for all your Tesla products. It includes owner resources, estimated delivery timing, registration information, guides and important updates. Additional details will be made available within your Tesla Account as delivery nears. Learn more about your Tesla Account."}
                  </div>
                
              </div>



          
                <div className="boxTtblockFAQ" style={{marginTop: '30px'}}>
                <div className="boxttlFAQ">{rus ? "Подготовка к доставке" : "Preparing for Delivery"}</div>
                
                <div className="showallFAQ" onClick={() => {if(opened != 48){setOpened(48)} else{setOpened(49);}}}>{opened != 48 ? rus ? "Показать все"  : "Show All" : rus ? "Убрать все" : "Hide All"}</div>
              </div>

              <div className={opened == 41 || opened == 48 ? "contFAQ contFAQACT" : "contFAQ"} >
                <div className="conttlFAQbox" onClick={() =>{if(opened == 41 || opened == 48){setOpened(0)} else{setOpened(41)}}}>
                  <div className={opened == 41 || opened == 48 ? "arrowicon arrowiconACT" : "arrowicon"}></div>
                  <div className="contttlFAQ">{rus ? "Как мне подготовиться к доставке?" : "How can I prepare for delivery?"}</div>
                  </div>
                  <div className="contFAQtxt" style={opened == 48 || opened == 41 ? {display: 'block'} : {display: 'none'}}>
                       {rus ? "По мере приближения даты доставки мы свяжемся с вами для подтверждения регистрации, способа оплаты и других сопутствующих вопросов." : " As your delivery date approaches, we'll contact you to confirm your registration, payment method and other related matters."}          
                  </div>
              </div>
              <div className={opened == 42 || opened == 48 ? "contFAQ contFAQACT" : "contFAQ"}>
                <div className="conttlFAQbox" onClick={() =>{if(opened == 42 || opened == 48){setOpened(0)} else{setOpened(42)}}}>
                  <div className={opened == 42 || opened == 48 ? "arrowicon arrowiconACT" : "arrowicon"}></div>
                  <div className="contttlFAQ">{rus ? "Как получить приложение Tesla?" : "How do I get the Tesla app?"}</div>
                  </div>
                  <div className="contFAQtxt" style={opened == 48 || opened == 42 ? {display: 'block'} : {display: 'none'}}>
                    {rus ? "Приложение Tesla будет доступно для скачивания в конце июля в App Store для iOS и Google Play для Android. Узнайте больше о функциях приложения Tesla." : "Tesla app will be available for download late July in the App Store for iOS or Google Play for Android. Learn more about Tesla app features."}          
                  </div>
              </div>
              <div className={opened == 43 || opened == 48 ? "contFAQ contFAQACT" : "contFAQ"}  style={{marginBottom: '5vh'}}>
                <div className="conttlFAQbox" onClick={() =>{if(opened == 43 || opened == 48){setOpened(0)} else{setOpened(43)}}}>
                  <div className={opened == 43 || opened == 48 ? "arrowicon arrowiconACT" : "arrowicon"}></div>
                  <div className="contttlFAQ">{rus ? "Где я получу свой автомобиль?" : "Where will I take delivery of my vehicle?"}</div>
                  </div>
                  <div className="contFAQtxt" style={opened == 48 || opened == 43 ? {display: 'block'} : {display: 'none'}}>
                      {rus ? "Точное место доставки мы сообщим вам по мере приближения даты доставки." : "We will provide the exact location as delivery nears"}.          
                  </div>
              </div>




            <div className="boxTtblockFAQ" style={{marginTop: '30px'}}>
                <div className="boxttlFAQ">{rus ? "Финансирование" : "Financing"}</div>
                
                <div className="showallFAQ" onClick={() => {if(opened != 61){setOpened(61)} else{setOpened(62);}}}>{opened != 61 ? rus ? "Показать все"  : "Show All" : rus ? "Убрать все" : "Hide All"}</div>
              </div>

              <div className={opened == 61 || opened == 60 ? "contFAQ contFAQACT" : "contFAQ"}  style={{marginBottom: '5vh'}}>
                <div className="conttlFAQbox" onClick={() =>{if(opened == 61 || opened == 60){setOpened(0)} else{setOpened(61)}}}>
                  <div className={opened == 61 || opened == 60 ? "arrowicon arrowiconACT" : "arrowicon"}></div>
                  <div className="contttlFAQ">{rus ? "Предлагает ли Tesla финансирование?" : "Does Tesla offer financing?"}</div>
                  </div>
                  <div className="contFAQtxt" style={opened == 61 || opened == 60 ? {display: 'block'} : {display: 'none'}}>
                        {rus ? "Если вы хотите узнать больше о вариантах финансирования, обратитесь к своему консультанту Tesla для получения более подробной информации." : "If you would like to know more about financing solutions, contact your Tesla Advisor for more details."}
                  </div>
                
              </div>




               <div className="boxTtblockFAQ" style={{marginTop: '30px'}}>
                <div className="boxttlFAQ">{rus ? "Страхование" : "Insurance"}</div>
                
                <div className="showallFAQ" onClick={() => {if(opened != 51){setOpened(51)} else{setOpened(52);}}}>{opened != 51 ? rus ? "Показать все"  : "Show All" : rus ? "Убрать все" : "Hide All"}</div>
              </div>

              <div className={opened == 51 || opened == 50 ? "contFAQ contFAQACT" : "contFAQ"}  style={{marginBottom: '5vh'}}>
                <div className="conttlFAQbox" onClick={() =>{if(opened == 51 || opened == 50){setOpened(0)} else{setOpened(51)}}}>
                  <div className={opened == 51 || opened == 50 ? "arrowicon arrowiconACT" : "arrowicon"}></div>
                  <div className="contttlFAQ">{rus ? "Какие страховые компании отдают предпочтение Tesla?" : "Who are Tesla’s preferred insurance providers?"}</div>
                  </div>
                  <div className="contFAQtxt" style={opened == 50 || opened == 51 ? {display: 'block'} : {display: 'none'}}>
                        {rus ? "Etiqa и Liberty Insurance — наши основные страховые компании в Малайзии. Дополнительную информацию можно найти на сайтах обеих компаний." : "Etiqa and Liberty Insurance are our preferred insurance providers in Malaysia. Find additional information on each of the company’s website."}
                  </div>
                
              </div>




               <div className="boxTtblockFAQ" style={{marginTop: '30px'}}>
                <div className="boxttlFAQ">{rus ? "Решения для зарядки" : "Charging Solutions"}</div>
                
                <div className="showallFAQ" onClick={() => {if(opened != 78){setOpened(78)} else{setOpened(79);}}}>{opened != 78 ? rus ? "Показать все"  : "Show All" : rus ? "Убрать все" : "Hide All"}</div>
              </div>

              <div className={opened == 71 || opened == 78 ? "contFAQ contFAQACT" : "contFAQ"}>
                <div className="conttlFAQbox" onClick={() =>{if(opened == 71 || opened == 78){setOpened(0)} else{setOpened(71)}}}>
                  <div className={opened == 71 || opened == 78 ? "arrowicon arrowiconACT" : "arrowicon"}></div>
                  <div className="contttlFAQ">{rus ? "Какие существуют местные варианты общественной зарядки?" : "What are the local public charging options?"}</div>
                  </div>
                  <div className="contFAQtxt" style={opened == 78 || opened == 71 ? {display: 'block'} : {display: 'none'}}>
                       {rus ? "Сеть зарядных станций Tesla Supercharger постоянно расширяется и скоро будет доступна клиентам Tesla в Малайзии. Смотрите и находите станции Supercharger в Малайзии. Платежи за Supercharger автоматически обрабатываются через выбранный способ оплаты в приложении Tesla. Если зарядка завершена, а автомобиль всё ещё находится на станции Supercharger, может взиматься плата за простой." : "The Tesla Supercharger network is continuously expanding and will be available for Tesla customers soon in Malaysia. View and find Superchargers in Malaysia. Supercharging payments are automatically processed from the payment method in the Tesla app. Idle fees might be incurred if the charge session is complete and the vehicle is still occupying a Supercharger."}
                  </div>
                
              </div>

              <div className={opened == 72 || opened == 78 ? "contFAQ contFAQACT" : "contFAQ"}  style={{marginBottom: '5vh'}}>
                <div className="conttlFAQbox" onClick={() =>{if(opened == 72 || opened == 78){setOpened(0)} else{setOpened(72)}}}>
                  <div className={opened == 72 || opened == 78 ? "arrowicon arrowiconACT" : "arrowicon"}></div>
                  <div className="contttlFAQ">{rus ? "Какие существуют варианты зарядки дома?" : "What are the home charging options?"} </div>
                  </div>
                  <div className="contFAQtxt" style={opened == 72 || opened == 78 ? {display: 'block'} : {display: 'none'}}>
                       {rus ? "Удобнее всего заряжать Tesla дома, ночью. Подключитесь к сети, когда вернётесь домой, и пусть автомобиль заряжается, пока вы спите. Мы рекомендуем установить настенный разъём дома или в любом другом помещении." : "The most convenient place to charge your Tesla vehicle is at home, overnight. Plug in when you get home and let your vehicle charge while you sleep. We recommend installing a Wall Connector at home or any property."} 
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

export default FAQ
