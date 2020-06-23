/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../index.css";
import { HashLink } from "react-router-hash-link";


function Footer(){
  return(
    <>

    <footer className="footer-distributed">

      <div className="footer-right">

        

      </div>

      <div className="footer-left">

        <p className="footer-links">
            <HashLink to="/about">
              <a >About</a>
            </HashLink>
         
            <HashLink to="/">
          <a >Blog</a>
            </HashLink>
        </p>

        <p>A simple Footer</p>
      </div>

    </footer>
    </>
  )
}


export default Footer