import Carousel from '../Components/Carousel';
import './frontPage.css';
import { useState, useEffect } from 'react';

const FrontPage = () => {
  const [users, setUsers] = useState(0);
  const [posts,setPosts] = useState(0);

  useEffect(() => {
    const noOfUsers = 95;
    const noOfPosts = 75;
    let userCounter = 0;
    let postCounter = 0;

    const interval = setInterval(() => {
      if (userCounter <= noOfUsers) {
        setUsers(userCounter);
        userCounter++;
      }
      if(postCounter<=noOfPosts){
        setPosts(postCounter)
        postCounter++;
      }
      if(userCounter > noOfUsers && postCounter > noOfPosts){
        clearInterval(interval)
      }
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
        <Carousel/>
      <div className="numbersContent">
        <div className='numbering'>
            <span className='title'>Number of Users</span>
            <span className='titleContent'>{users}K</span>
        </div>
        <div className='numbering'>
            <span className='title'>Number of Posts</span>
            <span className='titleContent'>{posts}K</span>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
