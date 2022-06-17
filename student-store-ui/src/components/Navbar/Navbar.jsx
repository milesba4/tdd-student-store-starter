import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
export default function Navbar() {

  return (
    <nav className="navbar">
      <ul class="nav-links">
      <Logo/>
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
