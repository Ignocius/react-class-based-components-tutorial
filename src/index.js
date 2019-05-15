import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     lat: null,
  //     error: ''
  //   }
  // }

  //alternate state declare

  state = { lat: null, error: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords }) => this.setState({ lat: coords.latitude, error: '' }),
      ({ message }) => this.setState({ error: message })
    )
  }

  render() {
    return (
      <div>
        { this.state.error || this.state.lat ?
          this.state.error ? 
            <h3>An error Occured, error type: {this.state.error}</h3>
            :
            <div>LatitudeL: {this.state.lat ? this.state.lat : 40} </div>
          : <div>Loading</div>
        }
      </div>
    );
  } 
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);  