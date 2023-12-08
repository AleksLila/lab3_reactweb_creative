import Box1 from '../Left/Box-1/box-1';
import './Left.css'


function Left(){
    return(
        <div className='left'>
           <div id="clock"></div>
            <div className="profile-img">
                <img src="image/photo1.png "/>
            </div>

            <Box1></Box1>
            
        </div>
    );
    
}

export default Left;