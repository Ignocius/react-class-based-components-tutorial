import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

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

  renderContent() {
    let renderElement
    this.state.error || this.state.lat ?
      this.state.error ? 
      renderElement = <h3>An error Occured, error type: {this.state.error}</h3>
      :
      renderElement = <div>{this.state.lat ? <SeasonDisplay lat={this.state.lat} /> : 40} </div>
    : renderElement = <Loader message="GeoLocation is loading" />
    return renderElement
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  } 
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);  