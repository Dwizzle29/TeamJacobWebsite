import players from "../components/data/playerInfo.js";
import PlayerCard from "../components/playerCard.jsx";
export default function About() {
  return (
    <div className="main-container">
      <h1>About</h1>
      {playerGroup.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
}
