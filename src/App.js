import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Blog from './Pages/Blog'
import Write from './Pages/Write'
import UpdateBlog from './Pages/UpdateBlog';
import DeleteBlog from './Pages/DeleteBlog';
import Catogery from './Pages/Category';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blogs/:postID' element={<Blog/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/addBlog' element={<Write/>}/>
            <Route path='/updateBlog/:postID' element={<UpdateBlog/>}/>
            <Route path='/deleteBlog/:postID' element={<DeleteBlog/>}/>
            <Route path='/catogery/:catogeryName' element={<Catogery/>}/>
          </Routes>
          <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
