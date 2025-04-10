import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Eric Kimani",
        bio: "A passionate developer who loves coding and coffee.",
        imgSrc:
          "https://erickimani.netlify.app/pictures/my_pic-removebg-preview.png",
        profession: "Software Engineer",
      },
      shows: false,
      mountedTime: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App" style={{ padding: "2rem", textAlign: "center" }}>
        <h1>React Class Component Checkpoint</h1>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div style={{ marginTop: "1rem" }}>
            <img src={person.imgSrc} alt="Profile" />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h4>{person.profession}</h4>
          </div>
        )}

        <p>Component mounted for: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
