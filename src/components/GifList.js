import React from "react";
import data from "../data/gifsdata";
import Gif from "./Gif";
const GifList = () => {
  return (
    <div className="gif-card">
      {data.map((gif) => {
        return <Gif key={gif.id} gif={gif} />;
      })}
    </div>
  );
};

export default GifList;
