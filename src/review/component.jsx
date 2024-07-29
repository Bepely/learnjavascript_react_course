import ReviewForm from "../reviewForm/component"

import styles from './style.module.css'

function Review({reviews}) {
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