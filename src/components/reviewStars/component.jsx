import styles from "./style.module.css";

function ReviewStars({
  rating,
  hoveredStar,
  handleRatingInput,
  handleStarHover,
}) {
  return (
    <div id="inputRadioContainer">
      {[...Array(5)].map((element, index) => {
        const currentRating = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onChange={(e) => handleRatingInput(e)}
              className={styles.inputRadio}
            />
            <span
              className={`${styles.star} ${currentRating <= (hoveredStar || rating) ? styles.gold : styles.grey}`}
              onMouseEnter={() => handleStarHover(currentRating)}
              onMouseLeave={() => handleStarHover(0)}
            >
              ★
            </span>
          </label>
        );
      })}
    </div>
  );
}

export default ReviewStars;
