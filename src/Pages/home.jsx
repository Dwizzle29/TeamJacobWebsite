import React from "react";
import "../styles/home.css";
import { NavLink } from "react-router-dom";
const home = () => {
  return (
    <div className="main-container">
      <div className="img-container">
        <img
          className="img-banner"
          src="Assets/ericBlock.png"
          alt="Eric Block"
        ></img>
      </div>
      <div className="home-page">
        <h1>Welcome to Team Jacob!</h1>
        <p>
          Learn all about our volleyball team and come watch our games. Find
          more information- <NavLink to=" /rosters"> here</NavLink>
        </p>
        <div className="circle-grid">
          <div className="circle-box">
            <div className="circle-img">
              <NavLink to="/about">
                <img
                  className="circle"
                  src="Assets/teamPic.png"
                  alt="About Us Link"
                ></img>
              </NavLink>
            </div>
          </div>
          <div className="circle-box">
            <div className="circle-img">
              <NavLink to="/about">
                <img
                  className="circle"
                  src="Assets/teamPic.png"
                  alt="About Us Link"
                ></img>
              </NavLink>
            </div>
          </div>
          <div className="circle-box">
            <div className="circle-img">
              <NavLink to="/about">
                <img
                  className="circle"
                  src="Assets/tj-logo.png"
                  alt="About Us Link"
                ></img>
              </NavLink>
            </div>
          </div>
          <div className="circle-box">
            <div className="circle-img">
              <NavLink to="/about">
                <img
                  className="circle"
                  src="Assets/teamPic.png"
                  alt="About Us Link"
                ></img>
              </NavLink>
            </div>
          </div>
          <div className="circle-box">
            <div className="circle-img">
              <NavLink to="/about">
                <img
                  className="circle"
                  src="Assets/teamPic.png"
                  alt="About Us Link"
                ></img>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="links-grid">
          <div className="one">
            <h2>News letters</h2>
            <div className="news-rectangle">
              <img
                className="news-img"
                src="Assets/teamPic.png"
                alt="news Link"
              ></img>
              <p>
                This week Team Jacob defeated the Crowns. It was a tough game,
                but hardcore determination enabled them to gain this win.
                <br />
                <NavLink to="/news">Click here to learn more</NavLink>
              </p>
            </div>
          </div>
          <div className="two">
            <img
              className="rectangle"
              src="Assets/teamPic.png"
              alt="About Us Link"
            ></img>
          </div>
        </div>
        {/* Page Links */}
        <div className="circle-grid">
          <div className="circle-box">
            <div className="circle-img">
              <NavLink to="/news">
                <h2 className="link">News</h2>
                <img
                  className="circle"
                  src="Assets/teamPic.png"
                  alt="About Us Link"
                ></img>
              </NavLink>
            </div>
          </div>
          <div className="circle-box">
            <div className="circle-img">
              <NavLink to="/rosters">
                <h2 className="link">Rosters</h2>
                <img
                  className="circle"
                  src="Assets/teamPic.png"
                  alt="About Us Link"
                ></img>
              </NavLink>
            </div>
          </div>
          <div className="circle-box">
            <div className="circle-img">
              <NavLink to="/">
                <img
                  className="circle"
                  src="Assets/tj-logo.png"
                  alt="About Us Link"
                ></img>
              </NavLink>
            </div>
          </div>
          <div className="circle-box">
            <div className="circle-img">
              <NavLink to="/NotFound">
                <h2 className="link">Results</h2>
                <img
                  className="circle"
                  src="Assets/teamPic.png"
                  alt="About Us Link"
                ></img>
              </NavLink>
            </div>
          </div>
          <div className="circle-box">
            <div className="circle-img">
              <NavLink to="/NotFound">
                <h2 className="link">FAQS</h2>
                <img
                  className="circle"
                  src="Assets/teamPic.png"
                  alt="About Us Link"
                ></img>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
