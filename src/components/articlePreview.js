import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import Skeleton from 'react-loading-skeleton';


export default class ArticlePreview extends Component {
  removeUnicode(string) {
    if (string.indexOf("&#8217;") >= 0) {
      return this.removeUnicode(string.replace("&#8217;", "'"));
    } else {
      return string.replace("<p>", "").replace("[&hellip;]</p>", "...");
    }
  }

  render() {
    const excerpt = this.removeUnicode(this.props.post.excerpt);

    if (this.props.post) {
      return (
        <div className="article">
    
           <h1 className="text-center">{this.props.post.title|| <Skeleton/>}</h1>
          <a href={"/blog/" + this.props.post.ID} className="blackLink">
            <div className="content">{excerpt||<Skeleton count={5}/>}</div>
          </a>
          <HashLink to={"/blog/" + this.props.post.ID}>
            <button className="btn">Read More</button>
          </HashLink>
        </div>
      );
    } else {
      return null
    }
  }
}
