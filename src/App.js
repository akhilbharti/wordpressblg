import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import Nav from "./components/nav";
import Footer from './components/footer'

import Blog from "./blog";
import About from './about'
import Article from "./components/article";
function App() {

  return (
    <div>
      <BrowserRouter>
        <div id="center-stripe">
          <Nav />
          <Route
            exact
            path={"/"}
            component={Blog}
          />
          <Route
            exact
            path={"/about"}
            component={About}
          />

          <Route
            exact
            path={"/blog/:id"}
            component={Article}
          />
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
