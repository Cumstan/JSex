import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import Account from './account.jsx'
import AppRu from './AppRu.jsx'
import Regiter from './Register.jsx'
import Store from './Store.jsx'
import FAQ from './FAQ.jsx'
import ErrorPage from './Page404.jsx'
import Charge from './charging.jsx'
import ReactDOM from "react-dom/client";
import Energy from './Energy.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTop from './topscroll.jsx';
import ShopItem from './shopitem.jsx'
import Discover from './discover.jsx'
import Cart from './cart.jsx'

const root = document.getElementById("root");


ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/ru" element={<AppRu />} />
        <Route path="/logIn" element={<Regiter />} />
         <Route path="/store" element={<Store/>}/>
         <Route path='/FaQ' element={<FAQ/>}/>
        <Route path='/charging' element={<Charge/>}/>
         <Route path="*" element={<ErrorPage/>}/>
          <Route path="/energy" element={<Energy/>}/>
        <Route path="/store/item/:id" element={<ShopItem />} />
        <Route path='/account' element={<Account/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>

      {window.location.pathname !== '/discover' && (
        <footer style={{zIndex: '1', display: 'block'}}>
          <div className="tagsNShi">
            <div className="linksFoot1">
              <div className="Contacts">Contacts: 6767676767</div>
              <div className="company">BoikoK®</div>
              <div className="labname">Lab No.1</div>
            </div>
            <div className="linksFoot">
              <div className="linkF Insta"></div>
              <div className="linkF Face"></div>
              <div className="linkF Tik"></div>
            </div>
          </div>
        </footer>
      )}
    </BrowserRouter>
  </StrictMode>,
)
