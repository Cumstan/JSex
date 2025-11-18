import { useState, useEffect } from 'react'
import { useFetcher, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from "./header.jsx"
import { Navigate } from 'react-router-dom';
import './css/reg.css'
import { Link } from 'react-router-dom';
import './css/header.css'

function Register() {

const [load, setLoad] = useState(true);
const [scrollY, setScrollY] = useState(0);
const [menuOpen, setMenuOpen] = useState(false);
const [rus, setRus] = useState(false);
const location = useLocation();
  const navigate = useNavigate();

const [regUser, setRegUser] = useState({
	name: "",
	email: "",
	password: "", 
	items: [],
})
const [authUser, setAuthUser] = useState({
	email: "",
	password: "", 
	
})


 const register = async (e) => {
    e.preventDefault();
	if(!regUser.email || !regUser.password || !regUser.name){
		if(!rus == true){
			alert("Please fill all fields");
		}
		else{
			alert("Пожалуйста, заполните все поля");
		}
		return 0;
	}
	if(regUser.password.length < 6){
		if(!rus == true){
			alert("Password must be at least 6 characters long");
		}
		else{
			alert("Пароль должен быть не менее 6 символов");
		}
		return 0;
	}

    const res = await fetch("https://serverex-xmpr.onrender.com/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(regUser),
    });

    const data = await res.json();
	if(data.error){
		if(!rus == true){
			alert("User already exists.");
		}
		else{
			alert("Пользователь уже существует.");
		}
	}
    if (data.user) {
 		 navigate("/", { state: { rus, user: data.user } });
	}
  };

 const login = async (e) => {
    e.preventDefault();
	
    const res = await fetch("https://serverex-xmpr.onrender.com/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authUser),
    });
	 const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
	  if(!rus == true){
      navigate("/", {state: {user: data.user}});
	  }
	  else{
		  navigate("/ru", {state: {user: data.user}});
	  }
    } else {
		if(!rus == true){
      alert(data.error)
		}
		else{
			if(data.error == "Incorrect password"){
				alert("Неверный пароль")
			}
			if(data.error == "User not found"){
				alert("Пользователь не найден")
			}
		}
    }
 }

const handleUserChange = (e) => {
    setRegUser({
      ...regUser,
      [e.target.name]: e.target.value,
    });
  };
  const hadnleAuthUser = (e) => {
    setAuthUser({
      ...authUser,
      [e.target.name]: e.target.value,
    });
  };



useEffect(() => {
document.title = `lab JS`;

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
  
  setRus(location.state.rus)
const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
  
	if(load ==true){
		setTimeout(() => {
  			setLoad(false)
		}, 600);
	}
}, [])


return (
<>
  <div className={`header ${scrollY > 50 || menuOpen == true ? 'scrolled' : ''}`}> 
        <div className="headerCont">
          <Link className={`logoH ${scrollY > 50  || menuOpen == true ? 'scrolledlg' : ''}`} to={rus == true ? "/ru" : "/"} state={{rus: rus, user: null}}></Link>

          <div className="infosH">
            <Link to={"/FaQ"} state={{rus: rus, user: null}} className={`faq infoR ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></Link>
            <Link  onClick={() => {setRus(!rus); setLoad(true); setTimeout(() =>{setLoad(false)}, 400)}} className={`lang infoR ${scrollY > 50 ? 'scrolledI' : 'NscrolledI'}`}></Link>
            </div>
        </div>
      </div>
	<div className="regCont">
		<div className="bgimageREG"></div>
<div className="containerREG" id="container">
	<div className="form-containerREG sign-up-containerREG">
		<form className='formREG' onSubmit={register}>
			<h1 className='h1REG' style={{width: "300px", color: "#000000ff", fontSize: "40px"}}>{rus ? "Создать Аккаунт" : "Create Account"}</h1>
			<div className="social-container">
				<div className="titleSEXREG">{rus ? "Выбери гендер": "Choose gender"}</div>
				<div className="sexinpREG">
					<label className="containerLAB">
						<input className ="checkRAD" type="radio" name="sex" value="Male" checked={regUser.sex === "Male"} onChange={handleUserChange}/>
						{rus ? 'Муж.' : 'Male'}
					</label>
					<label className="containerLAB">
  						<	input className ="checkRAD" type="radio" name="sex" value="Female" checked={regUser.sex === "Female"} onChange={handleUserChange}/>
						{rus ? 'Жен.' : 'Female'}
					</label>
					<label className="containerLAB">
  						<input className ="checkRAD" type="radio" name="sex" value="Other" checked={regUser.sex === "Other"} onChange={handleUserChange}	/>
						{rus ? 'Другой' : 'Other'}
					</label>
				</div>
				<div className="ageInpREG" style={{color: "#000000ff"}}>
					<div className="agetpREG">
						{rus ? "Возраст:" : "Age:"}	 {regUser.age}
					</div>
					<input type="range" name="age" id="ageREG" value={regUser.age} onChange={handleUserChange}  />
				</div>	
			</div>
			<input className='inputREG' name="name" id='nameREG' type="text" placeholder={rus ? "Имя" : "Name"} value={regUser.name} onChange={handleUserChange} />
			<input className='inputREG' name="email" id='emailREG' type="email" placeholder={rus ? "Почта" : "Email"} value={regUser.email} onChange={handleUserChange}/>
			<input className='inputREG' name="password" id='passREG' type="password" placeholder={rus ? "Пароль" : "Password"} value={regUser.password} onChange={handleUserChange} />
			<button className='buttonREG' type='submit'>{rus ? "Зарегистрироваться" : "Sign Up"}</button>
		</form>
	</div>
	<div className="form-containerREG sign-in-containerREG">
		<form className='formREG' onSubmit={login}>
			<h1 className='h1REG'  style={{color: "#000000ff", marginBottom: "80px"}}>{rus ? "Войти" : "Sign in"}</h1>
			<input className='inputREG' name='email' type="email" placeholder={rus ? "Почта" : "Email"} value={authUser.email} onChange={hadnleAuthUser}/>
			<input className='inputREG' name='password' type="password" placeholder={rus ? "Пароль" : "Password"} value={authUser.password} onChange={hadnleAuthUser}/>
			<Link to = "/opros"className="aREG">{rus ? "Забыли пароль?" : "Forgot your password?"}</Link>
			<button className='buttonREG' type='submit' >{rus ? "Войти" : "Sign in"}</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlayREG">
			<div className="overlay-panel overlay-left">
				<h1 className='h1REG'>{rus ? "Здравствуй, друг!" : "Hello, Friend!"}</h1>
				<p>{rus ? "Введи свои личные данные и начни путешествие с нами" : "Enter your personal details and start journey with us"}</p>
				<button className="buttonREG ghost" id="signIn">{rus ? "Уже есть аккаунт?" : "Already have an account?"}</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1 className='h1REG'>{rus ? "Войди в Аккаунт" : "Welcome Back!"}</h1>
				<p>{rus ? "Чтобы оставаться на связи с нами, войди в систему, указав свои личные данные." : "To keep connected with us please login with your personal info"}</p>
				<button className="buttonREG ghost" id="signUp">{rus ? "Нет аккаунта?" : "New to this?"}</button>
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

export default Register
