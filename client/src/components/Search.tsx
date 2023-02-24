import {
  useState,
  ChangeEvent,
  useEffect,
  // MouseEventHandler,
  // ButtonHTMLAttributes,
} from "react";
import { useAppDispatch } from "../hooks";
import { setPastSearch } from "../store/pokemonSlice";
import "./search.scss";
import pokeball from "../images/pokeball.png";

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

  // const handleButtonClick = () => {
  //   setShowPastSearch(!showPastSearch);
  // };

  // const handleBlur = () => {
  //   setShowPastSearch(false);
  // };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLocaleLowerCase());
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (searchTerm.length) {
      handleSubmit(searchTerm);
      dispatch(setPastSearch(searchTerm));
    }
  };

  const handleClickSubmit = () => {
    if (searchTerm.length) {
      handleSubmit(searchTerm);
      dispatch(setPastSearch(searchTerm));
    }
  };

  // rename
  // const results = pastSearch.map((search) => {
  //   return (
  //     <div className="past-search-container">
  //       <ul>
  //         <li onClick={testHandler}>{search}</li>
  //       </ul>
  //     </div>
  //   );
  // });

  // const dropdown =

  return (
    <div className="search-container">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder={placeholderText}
          className="search-input"
          value={searchTerm}
          onChange={handleChange}
          // onFocus={handleFocus}
          // onBlur={handleBlur}
        />
        <img
          onClick={handleClickSubmit}
          src={pokeball}
          className="search-image"
        />
      </form>
      {/* <div className="past-search-button" onClick={handleButtonClick}>
        Past searches
      </div>
      {showPastSearch && results} */}
    </div>
  );
};

export default Search;
