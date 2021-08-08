import React from 'react'

import "./App.css"
import { useState } from 'react'

function ButtonMovies() {

    const [num, setNum] = useState();

    const movies = () => {
      setNum(Date());
    }

    return (
        <center>
            <div>
                <button className="App" onClick={movies}>
                    Click to see the movie
                </button>
                
                
            </div>
            <span className="num">{ num }</span>
        </center>
    )
}

export default ButtonMovies
