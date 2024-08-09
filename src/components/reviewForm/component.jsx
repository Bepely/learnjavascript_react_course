import { useReducer } from "react";
import ReviewStars from "../reviewStars/component";

import { INITIAL_STATE, formReducer } from "../../reducers/form/formReducer";

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
      <ReviewStars
        rating={state.rating}
        hoveredStar={state.hoveredStar}
        handleRatingInput={handleRatingInput}
        handleStarHover={handleStarHover}
      />
      <br />
      <button onClick={handleSaveButtonClick}>Save review</button>
    </div>
  );
}

export default ReviewForm;
