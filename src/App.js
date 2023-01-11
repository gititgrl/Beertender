//import pages
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import User from "./pages/User";
import Favorites from "./pages/Favorites";
import BreweryList from "./pages/BreweryList";
import BreweryShow from "./pages/BreweryShow";

//import components
import Nav from "./components/Nav";

import axios from "axios";

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
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
    </div>
  );
}

export default App;
