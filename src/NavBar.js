import React from 'react'
import "./App.css"

function NavBar() {
    return (
        <div>
        
          <header class="header">
                    <nav class="navbar">
                        <a href="#" class="nav-logo"><img src="https://image.flaticon.com/icons/png/512/1940/1940569.png" alt="logo" /></a>
                        <ul class="nav-menu">
                            <li class="nav-item">
                                <a href="#" class="nav-link">Services</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">About</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Contact</a>
                            </li>
                            <button className="btn-log-in">Login</button>
                        </ul>
                        <div class="hamburger">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                    </nav>
            </header>
        </div>
    )
}

export default NavBar
