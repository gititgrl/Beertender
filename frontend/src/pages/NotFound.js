import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Sorry!</h1>
            <p>Looks like the page you're looking for doesn't exist...</p>
            <Link to ='/breweries'>This way back.</Link>
        </div>
    )
}
export default NotFound
