import { NavLink } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section-image">
          <div>
            <h3>About Us</h3>
            <ul>
              <NavLink to="/about">
                <ol>Team</ol>
              </NavLink>
              <NavLink to="/NotFound">
                <ol>Team Profile</ol>
              </NavLink>
              <NavLink to="/NotFound">
                <ol>Coaching</ol>
              </NavLink>
              <NavLink to="/NotFound">
                <ol>Team Timeline</ol>
              </NavLink>
              <NavLink to="/NotFound">
                <ol>
                  <span className="mdi--instagram"></span>
                </ol>
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <div className="sign-up-email">
            <p>Enter email to sign up for weekly news letters:</p>
            <form onSubmit={search} className="form-email">
              <div>
                <label>Email: </label>
                <input name="queryEmail" className="email-input" />
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </form>
            <p className="email-text">email us: teamjacob@volleyball.com.au </p>
          </div>
        </div>
        <div className="footer-section-2">
          <div>
            <h3>Site Map</h3>
            <ul>
              <NavLink to="/about">
                <ol>About Us </ol>
              </NavLink>
              <NavLink to="/news">
                <ol>News Letters</ol>
              </NavLink>
              <NavLink to="/rosters">
                <ol>Rosters</ol>
              </NavLink>
              <NavLink to="/NotFound">
                <ol>Results</ol>
              </NavLink>
              <NavLink to="/NotFound">
                <ol>FAQs </ol>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
      <div></div>
    </footer>
  );
}
function search(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const email = formData.get("queryEmail");

  if (!email) {
    alert("Please enter an email.");
  } else {
    alert(`Thank you! You've subscribed with ${email}.`);
  }
}
