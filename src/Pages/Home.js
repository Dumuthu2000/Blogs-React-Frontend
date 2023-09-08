import './home.css';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import FrontPage from './FrontPage';

const Home=()=>{
    const[postData,setPostData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/posts')
        .then((res)=>{
            setPostData(res.data)
            console.log(res.data)
        }).catch((err)=>{
            console.log(err.message)
        })
    },[])
    return(
    <div>
        <div className="mainContainerBlock" >
            <div className="leftContainer">
            {     
            postData.map((data,index)=>(
                <div className="containerBlock" key={index}>
                    <div className="subContainer">
                        <img src={data.image_1} alt="" className="blogImage1" />
                        <div className="authorSection">
                            <Link to={`/profile/:id`}><img src={data.userProfile} alt="" className="authorProfile" /></Link>
                            <div className="nameSection">
                                <Link to={`/profile/:id`} className="authorName"><p>{data.username}</p></Link>
                                <p className="postedDate">{data.postedDate}</p>
                            </div>
                        </div>
                    </div>
                    <div className="subContainer">
                        <h2 className="blogTitle">{data.title}</h2>
                        <Link to={`catogery/${data.catogeryName}`} ><button className='catogery'>{data.catogeryName}</button></Link>
                        <p className="content">{data.content}</p>
                        <Link to={`blogs/${data.postID}`}><button className='readButton'>Read More...</button></Link>
                    </div>
                </div>
                ))}
            </div>
            <div className="rightContainer">
                <FrontPage/>
            </div>
        </div>
        </div>
    )
}

export default Home;