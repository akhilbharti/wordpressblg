import React, { Component } from "react";
import axios from "axios";
import { HashLink } from "react-router-hash-link";
import Skeleton from 'react-loading-skeleton';


export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    
    };
  }

  removeUnicode(string) {
    if (string.indexOf("&#8217;") >= 0) {
      return this.removeUnicode(string.replace("&#8217;", "'"));
    } else {
      return string;
    }
  }

  componentDidMount() {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1/sites/samwcoding.wordpress.com/posts/" +
          this.props.match.params.id
      )
      .then(res => {
        this.setState({ 
        
          post: res.data });
       
      })
      .catch(error => console.log(error));
  }


  render() {
    if (this.state.post) {
      return (
        <div className="blog">
          <div className="article">
            <HashLink to={"/"}>
              <button className="btn">Go Back</button>
            </HashLink>  
            <h1 className="text-center">{this.state.post.title || <Skeleton />}</h1>
            {this.state.post.content?
              (<div
                className="content"
                dangerouslySetInnerHTML={{ __html: this.state.post.content }}
              />) : (
                <Skeleton height={100} count={5}/>
              )
            }
            </div>
        </div>
      );
    } else {
      return (
        null
      );
    }
  }
}
