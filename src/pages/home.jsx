import Moviecard from "../components/moviecard"
import {useState ,useEffect} from 'react'
import "./home.css"
import { searchMovies,getPopularMovies } from "../services/api";


function Home(){
    const [searchquery,setsearchquery]=useState("");
    const [movies,setmovies]=useState([]);
    const [error,setError]= useState(null);
    const [loading,setloading]=useState(true);


    const loadpopularmovies = async () => {
        try{
            const popularmovies = await getPopularMovies();
            setmovies(popularmovies);
    }
        catch(err){
            console.log(err);
            setError("failed to get api");
        }
        finally{
            setloading(false);
        }
    }

    useEffect(() => {
        loadpopularmovies()
    },[]);

    const handlesearch=async(e)=>{
        e.preventDefault();
        if(searchquery.trim()==""){
            return
        }
        if(loading) return

        setloading(true)
        try{
            const searchResults=await searchMovies(searchquery)
            setmovies(searchResults)
            setError(null)
        } catch(err){
            setError("failed to search movies..")
            console.log(err)
        }finally{
            setloading(false)
        }

        setsearchquery("")

    }
    return(
        <div className="home">
            <form onSubmit={handlesearch} className="search_form">
                <input type="text" 
                placeholder="search movies" 
                className="search_input"
                value={searchquery}
                onChange={(e)=>setsearchquery(e.target.value)}/>
                <button type="submit" className="search_btn">search</button>
            </form>
            {(error!=null) && <h2>{error}</h2>}
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <div className="movies_grid">
                        {movies.map(movie =>
                            movie.title
                                .toLowerCase()
                                .startsWith(searchquery.toLowerCase()) && (
                                    <Moviecard
                                        movie={movie}
                                        key={movie.id}
                                    />
                                )
                        )}
                </div>
            )}
        </div>
    )
}

export default Home;