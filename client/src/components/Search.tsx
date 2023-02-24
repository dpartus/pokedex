import { useState, ChangeEvent, useEffect } from "react";
import { useAppDispatch } from "../hooks";
import { setPastSearch } from "../store/pokemonSlice";
import "./search.scss";

interface SearchProps {
  handleSubmit: any;
  placeholderText: string;
  pastSearch: string[];
}

const Search: React.FC<SearchProps> = ({
  handleSubmit,
  placeholderText,
  pastSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showPastSearch, setShowPastSearch] = useState<boolean>(true);

  useEffect(() => {}, [showPastSearch]);

  const dispatch = useAppDispatch();

  const handleFocus = () => {
    if (pastSearch.length) {
      setShowPastSearch(true);
    }
  };

  const handleBlur = () => {
    setShowPastSearch(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit(searchTerm.toLocaleLowerCase());
    dispatch(setPastSearch(searchTerm.toLocaleLowerCase()));
  };

  const testHandler = () => {
    console.log("here");
    handleSubmit(searchTerm.toLocaleLowerCase());
  };

  // rename
  const results = pastSearch.map((search) => {
    return (
      <ul>
        <li onClick={testHandler}>{search}</li>
      </ul>
    );
  });

  return (
    <div className="search-container">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder={placeholderText}
          className="search-input"
          value={searchTerm}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </form>
      {/* <div className="past-search-container">{showPastSearch && results}</div> */}
    </div>
  );
};

export default Search;
