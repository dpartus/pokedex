import { useAppDispatch, useAppSelector } from "../hooks";
import Search from "../components/Search";
import { fetchPokemon } from "../store/pokemonSlice";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const error = useAppSelector((state) => state.pokemon.error);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (searchTerm: string) => {
    const test = await dispatch(fetchPokemon(searchTerm));

    if (error) {
      console.log(test);
      return "oooooppppp";
    } else {
      return navigate(`/details/${searchTerm}`);
    }
  };

  return (
    <div>
      <Search
        handleSubmit={handleSubmit}
        placeholderText="Search for any Pokemon!"
      />
    </div>
  );
}

export default SearchPage;
