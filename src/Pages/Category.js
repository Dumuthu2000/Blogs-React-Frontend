import './category.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom';

const Category = () => {
    const [postData, setPostData] = useState([]);
    const { catogeryName } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/catogery/${catogeryName}`)
            .then((res) => {
                setPostData(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [catogeryName]);

    const readHandler=()=>{
        navigate('/')
    }
    return (
        <div>
        <div className="mainContainerBlockCatogery" >
        {postData.length > 0 && (
            <span className='headTitleName'>{postData[0].catogeryName}</span>
            )}

            <div className="leftContainerCategory">
            {     
            postData.map((data,index)=>(
                <div className="containerBlockCatogery" key={index}>

                    <div className="subContainer">
                        <img src={data.image_2} alt="" className="blogImage1" />
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
                        <p className="content">{data.content}</p>
                        <button onClick={readHandler} className='readButtons'>Read More...</button>
                    </div>
                </div>
                ))}
            </div>
         </div>
        </div>
    );
};

export default Category;
