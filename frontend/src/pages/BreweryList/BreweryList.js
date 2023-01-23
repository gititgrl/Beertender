import { useState } from "react"
import { Link } from 'react-router-dom'
import BreweryShow from "../BreweryShow";
import './index.css'
export default function BreweryList(props){

    const [loading, setLoading] = useState(false); 
    const [input, setInput] = useState(""); 
    const [breweries, setBreweries] = useState([]); 
    const [emptyResult, setEmptyResult] = useState(false); 
    
    const getBreweries = () => {
      fetch(`https://api.openbrewerydb.org/breweries/search?query=${input}`)
          .then((response) => response.json())
          .then((data) => {
              setLoading(true);
              setTimeout(function () {
                  
                  if (data.length < 1) {
                      setEmptyResult(true); 
                  }
                  setBreweries(data); 
                  setLoading(false); 
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
      <Link
      key={brewery.id}
      path= {<BreweryShow />}
      to= {`/brewery/${brewery.id}`}>
          
              <button className='text-center'>
                    <h3 className="text-2xl pt-4 text-center">
                        {brewery.name}
                    </h3>
                    <p className='address'>
                        {brewery.street}
                    </p>
                    <p className='city'>
                        {brewery.city + ", " + brewery.state}
                    </p>
              </button>
          
    </Link>
    <BreweryShow brewery={brewery} />
      </>
  ));

return (
    <div className="brewerylist" key="brew">
        <div className="pt-20">
            <h1 className="font-righteous text-2xl">Search for a brewery by Name, City, State or keyword below:</h1>
        </div>
        <div className='search-bar-container'>
            <div className='input-group mb-0 pt-10'>
                <input
                    type='text'
                    value={input}
                    placeholder='Search breweries...'
                    aria-label='Search'
                    className=
                        'form-control block flex items-center w-1/2 mx-auto px-3 py-1 text-base
                       font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0'
                        
                    onChange={(e) => setInput(e.target.value)}/>
                    <button
                        className='bg-white 
                        hover:bg-green-300 
                        text-gray-800 
                        font-semibold 
                        py-2 
                        px-4 
                        border border-gray-400 
                        rounded shadow'
                        type='button'
                        id='button-addon1'
                        data-ripple-color='dark'
                        onClick={getBreweries}
                    >
                    Search
                    </button>
                    <button
                        className='bg-white 
                        hover:bg-red-500 
                        text-gray-800 
                        font-semibold 
                        py-2 
                        px-4 
                        border border-gray-400 
                        rounded shadow'
                        type='button'
                        id='button-addon2'
                        data-ripple-color='dark'
                        onClick={handleClearingResults}
                    >
                    Clear
                    </button>
            </div>
        </div>
        <div className='brewerydata'>
            <div className='container md:mx-auto bg-blue-300 snap-y'>
                
                <ul className='snap-center'>{breweries && breweriesArr}</ul>
                
                {emptyResult === true && (
                    <p className='pb-10'>NO RESULTS</p>
                )}
            </div>
            </div>  
        </div>
    
)
}

