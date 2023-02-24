import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";
import "./pokemon-evolution.scss";
import PokemonImage from "./PokemonImage";

function PokemonEvolutions() {
  const evolutions = useAppSelector((state) => state.pokemon.evolutions);

  const evoInfo = evolutions.map((evolution: any) => {
    // getting image pokemon id from url for image. Probably a better way to do this.
    const link = evolution.url;
    const id = link.split("pokemon-species/").pop().replace("/", "");

    return (
      <div>
        <Link to={`/details/${evolution.name}`}>
          <img
            className="evolution-image"
            alt="pokemon"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          />
        </Link>
        <h3>{evolution.name}</h3>
      </div>
    );
  });

  return (
    <section className="evolution-main">
      <h1>Evolutions</h1>
      <div className="pokemon-evolutions-container">{evoInfo}</div>
    </section>
  );
}

export default PokemonEvolutions;
