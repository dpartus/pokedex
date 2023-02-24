import { useAppDispatch, useAppSelector } from "../hooks";
import Search from "../components/Search";
import { fetchPokemon } from "../store/pokemonSlice";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const pastSearch = useAppSelector((state) => state.pokemon.pastSearch);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (searchTerm: string) => {
    await dispatch(fetchPokemon(searchTerm));
    navigate({ pathname: `/details/${searchTerm}` });
  };

  return (
    <div>
      <Search
        handleSubmit={handleSubmit}
        pastSearch={pastSearch}
        placeholderText="Search for any Pokemon!"
      />
    </div>
  );
}

export default SearchPage;
