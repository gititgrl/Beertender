//import packages
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react"
import axios from "axios";

//import pages
import SignUp from "./pages/SignUp";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import User from "./pages/User";
import Favorites from "./pages/Favorites";
import BreweryList from "./pages/BreweryList";
import BreweryShow from "./pages/BreweryShow";

//import components
import Nav from "./components/Nav";




const options = {
  method: 'GET',
  url: 'https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/5494',
  headers: {
    'X-RapidAPI-Key': 'aad7ca59b2msh7a1b2b40cd9afd8p1883f0jsn55593d1f8392',
    'X-RapidAPI-Host': 'brianiswu-open-brewery-db-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

function App() {
  const [name, setName] = useState("")
  const [isLoggedIn, setLogInStatus] = useState(false);
	const [user, setUser] = useState([]);
  async function postName(e) {
    e.preventDefault()

    try {
      await axios.post("http://localhost:4000/post_name", {
        name
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Nav />
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route
					path='/signup'
					element={
						<SignUp 
            isLoggedIn={isLoggedIn} 
            setLogInStatus={setLogInStatus} 
            setUser={setUser}/>
					}
				/>
        <Route
					path='/login'
					element={
						<Login
							isLoggedIn={isLoggedIn}
							setLogInStatus={setLogInStatus}
							setUser={setUser}
							user={user}
						/>
					}
				/>
      </Routes>
      <form onSubmit={postName}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Send Name to Backend</button>
      </form>
    </div>
  );
}

export default App;
