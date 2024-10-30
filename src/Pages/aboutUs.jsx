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
          {players.map((player) => (
            <PlayerCard key={player.name} player={player} />
          ))}
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
    favourite: "me",
    image: "Assets/tj-logo.png",
    imageBack: "Assets/tj-logo.png",
  },
  {
    id: 1,
    name: "Charlize Williams",
    jersey: "The Dog",
    number: 19,
    favourite: "me",
    image: "Assets/charlizeFront.png",
    imageBack: "Assets/charlizeBack.png",
  },
  {
    id: 3,
    name: "Kate Rickard",
    jersey: "Satorious",
    number: 20,
    favourite: "me",
    image: "Assets/kateFront.png",
    imageBack: "Assets/kateBack.png",
  },
  {
    id: 4,
    name: "Mikayla Dwyer",
    jersey: "Jacob Paul",
    number: 29,
    favourite: "me",
    image: "Assets/MikFront.png",
    imageBack: "Assets/MikBack.png",
  },
  {
    id: 5,
    name: "Naish Dare",
    jersey: "Jacob",
    number: 0,
    favourite: "me",
    image: "Assets/naishFront.png",
    imageBack: "Assets/naishBack.png",
  },
  {
    id: 6,
    name: "Jack Bartush",
    jersey: "Karl Jacobs",
    number: 9,
    favourite: "me",
    image: "Assets/jackFront.png",
    imageBack: "Assets/jackBack.png",
  },
  {
    id: 7,
    name: "Eric Jroszczewski",
    jersey: "Edward",
    number: 3,
    favourite: "me",
    image: "Assets/tj-logo.png",
    imageBack: "Assets/tj-logo.png",
  },
  {
    id: 8,
    name: "Brandon Williams",
    jersey: "TBD",
    number: 8,
    favourite: "me",
    image: "Assets/tj-logo.png",
    imageBack: "Assets/tj-logo.png",
  },
  {
    id: 9,
    name: "Gabe Petkaris",
    jersey: "TBD",
    number: 6,
    favourite: "me",
    image: "Assets/tj-logo.png",
    imageBack: "Assets/tj-logo.png",
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
