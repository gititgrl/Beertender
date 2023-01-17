import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Nav(props) {
    //logout handle
	const handleLogout = () => {
		props.setUser({});
		localStorage.clear();
	};
	// state declaration: build JSX array of NavBar items
	const initialState = [
		// <div className='container flex flex-wrap items-center justify-center mx-auto fixed z-40'>
		// 	<Link to='/breweries'>
        //     <div className="brewtender">
        //         <a href="/breweries" className="flex items-center">
        //         <h1 className="animate-pulse relative flex items-center justify-center h-screen z-30 p-5 text-5xl text-white">
        //     Welcome to Beertender</h1>
        //         </a>
		// 		</div>
		// 	</Link>
		// </div>,

	
	];


const [navItems, setNavItems] = useState(initialState);

	// add NavBar items to JSX array depending on App login state
	useEffect(() => {
		if (props.isLoggedIn) {
			setNavItems(
				initialState.concat(
					<div className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
						<div className="py-1 flex flex-row" role="none">
                        <a href="/user-info" 
                        class="text-gray-700 block px-4 py-2 text-sm" 
                        role="menuitem" 
                        tabindex="-1" 
                        id="menu-item-0">
                            My Account
                        </a>
                        <a href="/login" 
                        class="text-gray-700 block px-4 py-2 text-sm" 
                        role="menuitem" 
                        tabindex="-1" 
                        id="menu-item-1"
                        onClick={() => {
							props.setLogInStatus(false);
							handleLogout();
							}}>
                                Logout
                        </a>
                        <a href="/breweries" 
                        class="text-gray-700 block px-4 py-2 text-sm" 
                        role="menuitem" tabindex="-1" 
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
					<div className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
						<div className="py-1 flex flex-row" role="none">
                            <a href="/" 
                        class="text-gray-700 block px-4 py-2 text-sm" 
                        role="menuitem" 
                        tabindex="-1" 
                        id="menu-item-0">
                            Home
                        </a>
                        <a href="/login" 
                        class="text-gray-700 block px-4 py-2 text-sm" 
                        role="menuitem" tabindex="-1" 
                        id="menu-item-2">
                            Login
                        </a>
                        <a href="/signup" 
                        class="text-gray-700 block px-4 py-2 text-sm" 
                        role="menuitem" 
                        tabindex="-1" 
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
//     <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-blue-300">
//   <div className="container flex flex-wrap items-center justify-between mx-auto">
//     <a href="/breweries" className="flex items-center">
//         {/* <img src="https://cdn.dribbble.com/userupload/3494444/file/original-467a0c058dd944af5885268e22d020f9.png" className="h-6 mr-3 sm:h-9" alt="Beertender Logo" /> */}
//         <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Beertender</span>
//     </a>
//     <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-blue-600 dark:focus:ring-blue-700" aria-controls="navbar-default" aria-expanded="false">
//       <span className="sr-only">Open main menu</span>
//       </button>
//     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//       <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-blue-300 md:dark:bg-blue-300 dark:border-gray-700">
//         <li>
//           <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
//         </li>
//         <li>
//           <a href="/login" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
//         </li>
//         <li>
//           <a href="/signup" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign Up</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

    