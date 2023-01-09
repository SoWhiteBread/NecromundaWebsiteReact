const initialState = { data: [] };

const pokemon = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POKE_SUCCESS":
      return { ...state, data: [...state.data, action.payload.pokemon] };
    default:
      return state;
  }
};

export default pokemon;
