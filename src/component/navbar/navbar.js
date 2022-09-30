import { Link } from "react-router-dom";
import './nav.css';

const Navbar = ({achiv,education,experience})=>{
    return (
        <div>
          <nav className = "list">
          <Link className="link1" to="/" style={{ margin: "20px" }} > Education({education})</Link>
          <Link className="link2"  to="/Experiences" style={{margin:"20px"}}>Experiences({experience})</Link>
          <Link  className="link2" to="/Achievenments">Achievenments({achiv})</Link>
          </nav>
         
        </div>

    )
};

export default Navbar ;