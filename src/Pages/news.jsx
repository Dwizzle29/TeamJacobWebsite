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
      <div className="info-2">
        <h3>Register to our Weekly News Letters! </h3>
        <div className="info-box">
          <form onSubmit={search} className="form-register">
            <div className="text-input">
              <label>Name: </label>
              <input name="queryName" className="form-input" />

              <label>Phone Number: </label>
              <input name="queryPhone" className="form-input" />
            </div>

            <label>Select Submit to sign up:</label>
            <button type="submit" className="btn-show">
              Submit
            </button>
          </form>
        </div>
      </div>
      <p>
        Team Jacob wins again! It was a tight game this week, but of course it
        was a full moon and the power was on their side. This week they versed
        the Mighty Warriors, who have a 88% win rate at the moment. Set 1 This
        set the team came in with utter sheer determination with Kate hitting
        two massive spikes that almost blew the Warriors away. Then in comes
        Eric and Sean with their powerful blocks that no spikes can even pass
        through. Set one finished up with a win for Team Jacob 25-15! Set 2 One
        might say that the Jacobs came in off a high after the last set, but
        sometimes the ball can drop… and in this case it did. A lot. Maybe a bit
        too giddy, and loss of concentration or thinking they had it in the bag
        because of the full moon. Unfortunately, this set was not a win, with
        two time outs called by Coach Grace there was slight come back but the
        Jacobs only got through with 12-25. Set 3 Coach Grace and assistant
        coach Sarah gave the team a talking to throughout the break, with a new
        line up and no hesitation the team was able to get up by 10 sets before
        the Warriors even had a chance. The power duo Kate and Naish were at it
        with their team work and setting one another up, and Charlize produced
        amazing consistency with her serves earing 15 points and no serves lost.
        Warriors were almost running off at this point with a set win again to
        Team Jacob 25-10. Set 4 Could it be the end, did the full moon work in
        the favour of the Jacobs or was Edward(warriors) going to come in and
        defeat them. Not a chance. Brandon and Gabe the two newbies on the team,
        who are a real dynamic duo, proved themselves in this set, sparkling one
        might say. Jack came in ending on the floor diving for far too many
        balls and ripped his pants.. It was almost like the team hadn’t already
        been playing for 40 minutes, they were on fire causing them to win
        25-15, taking the big win for this game. Overall the team learnt a
        couple of lessons, never trust the full moon and the power it gives, and
        two always listen to Coach Grace and Sarah. Until next week. WHAT TEAM?
      </p>
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
