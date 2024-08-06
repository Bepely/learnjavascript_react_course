import ReviewForm from "../reviewForm/component"
import styles from './style.module.css'

import ReviewContent from "../reviewContent/component";

function Review({reviewIds}) {

    return (
    <div className={styles.reviewsWrapper}>
        <h3>Отзывы</h3>
        {reviewIds?.length && (
            <ul>
            {reviewIds.map(reviewId => {
                return <li key={reviewId}>
                    <ReviewContent reviewId={reviewId}/>
                </li>
            })}
            </ul>
        )}
        <ReviewForm />
    </div>
    );
}

export default Review;