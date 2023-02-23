import React from "react";
import { Routes, Route } from "react-router-dom";
import PokemonDetails from "./components/PokemonDetails";
import SearchPage from "./pages/SearchPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <div className="main">
      <SearchPage />
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/details/:pokemon" element={<PokemonDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
