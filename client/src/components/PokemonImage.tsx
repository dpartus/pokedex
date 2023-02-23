import "./pokemon-image.scss";

interface ImageProp {
  id: number;
}

const PokemonImage: React.FC<ImageProp> = ({ id }) => {
  return (
    <img
      alt="pokemon"
      className="image"
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
    />
  );
};

export default PokemonImage;
