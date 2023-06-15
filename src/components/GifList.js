import React from "react";
import Gif from "./Gif";
import { connect } from "react-redux";
import { getGifs } from "../actions";

const GifList = (props) => {
const { data } = props

  return (
    <div className="gif-card">
      {data.map((gif) => {
        return <Gif key={gif.id} gif={gif} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
    return ({
        data: state.data
    })
}

export default connect(mapStateToProps, {getGifs})(GifList);
