import React from "react";

const Gif = (props) => {
    const { gif } = props
  return (
    <div>
      <h3>{gif.title}</h3>
      <p>{gif.username}</p>
      <img src={gif.images.original.url} alt={gif.title} /><br/>
      <a href={gif.url} target="_blank">Check it on GIPHY</a>
    </div>
  );
};

export default Gif
