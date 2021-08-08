import React, { useState, useEffect } from 'react';

function Effect() {
  const [count, setCount] = useState(0);
  //const [items, setItems] = useState();

 // window.innerWidth
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${count}`)
    .then(response => response.json())
    .then(json => console.log(json))
  },[count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount("photos")}>
        Click me
      </button>
    </div>
    
  
  );
}

export default Effect
