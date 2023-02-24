import { useAppDispatch, useAppSelector } from "../hooks";
import PokemonImage from "./PokemonImage";
import "./pokemon-details.scss";
import Table from "./Table";
import Accordion from "./Accordion";
import { useEffect } from "react";
import { fetchPokemon } from "../store/pokemonSlice";
import { useSearchParams } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";

function PokemonDetails() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("term") as string;

  const dispatch = useAppDispatch();

  const [id, moves, name, locations, error] = useAppSelector((state) => [
    state.pokemon.id,
    state.pokemon.moves,
    state.pokemon.name,
    state.pokemon.locations,
    state.pokemon.error,
  ]);

  useEffect(() => {
    dispatch(fetchPokemon(searchTerm));
  }, []);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div>
      <h1 className="pokemon-name">{name}</h1>
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
