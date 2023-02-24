import logo from "../images/pokedex-logo.png";
function WelcomePage() {
  return (
    <div className="welcome-main">
      <div className="welcome-page-container">
        <img src={logo} />
      </div>
      <p>
        Welcome to the newest version of the Pokedex! Although it is not fully
        up to specs with the old Pokedex, I am sure you will be able to find a
        lot of useful information.
      </p>
      <p>
        Version 1.0 of the new Pokedex will give you the following information
        about the Pokemon you searched for:
      </p>
      <ul>
        <li>Abilities</li>
        <li>Color</li>
        <li>Evolution Chain</li>
        <li>Genders</li>
        <li>Locations</li>
        <li>Moves</li>
        <li>Type</li>
        <li>Varieties</li>
      </ul>
      <p>
        We would love to hear what you think of the new Pokedex, so please let
        us know{" "}
        <a href="mailto: daniel.artus11@gmail.com">
          Pokedex Unlimited Software Solutions
        </a>
        .
      </p>
    </div>
  );
}

export default WelcomePage;
