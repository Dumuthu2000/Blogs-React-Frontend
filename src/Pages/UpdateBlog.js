import './updateBlog.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'


const UpdateBlog=()=>{
    const navigate = useNavigate()

    const[title,setTitle] = useState('');
    const[content,setContent] = useState('');
    const[image_1,setImage_1] = useState('');
    const[image_2,setImage_2] = useState('');
    const[image_3,setImage_3] = useState('');
    const[postedDate,setPostedDate] = useState('');
    const[catogeryID,setCatogeryID] = useState(0);
    const[userID,setUserID] = useState(0);

    const {postID} = useParams()

    const jwtToken = localStorage.getItem("jwtToken");
    useEffect(()=>{
        if(!jwtToken){
            navigate('/login')
        }
    },[navigate,jwtToken])

    useEffect(()=>{
        {setPostedDate('2023-05-10')}
        {setUserID('1')}
    },[postID])
    const handleUpdate=()=>{
         // Convert the HTML content to plain text
        const plainTextContent = new DOMParser().parseFromString(content, 'text/html').body.textContent;
        axios.put(`http://localhost:8080/updateBlog/${postID}`,{
        title:title,
        content:plainTextContent,
        image_1:image_1,
        image_2:image_2,
        image_3:image_3,
        postedDate:postedDate,
        catogeryID:catogeryID,
        userID:userID
    },{
        headers:{Authorization:jwtToken}
    }).then((res)=>{
        alert('Your blog successfully added')
        navigate('/')
    }).catch((err)=>{
        console.log(err.message)
    })
    }
    const handleBack=()=>{
        navigate('/')
    }
    return(
        <div className='writeContainer'>
            <div className="writeContent">
                <input type="text" className="titleInput" placeholder='Title' value={title} onChange={(e)=>{
                    setTitle(e.target.value)
                }}/>
            </div>
            <div className="writeContent">
                <div className="editorBlock">
                    <ReactQuill type='textarea' theme='snow' className='reactQuill' value={content}  onChange={setContent}/>
                    <form className="catogerySection">
                        <span className="catogeryTitle">Choose Catogery</span>
                        <div className="catogeries">
                            <input type="radio" name='catogery' value='1' className="catogery" checked onChange={(e)=>{
                                setCatogeryID(e.target.value)
                            }}/>
                            <lable className="catogerName">Technology</lable>
                        </div>
                        <div className="catogeries">
                            <input type="radio" name='catogery' value='3' className="catogery" onChange={(e)=>{
                                setCatogeryID(e.target.value)
                            }}/>
                            <lable className="catogerName">Education</lable>
                        </div>
                        <div className="catogeries">
                            <input type="radio" name='catogery' value='4' className="catogery" onChange={(e)=>{
                                setCatogeryID(e.target.value)
                            }}/>
                            <lable className="catogerName">Travel</lable>
                        </div>
                        <div className="catogeries">
                            <input type="radio" name='catogery' value='2' className="catogery" onChange={(e)=>{
                                setCatogeryID(e.target.value)
                            }}/>
                            <lable className="catogerName">Sports</lable>
                        </div>
                    </form>
                </div>
            </div>
            <div className="writeContent">
                <div className="uploadImages">
                    <div className="imagesBlock">
                        <lable className="images">Image 1</lable>
                        <input type="text" accept='image/png, image/jpg, image/jpeg' className="imagesInput" onChange={(e)=>{
                            setImage_1(e.target.value)
                        }}/>
                    </div>
                    <div className="imagesBlock">
                        <lable className="images">Image 2</lable>
                        <input type="text" className="imagesInput" onChange={(e)=>{
                            setImage_2(e.target.value)
                        }}/>
                    </div>
                    <div className="imagesBlock">
                        <lable className="images">Image 3</lable>
                        <input type="text" className="imagesInput" onChange={(e)=>{
                            setImage_3(e.target.value)
                        }}/>
                    </div>
                </div>
            </div>
            <div className="writeContent">
                <div className="buttons">
                    <button className="uploadButton" onClick={handleUpdate}>Update</button>
                    <button className="backButton"onClick={handleBack}>Back</button>
                </div>
            </div>
        </div>
    )
}
export default UpdateBlog;