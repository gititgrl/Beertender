import { useState } from "react"
import { Link } from 'react-router-dom'

export default function BreweryList(props){

    const [loading, setLoading] = useState(false); // Is the data loading?
    const [input, setInput] = useState(""); // User input for brewery query
    const [breweries, setBreweries] = useState([]); // Array of breweries that will be set after fetching
    const [emptyResult, setEmptyResult] = useState(false); // Is the fetch result empty?
    
    const getBreweries = () => {
      fetch(`https://api.openbrewerydb.org/breweries/search?query=${input}`)
          .then((response) => response.json())
          .then((data) => {
              setLoading(true);
              setTimeout(function () {
                  // If the response of the data array is empty
                  if (data.length < 1) {
                      setEmptyResult(true); // NO results for the query
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
      <div>
          <Link
            key={brewery.id}
            to={`/brewery/${brewery.id}`}
            >
              <button className='text-center'>
                  <h3 className="text-2xl pt-4 text-center">{brewery.name}</h3>
                  <p className='lead'>
                      {brewery.city + ", " + brewery.state}
                  </p>
              </button>
          </Link>
    </div>
      </>
  ));

return (
    <div>
        <div className='search-bar-container'>
            <div className='input-group mb-0 pt-20'>
                <input
                    type='text'
                    value={input}
                    placeholder='Search breweries...'
                    aria-label='Search'
                    className=
                        'form-control block flex items-center w-1/2 mx-auto px-3 py-1.5
                        text-base
                       font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0'
                        // focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
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
            <div className='container mx-auto bg-blue-300'>
                <div>
                {/* While the data is loading */}
                {loading && (
                <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-300" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                    
                )}
                {/* If there are results for the search query */}
                <ul className='list'>{breweries && breweriesArr}</ul>
                {/* If there are no results for the search query  */}
                {emptyResult === true && (
                    <p className='lead text-center'>NO RESULTS</p>
                )}
            </div>
            </div>
    </div>
)
}