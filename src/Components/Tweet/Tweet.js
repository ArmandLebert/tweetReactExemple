import React, { Component } from 'react';
import "./Tweet.css";
import Image from "./Image/Image";
import Author from "./Author/Author";
import Contenu from "./Contenu/Contenu";
import Time from "./Time/Time";

class Tweet extends Component {
  render() {

    // const author = this.props.tweetData.author;
    // const content = this.props.tweetData.content;
    // const image = this.props.tweetData.image; 

    // SAME
    const { author, content, image } = this.props.tweetData;

    return(
      <div className="tweet-container">
        <Image image={image}/>
        <Author author={author} />
        <Contenu content={content}/>
        <Time />
      </div>
    )
  }
}

export default Tweet;