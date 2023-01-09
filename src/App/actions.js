const fetchPokeSuccess = (pokemon) => ({
  type: "FETCH_POKE_SUCCESS",
  payload: { pokemon }
});

export const fetchPokemon = () => {
  return async (dispatch) =>
    fetch("https://pokeapi.co/api/v2/pokemon?limit=30&offset=30")
      .then((response) => response.json())
      .then((allpokemon) => {
        allpokemon.results.forEach((pokemon) => {
          let url = pokemon.url;
          fetch(url)
            .then((response) => response.json())
            .then((pokemonData) => dispatch(fetchPokeSuccess(pokemonData)));
        });
      });
};
