import React from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {
  constructor(props) {
    super(props);
    // This is the the time we do dirct assignment to this.state
    this.state = {
      lat: null,
      errorMessage: "",
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setState() to set the state
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error : {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude : {this.state.lat}</div>
        }

        return <div>Loading!</div>
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
