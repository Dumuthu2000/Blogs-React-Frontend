import './register.css'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register=()=>{
    const[username,setUsername] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[userProfile,setUserProfile] = useState('');

    const navigate = useNavigate();

    const registerHandler=()=>{
        axios.post('http://localhost:8080/register',{
            username:username,
            email:email,
            password:password,
            userProfile:userProfile
        }).then((res)=>{
            alert('New user successfully registered!!!!')
            navigate('/login')
        }).catch((err)=>{
            console.log(err.message)
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
                    <p className='overlayText1'>Join Our The Blogger Community! Register to Share, Connect, and Inspire.</p>
                </div>
                </div>
                <div className='registerContainer2'>
                    <h1 className="heading">Sign In</h1>
                    <div className="registerBlock">
                        <label className='detailTitle'>Username:</label>
                        <input type="text" className="inputDetails" placeholder=' Username...' onChange={(e)=>{
                            setUsername(e.target.value)
                        }}/>
                    </div>
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
                        <label className='detailTitle'>Profile Pic:</label>
                        <input type="file" className="inputDetails" placeholder=' Profile pic...' onChange={(e)=>{
                            setUserProfile(e.target.value)
                        }}/>
                        <input type="text" className="inputDetails" placeholder=' Profile pic url...' onChange={(e)=>{
                            setUserProfile(e.target.value)
                        }}/>
                    </div>
                    <div className="registerBlock">
                        <button className="regButton" onClick={registerHandler}>Sign Up</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register