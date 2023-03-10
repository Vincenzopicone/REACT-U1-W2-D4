const initialState = {
  favourites: {
    content: [],
  },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };

    case "REMOVE_TO_FAV":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter(
            (_, i) => i !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};

export default appReducer;
