import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      error: ''
    }

    window.navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        console.log(coords)
        this.setState({ lat: coords.latitude, error: '' })
      },
      ({ message }) => this.setState({ error: message })
    );
  };



  render() {
    return (
      <div>
        { this.state.error ? 
          <h3>An error Occured, error type: {this.state.error}</h3>
          :
          <div>LatitudeL: {this.state.lat ? this.state.lat : 40} </div>
        }
      </div>
    );
  } 
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);  