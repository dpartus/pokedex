import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getEvolutionChain,
  getLocation,
  getPokemon,
  getPokemonSpecies,
} from "../api/pokemon-api";

export interface PokemonDetails {
  id: number;
  color: string;
  abilities: string[];
  moves: string[];
  evolutions: any;
  varieties: string[];
  gender: number;
  types: string[];
  name: string;
  locations: string[];
  error: boolean;
  showLoading: boolean;
  pastSearch: string[];
}

const initialState = {
  id: 0,
  color: "",
  abilities: [],
  moves: [],
  evolutions: [],
  varieties: [],
  gender: 0,
  types: [],
  name: "",
  locations: [],
  pokemonEvolution: [],
  error: false,
  showLoading: false,
  pastSearch: [],
} as PokemonDetails;

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPastSearch: (state, action: PayloadAction<string>) => {
      state.pastSearch.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.fulfilled, (state: PokemonDetails, action) => {
      const {
        id,
        abilities,
        moves,
        types,
        name,
        location,
        color,
        varieties,
        gender_rate,
        pokemonEvolution,
      } = action.payload;
      state.name = name;
      state.id = id;
      state.abilities = abilities.map((ability: any) =>
        ability.ability.name.replaceAll("-", " ")
      );
      state.moves = moves.map((move: any) =>
        move.move.name.replaceAll("-", " ")
      );
      state.types = types.map((type: any) => type.type.name);
      state.locations = location.map((location: any) =>
        location.location_area.name.replaceAll("-", " ")
      );
      state.color = color.name;
      state.varieties = varieties.map((variety: any) =>
        variety.pokemon.name.replaceAll("-", " ")
      );
      state.gender = gender_rate;
      state.evolutions = pokemonEvolution;
      state.showLoading = false;
      state.error = false;
    });
    builder.addCase(fetchPokemon.rejected, (state, action) => {
      state.showLoading = false;
      state.error = true;
    });
    builder.addCase(fetchPokemon.pending, (state) => {
      state.showLoading = true;
    });
  },
});

export const { setPastSearch } = pokemonSlice.actions;
export default pokemonSlice.reducer;

export const fetchPokemon = createAsyncThunk(
  "pokemon/getPokemon",
  async (name: string) => {
    const pokemon = await getPokemon(name);
    const pokemonSpecies = await getPokemonSpecies(name);
    const location = await getLocation(pokemon.location_area_encounters);
    const pokemonEvolution = await getEvolutionChain(
      pokemonSpecies.evolution_chain.url
    );

    const locations = {
      location,
    };

    const evolutionChain = {
      pokemonEvolution,
    };

    const pokemonJoin = {
      ...pokemon,
      ...locations,
      ...pokemonSpecies,
      ...evolutionChain,
    };
    return pokemonJoin;
  }
);
