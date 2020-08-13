import React from 'react';
import {Link} from "react-router-dom";
export default function Navbar() {
    return (
        <div>
         <nav className="navbar navbar-expand-xl navbar-light @@classList">
  <div className="container">
    {/* Brand */}
    <a className="navbar-brand d-xl-none" href="overview.html">
      Shopper.
    </a>
    {/* Toggler */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarClassicCollapse" aria-controls="navbarClassicCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    {/* Collapse */}
    <div className="collapse navbar-collapse" id="navbarClassicCollapse">
      {/* Nav */}
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Link className="nav-link"  to="/" >Home</Link>
        
         
        </li>
     
    
        <li className="nav-item dropdown">

          {/* Toggle */}
          <Link className="nav-link" data-toggle="dropdown" to="/product" >Shop</Link>
          {/* Menu */}
          <div className="dropdown-menu">
            <div className="card card-lg">
              <div className="card-body">
                <ul className="list-styled font-size-sm">
                  <li className="list-styled-item">
                    <Link className="list-styled-link" to="/product" >Product</Link>
                  </li>
               
                </ul>
              </div>
            </div>
          </div>
        </li>
       
        <li className="nav-item dropdown">
          {/* Toggle */}
          <Link className="nav-link" data-toggle="dropdown" to={"/about"}>About</Link>
        
        </li>
        <li className="nav-item dropdown">
          {/* Toggle */}
          <Link className="nav-link" data-toggle="dropdown" to={"/admin"}>Admin</Link>
        
        </li>
        
      </ul>
      {/* Brand */}
      <a className="navbar-brand mx-auto d-none d-xl-block" href="overview.html">
       <img src="https://lh3.googleusercontent.com/i0XYH_N8PYKQq5ceXGCYh8AVtUZFs7VJIl0Evr77liZPrjVOzSIiFvjSerL7Lzn0AzK4BQ=s170" height="50px"/>
      </a>
      {/* Nav */}
    
      <ul className="navbar-nav flex-row">
        {/* <li className="nav-item">
          <a className="nav-link" data-toggle="modal" href="#modalSearch">
            <i className="fe fe-search" />
          </a>
        </li> */}
        
        {/* <li className="nav-item ml-lg-n4">
          <a className="nav-link" href="account-orders.html">
            <i className="fe fe-user" />
          </a>
        </li> */}
        {/* <li className="nav-item ml-lg-n4">
          <a className="nav-link" href="account-wishlist.html">
            <i className="fe fe-heart" />
          </a>
        </li> */}
        <li className="nav-item ml-lg-n4">
          <a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
            <span data-cart-items={2}>
              <i className="fe fe-shopping-cart" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}