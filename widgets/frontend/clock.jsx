import React from 'react';


class Clock extends React.Component {

  constructor(props){
    super(props);
    this.state = { date: new Date() };
  }

  tick() {
    this.setState({ date: new Date()});
  }

  componentDidMount() {
    this.intervalID =
    setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render(){
    return (
      <div className="clock-div">
        <h1 className="clock-header">Clock</h1>
         <section className="clock-body">
           <h2><span>Time:</span> {this.state.date.toLocaleTimeString()}</h2>
           <h2><span>Date:</span> {this.state.date.toLocaleDateString()}</h2>
         </section>
      </div>
    );
  }


}

export default Clock;
