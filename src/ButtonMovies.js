import React from 'react'
import swal from 'sweetalert'
import "./App.css"

function ButtonMovies() {
    const movies = () => {
        swal({
            text: 'Search for a movie.',
            content: "input",
            button: {
              text: "Search!",
              closeModal: false,
            },
          })
          .then(name => {
            if (!name) throw null;
           
            return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
          })
          .then(results => {
            return results.json();
          })
          .then(json => {
            const movie = json.results[0];
           
            if (!movie) {
              return swal("No movie was found!");
            }
           
            const name = movie.trackName;
            const imageURL = movie.artworkUrl100;
           
            swal({
              title: "Top result:",
              text: name,
              icon: imageURL,
            });
          })
          .catch(err => {
            if (err) {
              swal("Oh noes!", "The AJAX request failed!", "error");
            } else {
              swal.stopLoading();
              swal.close();
            }
          });
    }
    return (
        <center>
            <div>
                <button className="App" onClick={movies}>
                    Click to see the movie
                </button>
                
            </div>
        </center>
    )
}

export default ButtonMovies
