import "../scss/components/Landing.scss";
import { Link } from "react-router-dom"; 



function Landing() {
    return (
    <div className="background"> 
        <h1>Welcome to my portfolio</h1>
        <p>Discover my skills</p>
        <Link to="/portfolio">
            <button>Explore Portfolio</button>
        </Link>
    </div>
    )
}


export default Landing;