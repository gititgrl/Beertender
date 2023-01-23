import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen">
        <div className="not-found">
            <h1 className="text-2xl font-righteous mb-4">Sorry!</h1>
            <p>Looks like the page you're looking for doesn't exist...</p>
            <Link to ='/breweries'>This way back.</Link>
        </div>
        </div>
    )
}
export default NotFound
