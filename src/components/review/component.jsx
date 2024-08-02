import ReviewForm from "../reviewForm/component"
import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review";
import styles from './style.module.css'

function Review({reviewIds}) {

    const reviews = useSelector((state) => 
        reviewIds.map(reviewId => selectReviewById(state, reviewId))    
    )

    return (
    <div className={styles.reviewsWrapper}>
        <h3>Отзывы</h3>
        {reviews?.length && (
            <ul>
            {/* Display every review */}
            {reviews.map(review => {
                return <li>{review.text}</li>
            })}
            </ul>
        )}
        <ReviewForm />
    </div>
    );
}

export default Review;