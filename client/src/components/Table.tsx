import { useAppSelector } from "../hooks";
import Pill from "./Pill";
import "./table.scss";

function Table() {
  const [color, gender, abilities, types, varieties] = useAppSelector(
    (state) => [
      state.pokemon.color,
      state.pokemon.gender,
      state.pokemon.abilities,
      state.pokemon.types,
      state.pokemon.varieties,
    ]
  );

  // pulled from https://gist.github.com/apaleslimghost/0d25ec801ca4fc43317bcff298af43c3
  const typeColors: any = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  // -1 genderless, 0 all male, 8 all female, anything in between both female and male
  const genderCalc = () => {
    switch (gender) {
      case -1:
        return "genderless";
      case 0:
        return "male";
      case 8:
        return "female";
      default:
        return "male/female";
    }
  };
  return (
    <div className="table-container">
      <div className="sub-info">
        <h5>Color</h5>
        <Pill label={color} color={color} />
      </div>
      <hr />
      <div className="sub-info">
        <h5>Gender</h5>
        <Pill label={genderCalc()} />
      </div>
      <hr />
      <div className="sub-info">
        <h5>Type</h5>
        {types.map((type: string) => {
          return <Pill key={type} label={type} color={typeColors[type]} />;
        })}
      </div>
      <hr />
      <div className="sub-info">
        <h5>Abilities</h5>
        {abilities.map((ability: string) => {
          return <Pill key={ability} label={ability} />;
        })}
      </div>
      <hr />
      <div className="sub-info">
        <h5>Varieties</h5>
        {varieties.map((variety: string) => {
          return <Pill key={variety} label={variety} />;
        })}
      </div>
    </div>
  );
}

export default Table;
