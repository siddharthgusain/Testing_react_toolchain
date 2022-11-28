import React from 'react';
import './App.css';
import Clock from './components/Clock';

class App extends React.Component {
  constructor(props) { // construtor 
    console.log("APP COMPONENT OBJECT INSTANTIATED")
    super(props); // calling base class contructor to initialize
    this.state = {};
  }

  componentDidMount() { // function overriding of base class 
    console.log("APP MOUNTED", this.state);
  }

  componentDidUpdate() {
    console.log("APP DID UPDATE", this.state);
  }

  render() { // function overriding
    console.log("APP RENDER CALLED");
    return (
      <>
        {/* all these three are different and isolated Component  */}
        {/* All these could be considered as seperate instaces/objects of a class */}
        <Clock />
        <Clock />
        <Clock />
      </>
    )
  }
}

export default App;
