import React from "react";

export default function BreweryShow(props){
    
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