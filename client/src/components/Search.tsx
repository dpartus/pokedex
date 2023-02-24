import {
  useState,
  ChangeEvent,
  useEffect,
  useRef,
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
  const [showPastSearch, setShowPastSearch] = useState<boolean>(false);
  const refElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // handles closing past search results when use clicks outside of element
    const handler = (event: any) => {
      if (!refElement.current) {
        return;
      }

      if (!refElement.current.contains(event.target)) {
        setShowPastSearch(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const dispatch = useAppDispatch();

  const handleFocus = () => {
    if (pastSearch.length) {
      setShowPastSearch(true);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLocaleLowerCase());
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (searchTerm.length) {
      handleSubmit(searchTerm);
      dispatch(setPastSearch(searchTerm));
      setShowPastSearch(false);
    }
  };

  const handleClickSubmit = () => {
    if (searchTerm.length) {
      handleSubmit(searchTerm);
      dispatch(setPastSearch(searchTerm));
      setShowPastSearch(false);
    }
  };

  const handleRecentSearchSubmit = (term: string) => {
    handleSubmit(term);
  };

  const recent = pastSearch.map((search) => {
    return (
      <ul>
        <li onClick={() => handleRecentSearchSubmit(search)}>{search}</li>
      </ul>
    );
  });

  return (
    <header ref={refElement} className="search-container">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder={placeholderText}
          className="search-input"
          value={searchTerm}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        <img
          onClick={handleClickSubmit}
          src={pokeball}
          alt="pokeball"
          className="search-image"
        />
      </form>

      {showPastSearch && <div className="past-search-container">{recent}</div>}
    </header>
  );
};

export default Search;
