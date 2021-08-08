import React from 'react'
import "./App.css"
import swal from 'sweetalert'
import { useState} from 'react'

function NavBar() {
    const [time, setTime] = useState()
    const handClick = () => {
        setTime(Date());
        swal("Good job!", "You clicked the button!", "success");
    }
    
    return (
        <div>
        
          <header class="header">
                    <nav class="navbar">
                        <a href="#fff" class="nav-logo"><img src="https://image.flaticon.com/icons/png/512/1940/1940569.png" alt="logo" /></a>
                        <ul class="nav-menu">
                            <span style={{ 
                                color:"red",
                                fontSize:"20px",
                            }}> {time} </span>
                            <li class="nav-item">
                                <a href="#ff" class="nav-link">Services</a>
                            </li>
                            <li class="nav-item">
                                <a href="#fff" class="nav-link">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a href="#fff" class="nav-link">About</a>
                            </li>
                            <li class="nav-item">
                                <a href="#paragraphs" class="nav-link">Contact</a>
                            </li>
                            <button onClick={handClick} className="btn-log-in" >Login</button>
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
