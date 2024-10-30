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
                  src="Assets/naishRaw.png"
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
                  src="Assets/charlizeRaw.png"
                  alt="About Us Link"
                ></img>
              </NavLink>
            </div>
          </div>
          <div className="circle-box">
            <div className="circle-img">
              <NavLink to="/about">
                <img
                  className="tj-logo"
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
                  src="Assets/mikRaw.png"
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
                  src="Assets/jackRaw.png"
                  alt="About Us Link"
                ></img>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="title-links">
          <h2>Read About Us!</h2>
          <h2 className="mobile-hide">Watch Us</h2>
        </div>
        <div className="links-grid">
          <div className="one">
            <div className="news-rectangle">
              <img
                className="news-img"
                src="Assets/seanSpike.png"
                alt="news Link"
              ></img>
              <div className="text-link">
                <p>
                  This week Team Jacob defeated the Crowns. It was a tough game,
                  but hardcore determination enabled them to gain this win.
                  <br />
                </p>
                <NavLink to="/news">Click here to learn more</NavLink>
              </div>
            </div>
          </div>
          <div>
            <h2 className="desktop-hide">Watch Us</h2>
          </div>

          <div className="two">
            <video controls className="videoEric">
              <source src="/Assets/ericSpike.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="h2-title">
          <h1>Learn More About Us!</h1>
        </div>
        {/* Page Links */}
        <div className="circle-grid">
          <div className="circle-box">
            <div className="circle-img">
              <NavLink to="/news">
                <h2 className="link">News</h2>
                <img
                  className="circle"
                  src="Assets/teamPhoto.png"
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
                  className="tj-logo"
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
                  src="Assets/netShot3.png"
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
                  src="Assets/moves.png"
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
