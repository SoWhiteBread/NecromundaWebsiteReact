import { React } from "react";

export const Card = ({ pokeData }) => {
  return (
    <div className="card" key={pokeData.id}>
      <div className="cardTopThird">
        <img
          className="pokeSprite"
          src={pokeData.sprites.front_default}
          alt="Sprite of Pokemon"
          aria-label="Sprite of Pokemon"
        />
        <div className="pokeHeader">
          <div className="pokeName">
            Pokemon Name: {pokeData.name.charAt(0).toUpperCase()}
            {pokeData.name.slice(1)}
          </div>
          <div className="pokeSpecies">
            Pokemon Species: {pokeData.species.name.charAt(0).toUpperCase()}
            {pokeData.species.name.slice(1)}
          </div>
        </div>
      </div>
      <div className="cardMiddleThird">
        <div className="pokeGameName">
          First Encountered in the game Pokemon{" "}
          {pokeData.game_indices[0].version.name.charAt(0).toUpperCase()}
          {pokeData.game_indices[0].version.name.slice(1)}
        </div>
        <div className="pokeTagContainer">
          {pokeData.types.map((i) => (
            <div key={i.slot} className="pokeTypeTag">
              {i.type.name.charAt(0).toUpperCase()}
              {i.type.name.slice(1)}
            </div>
          ))}
        </div>
      </div>
      <div className="cardBottomThird">
        <div className="pokeMoveCount">
          {pokeData.moves.length} Available Moves
        </div>
        <div className="pokeXP">
          Starting Experience: {pokeData.base_experience}
        </div>
      </div>
    </div>
  );
};
