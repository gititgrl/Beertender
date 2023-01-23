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
        <div className="flex items-center justify-center h-screen"> 
                <h1>Hello!</h1>
                <h2>{Details}</h2>
        </div>
    )
}

}