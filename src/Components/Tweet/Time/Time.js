import React, { Component } from 'react';
import './Time.css';

class Time extends Component {
  // Le constructor est appelé lors de l'initialisation du composant
  constructor(props) {
    // Obligatoire
    super(props);
    // on crée le state dans le constructor
    this.state = {
      date: new Date()
    };

    setInterval(this.updateTime, 5000); // Appel this.updateTime chaque 5000 milisecondes
  }

  updateTime = () => {
    // Update la propriété "date" du state avec la date actuel new Date()
    this.setState({
      date: new Date()
    });
  };

  render() {
    // Destructuration de l'object en ES6
    const { date } = this.state;
    return (
      <div id="time-container">
        <p>
          {date.getHours()} h {date.getMinutes()} m {date.getSeconds()} s
        </p>
        {/* Event onClick appel la fonction updateTime */}
        <button type="button" onClick={this.updateTime}>
          Actualise moi!
        </button>
      </div>
    );
  }
}

export default Time;
