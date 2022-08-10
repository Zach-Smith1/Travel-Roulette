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
      current: null,
      list: []
    }
  }

  randomCity = (e) => {
  var num = Math.floor(Math.random() * 10) + 1;
  var latval = dest.Cities[num].lat;
  var lngval = dest.Cities[num].lng;
  var city = dest.Cities[num].name;
  setTimeout(()=> {this.setState({
      lat: latval,
      lng: lngval,
      zoom: 11,
      current: city
    })}, 1000);
    document.body.classList.toggle("top", false);
    document.body.classList.toggle("dark");
    document.body.classList.toggle("fade");
    setTimeout(()=> {document.getElementsByClassName('start')[0].innerHTML = ''}, 2000);
    setTimeout(() => {document.body.classList.toggle("dark");}, 2500);
    setTimeout(() => {document.body.classList.toggle("fade");}, 4500);
    setTimeout(()=> {document.body.classList.toggle("top", true)}, 3500);
  }

  randomRegion = (e) => {
    var num = Math.floor(Math.random() * 22) + 1;
    var latval = dest.Regions[num].lat;
    var lngval = dest.Regions[num].lng;
    var area = dest.Regions[num].name;
    setTimeout(()=> {this.setState({
        lat: latval,
        lng: lngval,
        zoom: 8,
        current: area
      })}, 1000);
      document.body.classList.toggle("top", false);
      document.body.classList.toggle("dark");
      document.body.classList.toggle("fade");
      setTimeout(()=> {document.getElementsByClassName('start')[0].innerHTML = ''}, 2000);
      setTimeout(() => {document.body.classList.toggle("dark");}, 2500);
      setTimeout(() => {document.body.classList.toggle("fade");}, 4500);
      setTimeout(()=> {document.body.classList.toggle("top", true)}, 3500);
    }

  addPlace = (e) => {
    var place = this.state.current;
    var placeArray = this.state.list;
    placeArray.push(place);
    this.setState({
      list: placeArray
    })
  }

  clear = (e) => {
    this.setState({
      list: []
    })
  }

  toggle = (e) => {
    document.body.classList.toggle("dark");
  }

  listMaker = () => {
    var resultList = [];
    var list = this.state.list;
    list.forEach((place) => {
      resultList.push(<span id='listItem'>{place}<br/></span>)
    });
    return <div>{resultList}</div>;
  }

  anywhere = (e) => {
    var coinFlip = Math.random();
    if (coinFlip > .5) {
      this.randomCity();
    } else {
      this.randomRegion();
    }
  }

  render() {
    if (this.state.current && this.state.list.indexOf(this.state.current) === - 1) {
      var addIt = <button id='button2' onClick={this.addPlace}>Add to Itineray!</button>;
    } else {
      var addIt = null;
    }
    if (this.state.list.length > 0) {
      var bookIt = <a href='https://www.google.com/travel/flights'> Book it! </a>;
      var clear = <button id='clear' onClick={this.clear}>Clear Itineray</button>;
    } else {
      var bookIt = null;
      var clear = null;
    }
    return (
      <div className='mainbox'>
        <h1 className="start">
          Travel Roulette
        </h1>
        <div className='rightbar'>
        <button id='button1' onClick={this.randomCity}> Choose a City </button><br/>
          <div>Top City Destinatinations<br/> from <a href='https://www.lonelyplanet.com/best-in-travel/cities'> Lonely Planet </a><br/>
          </div>
        <button id='button1' onClick={this.randomRegion}> Choose a Region </button><br/>
        <div>Top Nature Destinatinations<br/> from <a href='https://www.nathab.com/blog/where-to-travel-in-2022/'> NatHab </a>
        <br/></div>
        <button id='button1' onClick={this.anywhere}> Choose Anywhere! </button><br/>
        <span id='clear'>{clear}</span>
        </div>
        <div id='location'>{this.state.current}<br/>
        <span>{addIt}</span>
        </div>
        <div className='mapbox'>
          <div className='map'>
          <MyComponent lat={this.state.lat} lng={this.state.lng} zoom={this.state.zoom}/>
          </div>
          </div>
          <div className='farRight'>
            <div className='itineray'>Itinerary:<br/>
            {this.listMaker()}
            <span><br/>{bookIt}</span>
            </div>
            <button id='toggle' onClick={this.toggle}>Enjoy the View</button>
          </div>
      </div>
    );
  }
}

export default App;