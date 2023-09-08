import './footer.css'
import { Link } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer=()=>{
    return(
        <div className='footer'>
            <div className="footerSec">
                <span className='featureName'>The Blogger</span>
                <p>&copy; 2023 The Blogger. All rights reserved.</p>

            </div>
            <div className="footerSec">
                <span className='featureName'>Blog Catogeries</span>
                <Link to='/catogery/technology' className="links">Technology</Link>
                <Link to='/catogery/education' className="links">Education</Link>
                <Link to='/catogery/travel' className="links">Travel</Link>
                <Link to='/catogery/sports' className="links">Sports</Link>
            </div>
            <div className="footerSec">
                <span className='featureName'>Contacts</span>
                <div className="iconsList">
                    <YouTubeIcon htmlColor='white' className='icons'/>
                    <FacebookIcon htmlColor='white' className='icons'/>
                    <InstagramIcon htmlColor='white' className='icons'/>
                    <TwitterIcon htmlColor='white' className='icons'/>
                </div>
            </div>
        </div>
    )
}

export default Footer;