import React from 'react'
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="#">Rutika Sorthiya</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
      <li class="nav-item">
        <Link class="nav-link" to="/home">Home</Link>
      </li>
      <li class="nav-item">
          <Link class="nav-link" to="/controlledform">Sign up</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/post">Posts</Link>
      </li>
    
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Nav
