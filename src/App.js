import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) { // construtor 
    console.log("COMPONENT OBJECT INSTANTIATED")
    super(props); // calling base class contructor to initialize
    this.state = {}
  }

  componentDidMount() { // function overriding of base class 
    console.log("MOUNTED", this.state);
  }

  componentDidUpdate() {
    console.log("DID UPDATE", this.state);
  }

  render() { // function overriding
    console.log("RENDER CALLED");
    return (
      <>
        <h1>{this.state.name}</h1>
        <button
          onClick={(e) => {
            this.setState({ "name": "sid" });
          }}
        >
          CLICK
        </button>
      </>
    )
  }
}

export default App;
