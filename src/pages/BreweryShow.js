export default function BreweryShow(props){
    const Info = ({ brewery }) => {
        const Address =
        brewery.street + brewery.city + brewery.state + brewery.postal_code;
        console.log(Address)
    

    return (
        <div className="breweryContainer">
            <div>
                <h3>{brewery.name}</h3>
                <h4>{Address}</h4>
                <h5>{brewery.website_url}</h5>
            </div>
        </div>
    )
}
}