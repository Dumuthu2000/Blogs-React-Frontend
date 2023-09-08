import './navbar.css'
import {Link} from 'react-router-dom'

const Navbar=()=>{
  const logoutHandler=()=>{
    localStorage.removeItem("jwtToken")
    alert('You succeffuly Logout!!!!')
  }
  return(
    <div className='main_container'>
      <div className="container">
        <div className="Section">
          <img src="/images/logo.png" alt="" className='logo'/>
        </div>
        <div className="Section">
          <Link to='/'className="options"><span>Home</span></Link>
          <Link to='/catogery/technology'className="options"><span >Technology</span></Link>
          <Link to='/catogery/education'className="options"><span >Education</span></Link>
          <Link to='/catogery/travel'className="options"><span>Travel</span></Link>
          <Link to='/catogery/sports'className="options"><span>Sports</span></Link>
        </div>
        <div className="Section">
          <Link to='/addBlog'><button>Add Post</button></Link>
        </div>
        <div className="Section">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/register'><button>Sign In</button></Link>
        <button onClick={logoutHandler} id='logout'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar