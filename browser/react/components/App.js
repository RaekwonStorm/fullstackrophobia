'use strict';

import React from 'react';
import Navbar from './Navbar';

export default ({children}) => (
      <div id="main" className="container-fluid">
        <Navbar/>
        <h1>Fullstackrophobia</h1>
          { children }
      </div>

)
