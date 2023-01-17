import React from 'react'
import videoBg from '../assets/videoBg.mp4'
import '../global_styles/style.css'

const Main = () => {
    return (
        <div className='main'>
            <div className="overlay">
            <video src={videoBg} autoPlay loop muted />
            <h1 className="animate-pulse relative flex items-center justify-center h-screen z-30 p-5 text-5xl text-white">
            Welcome to Beertender</h1>
            </div>
        </div>
        
    )
}

export default Main