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

    // eventually move this to a helper to use in different files
    const capitalName = (name: string) => {
      return name.charAt(0).toUpperCase() + name.slice(1);
    };

    return (
      <div>
        <Link to={`/details/${evolution.name}`}>
          <img
            className="evolution-image"
            alt="pokemon"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          />
        </Link>
        <h3>{capitalName(evolution.name)}</h3>
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
