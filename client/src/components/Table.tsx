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

  // -1 genderless, 0 all male, 8 all female, anything in between both female and male
  const genderCalc = () => {
    switch (gender) {
      case -1:
        return "Genderless";
      case 0:
        return "Male";
      case 8:
        return "Female";
      default:
        return "Male/Female";
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
          return <Pill label={type} />;
        })}
      </div>
      <hr />
      <div className="sub-info">
        <h5>Abilities</h5>
        {abilities.map((ability: string) => {
          return <Pill label={ability} />;
        })}
      </div>
      <hr />
      <div className="sub-info">
        <h5>Varieties</h5>
        {varieties.map((variety: string) => {
          return <Pill label={variety} />;
        })}
      </div>
    </div>
  );
}

export default Table;
