import React from "react";

import Titles from "./component/Titles";

import Form from "./component/Form";

import Weather from "./component/Weather";

const API_KEY = "a6c6a3a831b0736f6f433d06084d72b5";


class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
    const data = await api_call.json();
    console.log(data);
  }


  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>);
  }
};


export default App;