import React, { Component } from "react";
import axios from "axios";
import Form from "./components/Form";
import Result from "./components/Result";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
    };
  }

  searchGifs = (str) => {
    axios
      .get(`${process.env.REACT_APP_ENDPOINT}&limit=10&q=${str}`)
      .then((result) =>
        this.setState({
          gifs: result.data.results,
        })
      );
  };

  render() {
    return (
      <div className="App">
        <h1>Search a GIF</h1>
        <Form search={this.searchGifs} />
        <Result gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
