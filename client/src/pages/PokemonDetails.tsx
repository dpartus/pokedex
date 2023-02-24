import { useAppDispatch, useAppSelector } from "../hooks";
import PokemonImage from "../components/PokemonImage";
import "../components/pokemon-details.scss";
import Table from "../components/Table";
import Accordion from "../components/Accordion";
import { useEffect } from "react";
import { fetchPokemon } from "../store/pokemonSlice";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import PokemonEvolutions from "../components/PokemonEvolution";

function PokemonDetails() {
  const { pokemon } = useParams();

  const dispatch = useAppDispatch();

  const [id, moves, name, locations, error] = useAppSelector((state) => [
    state.pokemon.id,
    state.pokemon.moves,
    state.pokemon.name,
    state.pokemon.locations,
    state.pokemon.error,
  ]);

  const capitalName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  useEffect(() => {
    dispatch(fetchPokemon(pokemon as string));
  }, [pokemon]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div>
      <h1 className="pokemon-name">{capitalName(name)}</h1>
      <section className="pokemon-details-container">
        <div className="image-container">
          <PokemonImage id={id} />
        </div>
        <Table />
      </section>
      <PokemonEvolutions />
      <Accordion title="Moves" content={moves} />
      <Accordion title="Locations" content={locations} />
    </div>
  );
}

export default PokemonDetails;
