import './login.css'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'

const Login=()=>{
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const navigate = useNavigate();

    const loginHandler=()=>{
        axios.post('http://localhost:8080/login',{
            email:email,
            password:password
        }).then((res)=>{
            console.log(res.data)
            //Generated jsonwebtoken store in local storage 
            const token = res.data.token;
            localStorage.setItem("jwtToken","Bearer " + token);
            // const name = res.data.username;
            alert(`Hello , Welcome to THE BLOGGER`)
            navigate('/');

        }).catch((err)=>{
            console.log(err)
            alert('Logging faild')
        })
    }
    return(
        <div className="mainContainer">
            <div className="regMainContainer">
                <div className="registerContainer1">
                    <img src="/images/register.jpg" alt="" className="regImage" />
                    <div className="overlay">
                    <h1 className="overlayText">Welcome To The Blogger</h1>
                    <p className='overlayText1'>Unlock Your Blogging Journey:</p>
                    <p className='overlayText1'>Join Our The Blogger Community! Login to Share, Connect, and Inspire.</p>
                </div>
                </div>
                <div className='registerContainer2'>
                    <h1 className="heading">Login</h1>
                    <div className="registerBlock">
                        <label className='detailTitle'>Email:</label>
                        <input type="email" className="inputDetails" placeholder=' Email...' onChange={(e)=>{
                            setEmail(e.target.value)
                        }}/>
                    </div>
                    <div className="registerBlock">
                        <label className='detailTitle'>Password:</label>
                        <input type="password" className="inputDetails" placeholder=' Password...' onChange={(e)=>{
                            setPassword(e.target.value)
                        }}/>
                    </div>
                    <div className="registerBlock">
                        <button className="regButton" onClick={loginHandler}>Login</button>
                        <p className="regLink">Don't have any account? <Link to='/register' className='registerLink'>Register Now</Link></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
