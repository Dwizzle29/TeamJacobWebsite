import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const PlayerCard = ({ player }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="card-box">
      <div className="card-images">
        <div
          onMouseEnter={() => setHidden(false)}
          onMouseLeave={() => setHidden(true)}
        >
          {/* front and back of player */}
          {hidden ? (
            <div className="player-card">
              <img
                src={player.image}
                alt={`image-${player.id}`}
                className="card-image"
              />
              <p className="player-name">
                <span>{player.name} </span>
                <span> {player.number}</span>
              </p>
              <NavLink to="/NotFound">Learn More!</NavLink>
            </div>
          ) : (
            <div className="player-card">
              <img
                src={player.imageBack}
                alt={`image-${player.id}`}
                className="card-image"
              />
              <p className="player-name">
                <span>{player.name} </span>
                <span> {player.number}</span>
              </p>
              <NavLink to="/NotFound">Learn More!</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
