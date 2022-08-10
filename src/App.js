import React from "react";
import MyComponent from "./Map4.js";
import dest from "./destinations.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 15,
      lng: 40,
      zoom: 2,
      current: null
    }
  }

  random = (e) => {
  var num = Math.floor(Math.random() * 10) + 1;
  var latval = dest.Cities[num].lat;
  var lngval = dest.Cities[num].lng;
  var city = dest.Cities[num].name;
    this.setState({
      lat: latval,
      lng: lngval,
      zoom: 11,
      current: city
    })
    console.log(this.state.current)
  }

  render() {
    return (
      <div className='mainbox'>
        <h1>
          Destination Roulette!
        </h1>
        <div className='rightbar' >Top 10 Cities to travel to from <a href='https://www.lonelyplanet.com/best-in-travel/cities'> Lonely Planet </a>
        <br/><button id='button1' onClick={this.random}> Where Should I Go?? </button>
        </div>
        <div id='location'>{this.state.current}</div>
        <div className='mapbox'>
          <MyComponent lat={this.state.lat} lng={this.state.lng} zoom={this.state.zoom}/>
          </div>

      </div>
    );
  }
}

export default App;