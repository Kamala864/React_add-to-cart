import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { BsFillBagFill } from "react-icons/bs";
const Nav = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer)
    return (
        <div>
  <header>
  {/* TOP HEADER */}
  <div id="top-header">
    <div className="container">
      <ul className="header-links pull-left">
        <li><a href="#"><i className="fa fa-phone" /> +021-95-51-84</a></li>
        <li><a href="#"><i className="fa fa-envelope-o" /> email@email.com</a></li>
        <li><a href="#"><i className="fa fa-map-marker" /> 1734 Stonecoal Road</a></li>
      </ul>
      <ul className="header-links pull-right">
        <li><a href="#"><i className="fa fa-dollar" /> USD</a></li>
        <li><a href="#"><i className="fa fa-user-o" /> My Account</a></li>
      </ul>
    </div>
  </div>
  {/* /TOP HEADER */}
  {/* MAIN HEADER */}
  <div id="header">
    {/* container */}
    <div className="container">
      {/* row */}
      <div className="row">
        {/* LOGO */}
        <div className="col-md-3">
          <div className="header-logo">
            <a href="#" className="logo">
              <img src="./img/logo.png" alt />
            </a>
          </div>
        </div>
        {/* /LOGO */}
        {/* SEARCH BAR */}
        <div className="col-md-6">
          <div className="header-search">
            <form>
              <select className="input-select">
                <option value={0}>All Categories</option>
                <option value={1}>Category 01</option>
                <option value={1}>Category 02</option>
              </select>
              <input className="input" placeholder="Search here" />
              <button className="search-btn">Search</button>
            </form>
          </div>
        </div>
        {/* /SEARCH BAR */}
        {/* ACCOUNT */}
        <div className="col-md-3 clearfix">
          <div className="header-ctn">
            
            {/* Cart */}
            <div className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
              <Link to="/cart">
    //                         <div className="basket">
    //                          <BsFillBagFill className="cart-icon" />
    // <span>{totalQuantities}</span>
    //                         </div>
    //                     </Link>
              </a>
              
            </div>
            {/* /Cart */}
            {/* Menu Toogle */}
            <div className="menu-toggle">
              <a href="#">
                <i className="fa fa-bars" />
                <span>Menu</span>
              </a>
            </div>
            {/* /Menu Toogle */}
          </div>
        </div>
        {/* /ACCOUNT */}
      </div>
      {/* row */}
    </div>
    {/* container */}
  </div>
  {/* /MAIN HEADER */}
</header>



     
    </div>

   
    )
}

export default Nav
