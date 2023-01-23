//import packages
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from "react"
import axios from "axios";
import './global_styles/style.css'

//import pages
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import User from "./pages/User";
import BreweryList from "./pages/BreweryList/BreweryList";
import BreweryShow from "./pages/BreweryShow";
import NotFound from './pages/NotFound';

//import components
import Nav from "./components/Nav";
import Main from "./components/Main"
import { getUser } from './utils/api';

function App() {
  // const [name, setName] = useState("")
  const [isLoggedIn, setLogInStatus] = useState(false);
	const [user, setUser] = useState([]);
 
  const refresh = useCallback(() => {
		if (localStorage.token) {
      
			setLogInStatus(true);
			try {
				getUser(localStorage.user_id).then((foundUser) => {
					setUser(foundUser.user);
				});
			} catch (error) {
				console.log(error);
			}
		}
	}, []);

	//useEffect
	useEffect(() => {
		refresh()
	}, [refresh]);

  return (
    <div>
      <Nav 
        isLoggedIn={isLoggedIn}
        setLogInStatus={setLogInStatus}
        setUser={setUser}
        user={user}
        />
      <Routes>
        <Route path = '/' exact element={
          <Main />
        }/>
        <Route path ='/signup' exact element={
						<SignUp 
            isLoggedIn={isLoggedIn} 
            setLogInStatus={setLogInStatus} 
            setUser={setUser}/>
					}/>
        
        <Route
					path='/login'
					exact element={
						<Login
							isLoggedIn={isLoggedIn}
							setLogInStatus={setLogInStatus}
							setUser={setUser}
							user={user}
						/>
					}
				/>
        <Route
          path='/user-info'
          exact element={
          <User 
            user={user}
            setLogInStatus={setLogInStatus}/>}
        />
        <Route
          path='/breweries'
          exact element={<BreweryList />}
        />
        <Route
          path='/brewery/:id'
          exact element={<BreweryShow />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      
    </div>
  );
}

export default App;


