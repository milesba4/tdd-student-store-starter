import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom";
export default function Navbar() {

  return (
    <nav className="navbar">
      <ul className="nav-links">
        
        <li>
          <Logo/>
        </li>
      <li>
      <a href=""> Home</a>
      </li>
      <li>
        <a href=""> About Us</a>
      </li>
      <li>
        <a href=""> Contact Us</a>
      </li>
      <li>
        <a href=""> Buy Now</a>
      </li>
      </ul>

      
    </nav>
  )
}
