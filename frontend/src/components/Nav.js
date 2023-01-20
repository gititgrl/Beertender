
import { useState, useEffect } from 'react';

export default function Nav(props) {
    //logout handle
	const handleLogout = () => {
		props.setIsLoggedIn(false);
		localStorage.clear();
	};
	// state declaration: build JSX array of NavBar items
	const initialState = [];


const [navItems, setNavItems] = useState([]);

	// add NavBar items to JSX array depending on App login state
	useEffect(() => {
		if (props.isLoggedIn) {
			setNavItems(
				initialState.concat(
					<div className="absolute right-9 z-50 mt-2 w-70 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" key="loggedin">
						<div className="block px-2 py-2 flex flex-row items-center" role="none">
                        <a href="/user-info" 
                        className="text-gray-700 block px-4 py-2 text-sm" 
                        role="menuitem" 
                        id="menu-item-0">
                            My Account
                        </a>
                        <a href="/" 
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem" 
                        id="menu-item-1"
                        onClick={() => {
							props.setLogInStatus(false);
							localStorage.clear();
                            props.setIsLoggedIn(false)
							}}>
                                Logout
                        </a>
                        <a href="/breweries" 
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"  
                        id="menu-item-2">
                            Search
                        </a>
                        </div>
                    </div>
				)
			);
		} else {
			setNavItems(
				initialState.concat([
					<div className="absolute right-0 z-50 mt-2 w-70 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" key="loggedout">
						<div className="block px-2 py-2 flex flex-row items-center" role="none">
                            <a href="/" 
                        className="text-gray-700 block px-4 py-2 text-sm" 
                        role="menuitem" 
                        id="menu-item-0">
                            Home
                        </a>
                        <a href="/login" 
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"  
                        id="menu-item-2">
                            Login
                        </a>
                        <a href="/signup" 
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem" 
                        id="menu-item-0">
                            Sign Up
                        </a>
                        
						</div>
                        </div>
					
				])
			);
		}
	}, [props.isLoggedIn]);


    return (
        <nav>{navItems}</nav>
    )
    }


    