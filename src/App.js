//import packages
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react"
import axios from "axios";
import './global_styles/style.css'

//import pages
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import User from "./pages/User";
import Favorites from "./pages/Favorites";
import BreweryList from "./pages/BreweryList/BreweryList";
import BreweryShow from "./pages/BreweryShow";
import Home from "./pages/Home/Home"
import NotFound from './pages/NotFound';

//import components
import Nav from "./components/Nav";
import Main from "./components/Main"
import { getUser } from './utils/api';

function App() {
  // const [name, setName] = useState("")
  const [isLoggedIn, setLogInStatus] = useState(false);
	const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false); // Is the data loading?
  const [input, setInput] = useState(""); // User input for brewery query
  const [breweries, setBreweries] = useState([]); // Array of breweries that will be set after fetching
  const [emptyResult, setEmptyResult] = useState(false); // Is the fetch result empty?
  const [username, setUsername] = useState('')
  const [password, setPassword] =useState('')
  useEffect(() => {
    if (localStorage.token) {
      setLogInStatus(true);
      } else {
        setLogInStatus(false)
      }
    }, []);

  const getBreweries = () => {
    fetch(`https://api.openbrewerydb.org/breweries/search?query=${input}`)
        .then((response) => response.json())
        .then((data) => {
            setLoading(true);
            setTimeout(function () {
                // If the response of the data array is empty show no results
                if (data.length < 1) {
                    setEmptyResult(true);
                }
                setBreweries(data); // Set the breweries array from the response
                setLoading(false); // Set the loading state back to false
            }, 500);
        })
        .catch((error) => {
            console.error(error.message);
            alert("There was an error fetching the data");
        });
};

const handleClearingResults = () => {
  setBreweries([]);
  setEmptyResult(false);
  setInput("");
};

const breweriesArr = breweries
.sort(function (a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
})
.map((brewery) => (
    <>
        <li
            className='list-item'
            key={brewery.id}
            data-toggle='modal'
            data-target={"#detailsModal_" + brewery.id}
        >
            <div className='list-item-title'>
                <h3>{brewery.name}</h3>
            </div>
            <div className='list-item-title'>
                <p className='lead'>
                    {brewery.city + ", " + brewery.state}
                </p>
            </div>
        </li>
        
    </>
));
  return (
    <div>
      <Nav 
        isLoggedIn={isLoggedIn}
        setLogInStatus={setLogInStatus}
        setUsername={setUsername}
        setPassword={setPassword}/>
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
          exact element={<User />}
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


// try {getUser(localStorage.user_Id)
//   .then((foundUser) => {
//     setUser(foundUser.user);
//   })
//     } catch (error) {
//       console.log(error)