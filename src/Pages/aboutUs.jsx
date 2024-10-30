import PlayerCard from "../components/playerCard.jsx";
import "../styles/about.css";
export default function About() {
  return (
    <div className="main-container">
      <div className="img-container">
        <img
          className="img-banner"
          src="Assets/teamPic.png"
          alt="Eric Block"
        ></img>
      </div>
      <div className="about-box">
        <h1>Players</h1>
        <div className="player-grid">
          {players
            .filter((player) => player.player)
            .map((player) => (
              <PlayerCard key={player.name} player={player} />
            ))}
        </div>
        <h1>Coaches</h1>
        <div className="coach-grid">
          {players
            .filter((player) => player.coach)
            .map((player) => (
              <PlayerCard key={player.name} player={player} />
            ))}
        </div>
        <h1>Team Timeline</h1>
        <div className="timeline-box">
          <div className="timeline-1">
            <h3>Past Members</h3>
            <ul className="timeline-list">
              <li>Ashton Hemmings</li>
              <li>Bell Bank</li>
            </ul>
          </div>
          <div className="timeline-2">
            <h3>Newest Members</h3>
            <ul className="timeline-list">
              <li>Gabe Petkaris</li>
              <li>Brandon Williams</li>
            </ul>
          </div>
          <div className="timeline-3">
            <h3>Oldest Members</h3>
            <ul className="timeline-list">
              <li>Sean Farrar</li>
              <li>Eric Jroszczewski</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const players = [
  {
    id: 0,
    name: "Sean Farrar",
    jersey: "Timberlake",
    number: 1,

    image: "Assets/seanFront.png",
    imageBack: "Assets/seanBack.png",
    player: true,
  },
  {
    id: 1,
    name: "Charlize Williams",
    jersey: "The Dog",
    number: 19,
    favourite: "me",
    image: "Assets/charlizeFront.png",
    imageBack: "Assets/charlizeBack.png",
    player: true,
  },
  {
    id: 3,
    name: "Kate Rickard",
    jersey: "Satorious",
    number: 20,
    favourite: "me",
    image: "Assets/kateFront.png",
    imageBack: "Assets/kateBack.png",
    player: true,
  },
  {
    id: 4,
    name: "Mikayla Dwyer",
    jersey: "Jacob Paul",
    number: 29,
    favourite: "me",
    image: "Assets/MikFront.png",
    imageBack: "Assets/MikBack.png",
    player: true,
  },
  {
    id: 5,
    name: "Naish Dare",
    jersey: "Jacob",
    number: 0,
    favourite: "me",
    image: "Assets/naishFront.png",
    imageBack: "Assets/naishBack.png",
    player: true,
  },
  {
    id: 6,
    name: "Jack Bartush",
    jersey: "Karl Jacobs",
    number: 9,
    favourite: "me",
    image: "Assets/jackFront.png",
    imageBack: "Assets/jackBack.png",
    player: true,
  },
  {
    id: 7,
    name: "Eric Jroszczewski",
    jersey: "Edward",
    number: 3,
    favourite: "me",
    image: "Assets/tj-logo.png",
    imageBack: "Assets/tj-logo.png",
    player: true,
  },
  {
    id: 8,
    name: "Brandon Williams",
    jersey: "TBD",
    number: 8,
    favourite: "me",
    image: "Assets/tj-logo.png",
    imageBack: "Assets/tj-logo.png",
    player: true,
  },
  {
    id: 9,
    name: "Gabe Petkaris",
    jersey: "TBD",
    number: 6,
    favourite: "me",
    image: "Assets/tj-logo.png",
    imageBack: "Assets/tj-logo.png",
    player: true,
  },
  {
    id: 10,
    name: "Sarah Green",
    coach: true,
    favourite: "Jacob",
    image: "Assets/tj-logo.png",
    imageBack: "Assets/tj-logo.png",
  },
  {
    id: 11,
    name: "Grace Pollock",
    coach: true,
    favourite: "Jacob",
    image: "Assets/tj-logo.png",
    imageBack: "Assets/tj-logo.png",
  },
];
export { players };
