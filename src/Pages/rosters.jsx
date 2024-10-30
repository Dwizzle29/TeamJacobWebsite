import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "../styles/rosters.css";
const RosterItem = ({ round, date }) => (
  <div className="roster-item">
    <NavLink to="/" className="round-text">
      {round}
    </NavLink>
    <NavLink to="/" className="date-text">
      {date}
    </NavLink>
    <NavLink to="/weekRoster" className="text-roster">
      Team Roster
    </NavLink>
  </div>
);

export default function Rosters() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="main-container">
      <div className="img-container">
        <img
          className="img-banner"
          src="Assets/charlizeSet.png"
          alt="charlize set"
        />
      </div>
      <h1>Rosters</h1>
      <div className="roster-main">
        <h3>League - Team Jacob</h3>
        <div className="roster-grid">
          <RosterItem round="Round 1" date="06/08/2024" />
          <RosterItem round="Round 2" date="13/08/2024" />
          <RosterItem round="Round 3" date="20/08/2024" />
          <RosterItem round="Round 4" date="27/08/2024" />
          <RosterItem round="Round 5" date="03/09/2024" />
        </div>

        {open && (
          <div id="demo" className={`collapse in`}>
            <div className="roster-grid">
              <RosterItem round="Round 6" date="06/09/2024" />
              <RosterItem round="Round 7" date="10/09/2024" />
              <RosterItem round="Round 8" date="17/09/2024" />
              <RosterItem round="Round 9" date="24/09/2024" />
              <RosterItem round="Round 10" date="01/10/2024" />
            </div>
          </div>
        )}
        <button className="btn-show" onClick={toggle}>
          {open ? "Show Less.." : "Show More.."}
        </button>
      </div>
      <div className="form-section">
        <div className="info-box">
          <h3>More Information</h3>
          <div className="info-text">
            <div className="text">
              <p>
                Select a league in the form for updates on your weekly game
                times!
              </p>
              <p>
                Also optionally chose to sign up for weekly news letters about
                your leagues past game.
              </p>
            </div>
          </div>
        </div>
        <div className="info-box-2">
          <h3>League Roster Form</h3>
          <div className="info-text-2">
            <form onSubmit={search} className="form-register">
              <div className="text-input">
                <label>League: </label>
                <input
                  name="query"
                  className="form-input"
                  value="Team Jacob"
                  disabled
                />

                <label>Name: </label>
                <input name="queryName" className="form-input" />

                <label>Phone Number: </label>
                <input name="queryPhone" className="form-input" />
              </div>

              <label>Sign up for weekly news result letters:</label>
              {/* <NavLink to="/NotFound">Learn More</NavLink> */}
              <div className="radio-button">
                <div className="radio-answer">
                  <input
                    type="radio"
                    name="queryRadio"
                    className="radio-input"
                    value="Yes"
                    id="1"
                  />{" "}
                  <label>Yes</label>
                </div>
                <div className="radio-answer">
                  <input
                    type="radio"
                    name="queryRadio"
                    className="radio-input"
                    value="No"
                  />

                  <label>No</label>
                </div>
              </div>
              <button type="submit" className="btn-show">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
function search(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const query = formData.get("query");
  const queryName = formData.get("queryName");
  const queryPhone = formData.get("queryPhone");
  const queryRadio = formData.get("queryRadio");
  if (
    query === "" ||
    queryName === "" ||
    queryPhone === "" ||
    queryRadio === ""
  ) {
    alert(`You have to input into all fields`);
  } else if (!/^\+[1-9]\d{1,14}$/.test(queryPhone)) {
    alert(`Phone number format must be eg. +1234567890`);
  } else if (queryRadio === "No") {
    alert(
      `Thank you '${queryName}. \nYou have successfully signed up for Rostering Messages using the number: '${queryPhone}'`
    );
  } else if (queryRadio === "Yes") {
    alert(
      `Thank you '${queryName}. \nYou have successfully signed up for News letters and Rostering Messages using the number: '${queryPhone}'`
    );
  }
}
