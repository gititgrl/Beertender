import React, { useEffect, useState } from "react";


export default function BreweryShow(props){
    const [brewery, setBrewery] = useState();
    const [id, setId] = useState("");

    useEffect(() => {
        fetch(`https://api.openbrewerydb.org/breweries/search?query=${id}`)
          .then((response) => response.json())
          .then((data) => {
            setBrewery(data[0])
            console.log(data[0])
    })
}, []);
    const Details = ({ brewery }) => {
        const breweryAddress =
            brewery.street +
            ", " +
            brewery.city +
            ", " +
            brewery.state +
            " " +
            brewery.postal_code;
    

    return (
        <div className="flex flex-col items-center justify-center h-screen"> 
                <h1 className="text-2xl font-righteous">{brewery.name}</h1>
                <h2 className="text-lg">{breweryAddress}</h2>
        </div>
    )
}

}