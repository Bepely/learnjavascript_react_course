import { useReducer } from "react";
import "./style.css";

const INITIAL_STATE = {
  name: "",
  text: "",
  rating: 0,
  hoveredStar: 0,
};

const formReducer = (state, action) => {
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

function ReviewForm() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const handleNameInput = (e) => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        name: e.target.value,
      },
    });
  };

  const handleTextInput = (e) => {
    dispatch({
      type: "CHANGE_TEXT",
      payload: {
        text: e.target.value,
      },
    });
  };

  const handleRatingInput = (e) => {
    dispatch({
      type: "CHANGE_RATING",
      payload: {
        rating: Number(e.target.value),
      },
    });
  };

  const handleStarHover = (hoveredStar) => {
    dispatch({
      type: "CHANGE_HOVERED_STAR",
      payload: { hoveredStar },
    });
  };

  const handleSaveButtonClick = () => {
    dispatch({
      type: "SAVE_REVIEW",
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        id="reviewNameInput"
        onChange={handleNameInput}
        value={state.name}
        placeholder="Enter your name..."
      />
      <br />
      <input
        type="textarea"
        name="text"
        id="reviewTextInput"
        onChange={handleTextInput}
        value={state.text}
        placeholder="Enter your review..."
      />
      <div id="inputRadioContainer">
        {[...Array(5)].map((element, index) => {
          const currentRating = index + 1;

          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onChange={handleRatingInput}
              />
              <span
                className="star"
                style={{
                  color:
                    currentRating <= (state.hoveredStar || state.rating)
                      ? "gold"
                      : "grey",
                }}
                onMouseEnter={() => handleStarHover(currentRating)}
                onMouseLeave={() => handleStarHover(0)}
              >
                ★
              </span>
            </label>
          );
        })}
        <br />
        <button onClick={handleSaveButtonClick}>Save review</button>
      </div>
    </div>
  );
}

export default ReviewForm;
