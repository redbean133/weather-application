import React from "react";
import axios from "axios";
import Loading from "./Loading";
import Weather from "./Weather";

const API_KEY = "e45ecdc3bb276b3b0525f9b3d20a9d4a"

export default class App extends React.Component {
  state = {
      isLoading: true
  };

  render() {
    const {isLoading, temp, humidity, speed, condition, name} = this.state;
    return (
      isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition} location={name} humidity={humidity} windSpeed={speed}/>
    );
  }

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: {temp},
        main: {humidity},
        wind: {speed},
        weather,
        name
      }
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

    this.setState({
      isLoading: false,
      temp,
      humidity,
      speed,
      condition: weather[0].main,
      name,
    })
  };

  componentDidMount() {
    const latitude = "21.030653"
    const longtitude = "105.847130"
    this.getWeather(latitude, longtitude).then((res) => {})
  }
}