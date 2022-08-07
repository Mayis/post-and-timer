import React, { Component } from "react";
import Form from "./Form";
import Posts from "./Posts";
import "../css/post/posts.css";
export default class Main extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      info: [],
    };
    this.getInfo = this.getInfo.bind(this);
  }
  getInfo(info) {
    this.setState({ info: [info, ...this.state.info] });
  }
  render() {
    const { info } = this.state;

    return (
      <div className="mainDiv">
        <Form btnClick={this.getInfo} />
        <Posts info={info} />
      </div>
    );
  }
}
