export const INITIAL_STATE = {
  name: "",
  text: "",
  rating: 0,
  hoveredStar: 0,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.payload.name,
      };

    case "CHANGE_TEXT":
      return {
        ...state,
        text: action.payload.text,
      };

    case "CHANGE_RATING":
      return {
        ...state,
        rating: action.payload.rating,
      };

    case "CHANGE_HOVERED_STAR":
      return {
        ...state,
        hoveredStar: action.payload.hoveredStar,
      };

    case "SAVE_REVIEW":
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
};
