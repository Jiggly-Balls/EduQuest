import { Link } from "react-router-dom";
import "../styles/Navbar.css"

import logo from "../assets/FTF.png"


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img 
          src={ logo }
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{" "}
      </a>

      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Courses</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;