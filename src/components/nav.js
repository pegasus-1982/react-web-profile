import React from 'react';


function Nav () {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="https://www.linkedin.com/in/luisdiegochavarria/">Luis Diego Chavarria</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="index.html">About</a>
        <a className="nav-link" href="portfolio.html">Portfolio</a>
        <a className="nav-link" href="contact.html">Contact</a>
        
      </div>
    </div>
  </nav>
      
  )
}

export default Nav;