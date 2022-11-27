import React from "react";

class Clock extends React.Component {
    constructor(props) {
        console.log("CLOCK CONSTRUCTOR");
        super(props);
        this.state = { date: new Date() };
    }


    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        console.log("CLOCK MOUNTED");
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentDidUpdate() {
        console.log("CLOCK DID UPDATE", this.state);
    }

    componentWillUnmount() {
        console.log("CLOCK UNMOUNTED");
        clearInterval(this.timerID);
    }

    render() {
        console.log("CLOCK RENDER");
        return <h1>{this.state.date.toLocaleTimeString()}</h1>
    }
}

export default Clock;