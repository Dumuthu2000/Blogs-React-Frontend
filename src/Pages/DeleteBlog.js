import './deleteBlog.css'
import axios from 'axios'
import {useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'

const DeleteBlog=()=>{
    const navigate = useNavigate()
    const {postID} = useParams()
    const jwtToken = localStorage.getItem("jwtToken");
    useEffect(()=>{
        if(!jwtToken){
            navigate('/login')
        }
    },[navigate,jwtToken])

    useEffect(()=>{deleteHandler()},[postID,navigate])

    const deleteHandler=()=>{
        axios.delete(`http://localhost:8080/deleteBlog/${postID}`,{
            
            headers:{Authorization:jwtToken}
        })
        .then((res)=>{
            alert(`${postID} was deleted!!!`)
            navigate('/')
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    return(
        <div>This is delete page</div>
    )
}

export default DeleteBlog