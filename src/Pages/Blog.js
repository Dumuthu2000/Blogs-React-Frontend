import './blog.css'
import axios from 'axios'
import { Link,useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'

const Blog=()=>{
    const {postID} = useParams();

    const[blogPost,setBlogPost] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8080/posts/${postID}`)
        .then((res)=>{
            // alert(`Blog no ${postID} fetched successfully`)
            setBlogPost(res.data[0])
            // console.log(res.data[0])
        }).catch((err)=>{
            console.log(err.message)
        })
    },[postID])
    return(
            <div className='mainsContainer'>
                <div className="contentBlock">
                    <h1 className="blogsTitle">{blogPost.title}</h1>
                </div>
                <div className="contentBlockNaming">
                    <Link to='/user/:id'><img src="https://st3.depositphotos.com/19428878/37071/v/450/depositphotos_370714622-stock-illustration-businessman-icon-vector-male-avatar.jpg" alt="" className="authorProfile" /></Link>
                    <div className="nameSection">
                        <Link to='user/:id' className="authorName"><p>{blogPost.username}</p></Link>
                        <p className="postedDate">{blogPost.postedDate}</p>
                    </div>
                    <div className="buttonSection">
                        <Link to={`/updateBlog/${blogPost.postID}`}><button className="updateButton">Edit</button></Link>
                        <Link to={`/deleteBlog/${blogPost.postID}`}><button className="deleteButton">Delete</button></Link>
                    </div>
                </div>
                <div className="contentBlock">
                    <div className="authorDetail">
                        <img src={blogPost.image_1} alt="" className="blogImages" />
                        <img src={blogPost.image_2} alt="" className="blogImages" />
                        <img src={blogPost.image_3} alt="" className="blogImages" />
                    </div>
                </div>
                <div className="contentBlock">
                    <p className="blogContent">{blogPost.content}</p>
                </div>
            </div>
    )
}
export default Blog;