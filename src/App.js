import React, { Component } from 'react';
import Tweet from "./Components/Tweet/Tweet";

// MES DONNEES

const tweet1 = {
  author: {
    prenom: "Loic",
    nom: "B."
  },
  content: "C'est mon tweet, et ceci est mon contenu",
  image: {
    src: "http://www.digital-league.org/wp-content/uploads/2018/02/logo_ece_paris-2-380x230-c-default.png",
    alt: "ECE PARIS"
  }
}

const tweet2 = {
  author: {
    prenom: "Bernard",
    nom: "N."
  },
  content: "C'est mon tweet, et ceci est mon contenu",
  image: {
    src: "https://img.cutenesscdn.com/640/clsd/getty/fb24f58bd5ef463590a59cc961686ef0",
    alt: "Chat "
  }
}

const tweet3 = {
  author:  {
    prenom: "Henry",
    nom: "H."
  },
  content: "C'est mon tweet, et ceci est mon contenu",
  image: {
    src: "https://i.imgur.com/NPto19s.jpg",
    alt: "Chien"
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h2>MES TWEETS</h2>
        <Tweet tweetData={tweet1} />
        <Tweet tweetData={tweet2} />
        <Tweet tweetData={tweet3} />
      </div>
    );
  }
}

export default App;
