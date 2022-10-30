import React from "react";
import Tweet from "./Tweet";

const Tweets = (props) => {
  const tweets = [
    { name: "deved", tweet: "react ughh, I need Alcohol" },
    { name: "traversy media", tweet: "Whats up guys, Im out taking a break" },
    {
      name: "webdevsimplified",
      tweet: "hey guyys Im simplified the web? guysss where are you ??",
    },
  ];
  return (
    <section>
      {// map through all tweets
        tweets.map(tweet => (
        <Tweet name={tweet.name} tweet={tweet.tweet}/>
      ))}
    </section>
  );
};

export default Tweets;
