import { NavLink } from "react-router-dom";
import "../styles/news.css";
export default function News() {
  return (
    <div className="main-container">
      <div className="img-container">
        <img
          className="img-banner"
          src="Assets/teamPhoto.png"
          alt="Eric Block"
        ></img>
      </div>
      <h1>News</h1>
      <div className="news-page">
        <div className="news-form">
          <h3>Register to our Weekly News Letters! </h3>
          <div className="form-news-box">
            <form onSubmit={search} className="form-register">
              <div className="text-input">
                <label>Name: </label>
                <input name="queryName" className="form-input" />

                <label>Email: </label>
                <input name="queryEmail" className="form-input" />
              </div>
              <button type="submit" className="btn-submit">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="letter-box">
          <div className="letter-rectangle">
            <img
              className="letter-img"
              src="Assets/kateFans.png"
              alt="Eric Block"
            ></img>
          </div>
          <div className="news-text-sec">
            <h3>Week 3 - 14/09/2024</h3>
            <p>
              It was a huge week for Team Jacob. Beginning they had an awesome
              cheer squad that was there to support kate on her 30th game with
              the team! The team versed Pancakes who where not made with self
              raising flour, Team Jacob won all three sets..
            </p>
            <NavLink to="/letter">Keep reading...</NavLink>
          </div>
        </div>
        <div className="letter-box">
          <div className="letter-rectangle">
            <img
              className="letter-img"
              src="Assets/seanSpike.png"
              alt="Eric Block"
            ></img>
          </div>
          <div className="news-text-sec">
            <h3>Week 2 - 09/09/2024</h3>
            <p>
              WOW WOW WOW. A game of rage, power, and envy. It was unfortunate
              week for Team Jacob with an unfortunate loss. With only 5 players
              on the court they definitely put up a fight but ultimately the
              Spike and Gang came out with a win by 2-3 sets.
            </p>
            <NavLink to="/letter">Keep reading...</NavLink>
          </div>
        </div>
        <div className="letter-box">
          <div className="letter-rectangle">
            <img
              className="letter-img"
              src="Assets/stance.png"
              alt="Eric Block"
            ></img>
          </div>
          <div className="news-text-sec">
            <h3>Week 1 - 02/09/2024</h3>
            <p>
              Team Jacob wins again! It was a tight game this week, but of
              course it was a full moon and the power was on their side. This
              week they versed the Mighty Warriors, who have a 88% win rate at
              the moment. Set 1 This set the team came in with utter sheer
              determination with Kate hitting two massive spikes that almost
              blew the Warriors away.
            </p>
            <NavLink to="/letter">Keep reading...</NavLink>
          </div>
        </div>
        <h1>Photo Gallary</h1>
        <div className="photo-block">
          <div className="photo-container">
            <div className="img-1">
              <img
                className="letter-img"
                src="Assets/girls.png"
                alt="the girls"
              ></img>
            </div>
            <div className="img-2">
              <img
                className="letter-img"
                src="Assets/kateFans.png"
                alt="Kate with her fans"
              ></img>
            </div>
            <div className="img-3">
              <img
                className="letter-img"
                src="Assets/seanBlock.png"
                alt="Sean Block"
              ></img>
            </div>
            <div className="img-4">
              <img
                className="letter-img"
                src="Assets/Stance.png"
                alt="Eric Block"
              ></img>
            </div>
          </div>
          <div className="photo-container">
            <div className="img-1">
              <img
                className="letter-img"
                src="Assets/serving.png"
                alt="Eric Block"
              ></img>
            </div>
            <div className="img-2">
              <img
                className="letter-img"
                src="Assets/teamMoment.png"
                alt="Eric Block"
              ></img>
            </div>
            <div className="img-3">
              <img
                className="letter-img"
                src="Assets/seanSpike.png"
                alt="Sean spiking the volleyball"
              ></img>
            </div>
            <div className="img-4">
              <img
                className="letter-img"
                src="Assets/netShot.png"
                alt="Eric Block"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function search(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const queryEmail = formData.get("queryEmail");
  const queryName = formData.get("queryName");

  if (!queryEmail || !queryName) {
    alert(`You have to input into all fields`);
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(queryEmail)) {
    alert(`Email must be in correct format`);
  } else {
    alert(
      `Thank you '${queryName}. \nYou have successfully signed up for News letters using the email: '${queryEmail}'`
    );
  }
}
