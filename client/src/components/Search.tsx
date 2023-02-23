import { useState, ChangeEvent } from "react";
import "./search.scss";

interface SearchProps {
  handleSubmit: any;
  placeholderText: string;
}

const Search: React.FC<SearchProps> = ({ handleSubmit, placeholderText }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit(searchTerm.toLocaleLowerCase());
  };

  return (
    <div className="search-container">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder={placeholderText}
          className="search-input"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
