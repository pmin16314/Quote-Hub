import axios from "axios";
import React, { Component } from "react";
import "./App.css";

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
        <div className='card'>
          <h1 className='adviceHeading'>{advice}</h1>
          <button onClick={this.fetchAdvice}>
            <span>Give ne quote!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
