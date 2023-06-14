import React from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import GifList from "./components/GifList";

function App() {

  return (
    <div className="App">
      <h1>Welcome to the GIFS loader</h1>
      <SearchForm />
      <GifList /> 
    </div>
  );
}

export default App;

// api_key=r0IZOEjRwBLcp6GkmpXGk8r0CAbmM16h
// https://api.giphy.com/v1/gifs/search
// https://api.giphy.com/v1/gifs/search?api_key=r0IZOEjRwBLcp6GkmpXGk8r0CAbmM16h&q=dogs
