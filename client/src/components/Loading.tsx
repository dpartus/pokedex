import { useAppSelector } from "../hooks";
import pokeball from "../images/pokeball.png";
import "./loading.scss";

function Loading() {
  const showLoading = useAppSelector((state) => state.pokemon.showLoading);

  return (
    <div>
      {showLoading && (
        <img className="loading-image" src={pokeball} alt="pokeball" />
      )}
    </div>
  );
}

export default Loading;
