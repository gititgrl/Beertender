import React from 'react'
import videoBg from '../assets/videoBg.mp4'
import '../global_styles/style.css'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div className='main'>
            <div className="overlay">
            <video src={videoBg} autoPlay loop muted />
            </div>
            <div className='container flex flex-wrap items-center justify-center mx-auto fixed z-40'>
			<Link to='/breweries'>
            <div className="brewtender">
                <a href="/breweries" className="flex items-center">
                <h1 className="animate-pulse relative flex items-center justify-center h-screen z-30 p-5 text-5xl text-white">
            Welcome to Beertender</h1>
                </a>
				</div>
			</Link>
		</div>
        </div>
        
    )
}

export default Main