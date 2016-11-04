'use strict';

import React from 'react';
import {Link} from 'react-router';

export default (props) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">

      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

      </div>


      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

        <ul className="nav navbar-nav">
          <li>
           <Link to="/main" activeClassName="active">Maybe go home?</Link>
          </li>
          <li className="">
            <Link to='/something' activeClassName="active">Link to something</Link>
          </li>
          <li>
            <Link to='/whatever' activeClassName="active">Link to something</Link>
          </li>
        </ul>

        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Link could go here</a></li>
        </ul>
      </div>
    </div>
  </nav>
)
