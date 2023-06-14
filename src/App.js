import React from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import GifList from "./components/GifList";
import { connect } from "react-redux";

function App(props) {
  const { loading, error } = props

  

  return (
    <div className="App">
      <h1>Welcome to the GIFS loader</h1>

      <SearchForm />
      {(error !== '') && <h3>{error}</h3>}
      {loading ? <h3>We are loading</h3> : <GifList />}
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    loading: state.loading,
    error: state.error
  })
}

export default connect(mapStateToProps, {})(App);

// api_key=r0IZOEjRwBLcp6GkmpXGk8r0CAbmM16h
// https://api.giphy.com/v1/gifs/search
// https://api.giphy.com/v1/gifs/search?api_key=r0IZOEjRwBLcp6GkmpXGk8r0CAbmM16h&q=dogs

