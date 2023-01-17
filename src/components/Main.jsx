import React from 'react'
import videoBg from '../assets/videoBg.mp4'
import '../global_styles/style.css'

const Main = () => {
    return (
        <div className='main'>
            <div className="overlay">
            <video src={videoBg} autoPlay loop muted />
            </div>
        </div>
        
    )
}

export default Main