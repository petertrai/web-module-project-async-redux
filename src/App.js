import React from 'react';
import './App.css';
import data from './data/gifsdata'
function App() {
  return (
    <div className="App">
      <h1>Welcome to the GIFS loader</h1>
      <form>
    <input type='text'/><br/>
    <button>Search</button>
    </form>
    <div className="gif-card">
    {data.map(gif => {
      return( <div key={gif.id}>{gif.title}, {gif.url}</div>)
    })}
    
    </div>
    </div>
  );
}

export default App;

// api_key=r0IZOEjRwBLcp6GkmpXGk8r0CAbmM16h
// https://api.giphy.com/v1/gifs/search	
// https://api.giphy.com/v1/gifs/search?api_key=r0IZOEjRwBLcp6GkmpXGk8r0CAbmM16h&q=dogs