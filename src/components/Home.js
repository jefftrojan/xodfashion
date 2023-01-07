import React from "react";
import './Home.css'
import logo from "../img/logo.png";
const Home = () => {
  return (
    <div className="body">
      <div className="banner">
        <div className="nav_bar">
          <div>
            <img src={logo} alt="" />

            <nav id="list">
                <ul>
                    <li> Home</li>
                    <li> Collections</li>
                    <li>About</li>
                </ul>
            </nav>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
