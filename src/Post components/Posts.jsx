import React, { Component } from "react";
import Post from "./Post";
import "../css/post/posts.css";
export default class Posts extends Component {
  render() {
    const { info } = this.props;
    return (
      <div style={{ margin: "25px 0px 0px 150px" }}>
        {info.map((post, i) => (
          <Post key={`key${i}`} title={post.title} content={post.content} />
        ))}
      </div>
    );
  }
}
