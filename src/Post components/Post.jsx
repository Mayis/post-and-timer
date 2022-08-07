import React, { Component } from "react";

export default class Post extends Component {
  render() {
    return (
      <div style={{ marginBottom: "20px" }}>
        <h4>{this.props.title}</h4>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
