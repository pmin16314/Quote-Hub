import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import logo from "./Images/logos-01.svg";

class App extends Component {
  state = { advice: "" };

  componentDidMount() {
    console.log("Landed");
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className='App'>
        <img src={logo} className='logo' alt='logo'></img>
        <div className='card'>
          <h1 className='adviceHeading'>{advice}</h1>
          <button onClick={this.fetchAdvice}>
            <span>Give ne quote!</span>
          </button>
        </div>
        <div className='footer'>Created by Panchana Madara &#169;</div>
      </div>
    );
  }
}

export default App;
