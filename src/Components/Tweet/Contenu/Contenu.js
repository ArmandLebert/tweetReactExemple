import React, { Component } from 'react';
import './Contenu.css';

class Contenu extends Component {
  render() {
    const content = this.props.content;
    // PAREIL QUE
    // const { content } = this.props;
    return (
      <div className="tweet-content-container">
        <p>{content}</p>
      </div>
    );
  }
}

export default Contenu;
