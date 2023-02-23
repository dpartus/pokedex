import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import PokemonDetails from "./components/PokemonDetails";
import SearchPage from "./pages/SearchPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <div className="main">
      <SearchPage />
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/details/" element={<PokemonDetails />}></Route>
      </Routes>
      <Loading />
    </div>
  );
}

export default App;
