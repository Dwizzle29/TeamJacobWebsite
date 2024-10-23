import React from "react";
 
const PlayerCard = ({ player }) => {
  return (
    <div className="card-vinyl">
      <div className="card-vinyls-images">
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
              <p>
                <span>{player.name} - </span>
                <br />
                {player.number} 
              </p>
              <p>{player.favourite}</p>
              </div>
          ) : (
            <div className="player-card">
            <img
              src={player.image}
              alt={`image-${player.id}`}
              className="card-image"
            />
            <p>
              <span>{player.name} - </span>
              <br />
              {player.number} 
            </p>
            <p>{player.favourite}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;