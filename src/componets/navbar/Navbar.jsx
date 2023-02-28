import React, { useState } from "react";
import "./navbar.css";
import logoscv from "../../assets/logo-full.svg";
import { Link } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';
const Navbar = () => {
  const navitems = [
    {
      name: "home",
      pathname:'/home'
    },
    {
      name: "About",
      pathname:'/about'
    },
    {
      name: "Services",
      pathname:'/services'
    },
    {
      name: "Contact",
      pathname:'/contact',
    },
  ];
  const [navBar, setNavbar] = useState(navitems);

  return (
    <div className="container">
      <div className="navbar">
        <div className="svg-imge">
           <img src={logoscv}  className="imge"/>
        </div>
        <div className="main-nav">
          <ul>
            {navBar.map((item, index) => {
              return <li key={index} className="navlink" to="/">{item.name}</li>;
            })}
          </ul>
        </div>
        <div>
          <button className="login-btn"><FaBeer/>Login</button>
        </div>
      </div>

      <div cal>

      </div>
    </div>
  );
};

export default Navbar;
