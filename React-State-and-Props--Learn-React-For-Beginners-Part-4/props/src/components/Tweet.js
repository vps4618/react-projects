import React from "react";
import './Tweet.css';

const Tweet = (props) => (
  <div className="tweet">
    <h3>{props.name}</h3>
    <p>{props.tweet}</p>
  </div>
);

export default Tweet;