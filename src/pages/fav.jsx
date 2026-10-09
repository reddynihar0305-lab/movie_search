import "./fav.css"
import { useMovieContext } from "../components/context/moviecontext"
import Moviecard from '../components/moviecard'

function Fav(){
    const {favorites}=useMovieContext()
    if(favorites.length==0){
        return (
        <div className="fav_empty">
            <h2>No favorite movies yet</h2>
            <p>Start adding movies to your favourites and they will appear here!</p>
        </div>
    )}
    
    return(
            <div className="movies_grid">
            {favorites.map(fav =>
                <Moviecard
                    movie={fav}
                    key={fav.id}
                />
            )}     
            </div>)
      
}

export default Fav

