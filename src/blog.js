import React, { Component,lazy,Suspense } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const ArticlePreview = lazy(()=>import('./components/articlePreview'))
export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1/sites/samwcoding.wordpress.com/posts"
      )
      .then(res => {
        console.log(res.data.posts);
        this.setState({ posts: res.data.posts });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="blog">
        <div className="anchor" id="blog" />
        <h1 className="sectionTitle">Articles</h1>
        {this.state.posts && this.state.posts.map(post =>
          <Suspense fallback={<Skeleton count={5} />}>
            <ArticlePreview post={post} />
          </Suspense>
        )}
      </div>
    );
  }
}
