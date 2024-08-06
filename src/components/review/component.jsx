import ReviewForm from "../reviewForm/component";
import styles from "./style.module.css";

import ReviewContent from "../reviewContent/component";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestarauntById } from "../../redux/entities/restaraunt";

function Review() {
  const { restaurantId } = useParams();
  const currentRestaurant = useSelector((state) =>
    selectRestarauntById(state, restaurantId)
  );

  return (
    <div className={styles.reviewsWrapper}>
      <h3>Отзывы</h3>
      {currentRestaurant.reviews?.length && (
        <ul>
          {currentRestaurant.reviews.map((reviewId) => {
            return (
              <li key={reviewId}>
                <ReviewContent reviewId={reviewId} />
              </li>
            );
          })}
        </ul>
      )}
      <ReviewForm />
    </div>
  );
}

export default Review;
