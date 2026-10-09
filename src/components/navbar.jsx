import { Link } from "react-router-dom"; 
import "./navbar.css"


function Navbar(){
    return(
        <div className="navbar">
            
            <div className="navbar_links">
                <Link to="/" className="nav_link">Home</Link>
            </div>
            <div>
                <Link to="/fav" className="nav_link">favorites</Link>
            </div>
        </div>
    )
}

export default Navbar