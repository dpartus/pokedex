import pikachu from "../images/pikachu.gif";
function ErrorPage() {
  return (
    <div className="error-page-container">
      <h3>
        Oh no! The Pokemon you are looking for cannot be found. Please try
        again.
      </h3>
      <img src={pikachu} />
    </div>
  );
}

export default ErrorPage;
