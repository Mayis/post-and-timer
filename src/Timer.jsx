import React from "react";
import "./css/timer/timer.css";
class Timer extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = { now: new Date(), r: 0, g: 0, b: 0 };

    setInterval(() => {
      this.setState({
        now: new Date(),
        r: Math.floor(Math.random() * 150 + 65),
        g: Math.floor(Math.random() * 100 + 50),
        b: Math.floor(Math.random() * 110 + 20),
      });
    }, 250);
  }

  render() {
    const now = this.state.now;
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return (
      <div
        className="timerDiv"
        style={{
          backgroundColor: `rgb(${this.state.r},${this.state.g},${this.state.b})`,
        }}
      >
        <p className="timerP" style={{ color: "black" }}>
          {hours}:{minutes}:{seconds}
        </p>
      </div>
    );
  }
}

export default Timer;
