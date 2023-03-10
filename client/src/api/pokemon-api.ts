const baseUrl = "https://pokeapi.co/api/v2";

const getPokemon = async (name: string) => {
  const response = await fetch(`${baseUrl}/pokemon/${name}`);
  const data = await response.json();
  return data;
};

const getPokemonSpecies = async (name: string) => {
  const response = await fetch(`${baseUrl}/pokemon-species/${name}`);
  const data = await response.json();
  return data;
};

const getLocation = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getEvolutionChain = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();

  // parse out needed data for species
  const speciesData = [
    {
      name: data.chain.species.name,
      url: data.chain.species.url,
    },
  ];
  let currentChain = data.chain;
  while (currentChain.evolves_to.length > 0) {
    currentChain = currentChain.evolves_to[0];
    speciesData.push({
      name: currentChain.species.name,
      url: currentChain.species.url,
    });
  }

  return speciesData;
};

export { getPokemon, getPokemonSpecies, getLocation, getEvolutionChain };

/**
 * Abilities /{name}
 * Color /pokemon-species/{name}
 * Evolutions /pokemon-species/{name}
 * Genders can calculate this based on gender rate and has_gender_difference
 * Locations /{name}/encounters
 * Moves /{name}
 * Type /{name}
 * Varieties /pokemon-species/{name}
 */
