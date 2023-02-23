import { useAppDispatch, useAppSelector } from "../hooks";
import PokemonImage from "./PokemonImage";
import "./pokemon-details.scss";
import Table from "./Table";
import Accordion from "./Accordion";
// import { fetchPokemon } from "../store/pokemonSlice";
// import { useEffect } from "react";

function PokemonDetails() {
  // const dispatch = useAppDispatch();

  const [id, moves, name, locations] = useAppSelector((state) => [
    state.pokemon.id,
    state.pokemon.moves,
    state.pokemon.name,
    state.pokemon.locations,
  ]);

  // useEffect(() => {
  //   dispatch(fetchPokemon());
  // }, []);

  return (
    <div>
      <h1>{name}</h1>
      <section className="pokemon-details-container">
        <div className="image-container">
          <PokemonImage id={id} />
        </div>
        <Table />
      </section>
      <Accordion title="Moves" content={moves} />
      <Accordion title="Locations" content={locations} />
    </div>
  );
}

export default PokemonDetails;