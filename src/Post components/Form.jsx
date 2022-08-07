import React, { Component } from "react";
import "../css/post/posts.css";
export default class Form extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      title: "",
      content: "",
    };
    this.inputChange = this.inputChange.bind(this);
    this.textareaChange = this.textareaChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }
  inputChange(e) {
    this.setState({ ...this.state, title: e.target.value });
  }
  textareaChange(e) {
    this.setState({ ...this.state, content: e.target.value });
  }
  buttonClick() {
    this.props.btnClick(this.state);
  }
  render() {
    const { title, content } = this.state;
    return (
      <div id="textForm">
        <form id="form">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={this.inputChange}
          />
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={this.textareaChange}
          />
        </form>
        <button onClick={this.buttonClick}>Submit</button>
      </div>
    );
  }
}
